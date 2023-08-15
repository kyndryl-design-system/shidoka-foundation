/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';

import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_ICON_POSITION } from './defs';

import stylesheet from './button.scss';

/**
 * Kyndryl-branded L0 Button component.
 *
 * @slot - Content slot for the button.
 * @csspart button - Styles applied to the button.
 */
@customElement('kd-button')
export class Button extends LitElement {
  static override styles = [stylesheet];

  /** Identifier used primarily for testing purposes. */
  @property({ type: String, attribute: 'data-testid' }) dataTestId =
    'kd-button-testId';

  /** ARIA label for the button for accessibility. */
  @property({ type: String }) description = '';

  /** Specifies the visual appearance/type of the button. */
  @property() type: BUTTON_TYPES = BUTTON_TYPES.PRIMARY;

  /** Indicates if the context pertains to an app. */
  @property({ type: Boolean }) app = true;

  /** Specifies the size of the button. */
  @property() size: BUTTON_SIZES = BUTTON_SIZES.MEDIUM;

  /** Specifies the position of the icon relative to any button text. */
  @property() iconPosition?: BUTTON_ICON_POSITION = BUTTON_ICON_POSITION.LEFT;

  /** Determines if the button is disabled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Determines if the button indicates a destructive action. */
  @property({ type: Boolean, reflect: true }) destructive = false;

  override render() {
    const typeClassMap = {
      [BUTTON_TYPES.PRIMARY]: 'primary',
      [BUTTON_TYPES.SECONDARY]: 'secondary',
      [BUTTON_TYPES.TERTIARY]: 'tertiary',
    };

    const baseTypeClass = typeClassMap[this.type];
    const appOrWeb = this.app ? 'app' : 'web';
    const destructModifier = this.destructive ? '-destructive' : '';

    const classes = {
      [`kd-btn--${baseTypeClass}${destructModifier}`]: true,
      [`kd-btn--${baseTypeClass}-${appOrWeb}`]:
        baseTypeClass === 'primary' && !this.destructive,
      'kd-btn--large': this.size === BUTTON_SIZES.LARGE,
      'kd-btn--small': this.size === BUTTON_SIZES.SMALL,
      'kd-btn--medium': this.size === BUTTON_SIZES.MEDIUM,
      [`kd-btn--icon-${this.iconPosition}`]: !!this.iconPosition,
    };

    return html`<button
      data-testid=${this.dataTestId}
      class=${classMap(classes)}
      ?disabled=${this.disabled}
      aria-label=${ifDefined(this.description || undefined)}
    >
      <slot></slot>
    </button>`;
  }
}
