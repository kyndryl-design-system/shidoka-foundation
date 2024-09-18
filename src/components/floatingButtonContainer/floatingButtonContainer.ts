import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import FloatingButtoContainerScss from './floatingButtonContainer.scss';

/**
 * Float Container component.
 * @slot unnamed - Slot for kd-button options.
 */

@customElement('kd-float-container')
export class FloatingContainer extends LitElement {
  static override styles = FloatingButtoContainerScss;
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
    'kd-float-container': FloatingContainer;
  }
}
