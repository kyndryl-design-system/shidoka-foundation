import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FloatingButtonScss from './floatingButton.scss';

/**
 * Float Button
 * @slot unnamed - Slot for kd-button options.
 */

@customElement('kd-float-btn')
export class FloatingButton extends LitElement {
  static override styles = FloatingButtonScss;
  override render() {
    return html`
      <div part="floating-btn-wrapper" class="floating-btn-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-float-btn': FloatingButton;
  }
}
