/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import {
  customElement,
  property,
  state,
  queryAssignedNodes,
} from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';

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
  internals = this.attachInternals();

  /** ARIA label for the button for accessibility. */
  @property({ type: String })
  description = '';

  /** Type for the &lt;button&gt; element. */
  @property({ type: String })
  type: BUTTON_TYPES = BUTTON_TYPES.BUTTON;

  /** Specifies the visual appearance/kind of the button. */
  @property({ type: String })
  kind: BUTTON_KINDS = BUTTON_KINDS.PRIMARY_APP;

  /** Converts the button to an &lt;a&gt; tag if specified. */
  @property({ type: String })
  href = '';

  /** Specifies the size of the button. */
  @property({ type: String })
  size: BUTTON_SIZES = BUTTON_SIZES.MEDIUM;

  /** Specifies the position of the icon relative to any button text. */
  @property({ type: String })
  iconPosition: BUTTON_ICON_POSITION = BUTTON_ICON_POSITION.CENTER;

  /** Determines if the button is disabled. */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Determines if the button indicates a destructive action. */
  @property({ type: Boolean, reflect: true })
  destructive = false;

  /** Button value.  */
  @property({ type: String })
  value!: string;

  /** Button formmethod.  */
  @property({ type: String })
  formmethod!: string;

  /** Queries default slot nodes.
   * @internal
   */
  @queryAssignedNodes()
  _slottedEls!: Array<any>;

  /** Queries icon slot nodes.
   * @internal
   */
  @queryAssignedNodes({ slot: 'icon' })
  _iconEls!: Array<any>;

  override render() {
    const TextNodes = this._slottedEls.filter((node: any) => {
      return node.textContent.trim() !== '';
    });

    const typeClassMap = {
      [BUTTON_KINDS.PRIMARY_APP]: 'primary-app',
      [BUTTON_KINDS.PRIMARY_WEB]: 'primary-web',
      [BUTTON_KINDS.SECONDARY]: 'secondary',
      [BUTTON_KINDS.TERTIARY]: 'tertiary',
    };

    const baseTypeClass = typeClassMap[this.kind];
    const destructModifier = this.destructive ? '-destructive' : '';

    const classes = {
      [`kd-btn--${baseTypeClass}${destructModifier}`]: true,
      [`kd-btn--${baseTypeClass}`]: !this.destructive,
      'kd-btn--large': this.size === BUTTON_SIZES.LARGE,
      'kd-btn--small': this.size === BUTTON_SIZES.SMALL,
      'kd-btn--medium': this.size === BUTTON_SIZES.MEDIUM,
      [`kd-btn--icon-${this.iconPosition}`]: !!this.iconPosition,
      'icon-only': this._iconEls.length && !TextNodes.length,
    };

    return html`
      ${this.href !== ''
        ? html`
            <a
              class=${classMap(classes)}
              href=${this.href}
              ?disabled=${this.disabled}
              aria-label=${ifDefined(this.description || undefined)}
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
              aria-label=${ifDefined(this.description || undefined)}
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
        this.internals.form.submit();
      } else if (this.type === 'reset') {
        this.internals.form.reset();
      }
    }

    const event = new CustomEvent('on-click', {
      detail: { origEvent: e },
    });
    this.dispatchEvent(event);
  }

  private _handleSlotChange() {
    this.requestUpdate();
  }

  override firstUpdated() {
    this._handleSlotChange();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-button': Button;
  }
}
