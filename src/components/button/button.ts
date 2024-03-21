/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  state,
  query,
  queryAssignedNodes,
  queryAssignedElements,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { debounce } from '../../common/helpers/events';

import {
  BUTTON_KINDS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_ICON_POSITION,
} from './defs';

import stylesheet from './button.scss';

/**
 * Button component.
 *
 * @slot unnamed - Slot for button text.
 * @slot icon - Slot for an icon.
 * @fires on-click - Emits the original click event.
 */
@customElement('kd-button')
export class Button extends LitElement {
  static override styles = [stylesheet];

  /** @ignore */
  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  /**
   * Associate the component with forms.
   * @ignore
   */
  static formAssociated = true;

  /**
   * Attached internals for form association.
   * @ignore
   */
  @state()
  accessor internals = this.attachInternals();

  /** ARIA label for the button for accessibility. */
  @property({ type: String })
  accessor description = '';

  /** Type for the &lt;button&gt; element. */
  @property({ type: String })
  accessor type: BUTTON_TYPES = BUTTON_TYPES.BUTTON;

  /** Specifies the visual appearance/kind of the button. */
  @property({ type: String })
  accessor kind: BUTTON_KINDS = BUTTON_KINDS.PRIMARY_APP;

  /** Converts the button to an &lt;a&gt; tag if specified. */
  @property({ type: String })
  accessor href = '';

  /** Specifies the size of the button. */
  @property({ type: String })
  accessor size: BUTTON_SIZES = BUTTON_SIZES.MEDIUM;

  /** Specifies the position of the icon relative to any button text. */
  @property({ type: String })
  accessor iconPosition: BUTTON_ICON_POSITION = BUTTON_ICON_POSITION.CENTER;

  /** Determines if the button is disabled.
   * @internal
   */
  @state()
  accessor iconOnly = false;

  /** Determines if the button is disabled. */
  @property({ type: Boolean, reflect: true })
  accessor disabled = false;

  /** Determines if the button indicates a destructive action. */
  @property({ type: Boolean, reflect: true })
  accessor destructive = false;

  /** Button value.  */
  @property({ type: String })
  accessor value = '';

  /** Button name. */
  @property({ type: String })
  accessor name = '';

  /** Button formmethod.  */
  @property({ type: String })
  accessor formmethod!: any;

  /** Queries default slot nodes.
   * @internal
   */
  @queryAssignedNodes()
  accessor _slottedEls!: Array<Node>;

  /** Queries icon slot nodes.
   * @internal
   */
  @queryAssignedElements({ slot: 'icon' })
  accessor _iconEls!: Array<any>;

  /** Queries the .button element.
   * @internal
   */
  @query('.button')
  accessor _btnEl!: any;

  override render() {
    const typeClassMap = {
      [BUTTON_KINDS.PRIMARY_APP]: 'primary-app',
      [BUTTON_KINDS.PRIMARY_WEB]: 'primary-web',
      [BUTTON_KINDS.SECONDARY]: 'secondary',
      [BUTTON_KINDS.TERTIARY]: 'tertiary',
    };

    const baseTypeClass = typeClassMap[this.kind];
    const destructModifier = this.destructive ? '-destructive' : '';

    const classes = {
      button: true,
      [`kd-btn--${baseTypeClass}${destructModifier}`]: true,
      [`kd-btn--${baseTypeClass}`]: !this.destructive,
      'kd-btn--large': this.size === BUTTON_SIZES.LARGE,
      'kd-btn--small': this.size === BUTTON_SIZES.SMALL,
      'kd-btn--medium': this.size === BUTTON_SIZES.MEDIUM,
      [`kd-btn--icon-${this.iconPosition}`]:
        !!this.iconPosition && !this.iconOnly,
      [`kd-btn--icon-center`]: this._iconEls?.length && this.iconOnly,
      'icon-only': this._iconEls?.length && this.iconOnly,
    };

    return html`
      ${this.href && this.href !== ''
        ? html`
            <a
              class=${classMap(classes)}
              href=${this.href}
              ?disabled=${this.disabled}
              aria-label=${ifDefined(this.description)}
              title=${ifDefined(this.description)}
              @click=${(e: Event) => this.handleClick(e)}
            >
              <span>
                <slot @slotchange=${() => this._handleSlotChange()}></slot>
                <slot
                  name="icon"
                  @slotchange=${() => this._handleSlotChange()}
                ></slot>
              </span>
            </a>
          `
        : html`
            <button
              class=${classMap(classes)}
              type=${this.type}
              ?disabled=${this.disabled}
              aria-label=${ifDefined(this.description)}
              title=${ifDefined(this.description)}
              name=${ifDefined(this.name)}
              value=${ifDefined(this.value)}
              formmethod=${ifDefined(this.formmethod)}
              @click=${(e: Event) => this.handleClick(e)}
            >
              <span>
                <slot @slotchange=${() => this._handleSlotChange()}></slot>
                <slot
                  name="icon"
                  @slotchange=${() => this._handleSlotChange()}
                ></slot>
              </span>
            </button>
          `}
    `;
  }

  private handleClick(e: Event) {
    if (this.internals.form) {
      if (this.type === 'submit') {
        this.internals.form.requestSubmit();
      } else if (this.type === 'reset') {
        this.internals.form.reset();
      }
    }

    const event = new CustomEvent('on-click', {
      detail: { origEvent: e },
    });
    this.dispatchEvent(event);
  }

  private _testIconOnly() {
    if (!this._iconEls?.length) {
      return false;
    }

    const TextNodes = this._slottedEls.filter((node: any) => {
      return node.textContent.trim() !== '';
    });
    const VisibleTextNodes = TextNodes.filter((node: any) => {
      if (node.tagName) {
        return node.offsetParent;
      } else {
        return true;
      }
    });

    return !VisibleTextNodes.length;
  }

  private _handleSlotChange() {
    this.iconOnly = this._testIconOnly();
    this.requestUpdate();
  }

  override connectedCallback() {
    super.connectedCallback();

    window.addEventListener(
      'resize',
      debounce(() => {
        this.iconOnly = this._testIconOnly();
      })
    );
  }

  override disconnectedCallback() {
    window.removeEventListener(
      'resize',
      debounce(() => {
        this.iconOnly = this._testIconOnly();
      })
    );

    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-button': Button;
  }
}
