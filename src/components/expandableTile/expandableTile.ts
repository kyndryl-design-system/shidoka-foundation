import { html, LitElement } from 'lit';
import Styles from './expandableTile.scss';
import { customElement, property } from 'lit/decorators.js';
import ChevronDown16 from '@carbon/icons/es/chevron--down/16';
import '../icon';

@customElement('kd-expandable-tile')
export class ExpandableTile extends LitElement {
  @property({ type: Boolean, reflect: true })
  expanded = false;

  static override styles = Styles;

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  override render() {
    return html`
      <button class="expanded--tile" @click=${this.toggleExpanded}>
        <kd-icon
          class="${this.expanded ? 'expanded--tile_icon' : ''}"
          .icon="${ChevronDown16}"
        ></kd-icon>
        <div class="expanded--tile_tile ${this.expanded ? 'expanded' : ''}">
          <div>Click to expand....</div>
          <div class="expanded--tile_content">
            <slot></slot>
          </div>
        </div>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-expandable-tile': ExpandableTile;
  }
}
