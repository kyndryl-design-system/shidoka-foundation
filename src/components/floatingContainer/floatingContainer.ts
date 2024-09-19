import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FloatingContainerScss from './floatingContainer.scss';

/**
 * Floating Container.
 * @slot unnamed - Slot for kd-button options.
 */

@customElement('kd-button-float-container')
export class FloatingContainer extends LitElement {
  static override styles = FloatingContainerScss;
  override render() {
    return html`
      <div class="floating-btn-wrapper">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-button-float-container': FloatingContainer;
  }
}
