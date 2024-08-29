import { html, LitElement } from 'lit';
import Styles from './expandableTile.scss';
import { customElement, property } from 'lit/decorators.js';
import ChevronDown from '@carbon/icons/es/chevron--down/24';
import '../icon';

/**
 * Expandable Tile component
 * @fires on-toggle - Emits the `expanded` state when tile component open and closes.
 * @slot title - Slot for expandable tile title.
 * @slot unnamed - Slot for expandable tile contents.
 */
@customElement('kd-expandable-tile')
export class ExpandableTile extends LitElement {
  /**
   * expanded state
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  static override styles = Styles;

  private _handleClick(e: Event) {
    e.preventDefault();
    this._toggleExpanded();
  }

  private _handleKeypress(e: KeyboardEvent) {
    e.preventDefault();
    if (e.key == ' ' || e.key == 'Enter') this._toggleExpanded();
  }

  private _toggleExpanded() {
    this.expanded = !this.expanded;
    this._emitToggleEvent();
  }

  private _emitToggleEvent() {
    const event = new CustomEvent('on-toggle', {
      bubbles: true,
      composed: true,
      detail: { expanded: this.expanded },
    });
    console.log('_emitToggleEvent', event);
    this.dispatchEvent(event);
  }

  override render() {
    return html`
      <button
        class="expanded--tile"
        @click="${(e: Event) => this._handleClick(e)}"
        @keypress="${(e: KeyboardEvent) => this._handleKeypress(e)}"
      >
        <div class="expanded--tile_tile ${this.expanded ? 'expanded' : ''}">
          <div class="expanded--tile_container">
            <div>
              <slot name="title"></slot>
            </div>
            <div class="expanded--tile_svgIcon">
              <kd-icon
                class="${this.expanded ? 'expanded--tile_icon' : ''}"
                .icon="${ChevronDown}"
              ></kd-icon>
            </div>
          </div>
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
