import { html, LitElement } from 'lit';
import Styles from './expandableTile.scss';
import { customElement, property } from 'lit/decorators.js';
import ChevronDown16 from '@carbon/icons/es/chevron--down/16';
import '../icon';

/**
 * Description placeholder
 *
 * @export
 * @class ExpandableTile
 * @typedef {ExpandableTile}
 * @extends {LitElement}
 */
@customElement('kd-expandable-tile')
export class ExpandableTile extends LitElement {
  /**
   * Description placeholder
   *
   * @type {boolean}
   */
  @property({ type: Boolean, reflect: true })
  expanded = false;

  /**
   * Description placeholder
   *
   * @type {string}
   */
  @property({ type: String })
  primaryText = '';

  /**
   * @inheritdoc
   *
   * @static
   * @type {*}
   */
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

  /**
   * @inheritdoc
   *
   * @returns {*}
   */
  override render() {
    return html`
      <button
        class="expanded--tile"
        @click="${(e: Event) => this._handleClick(e)}"
        @keypress="${(e: KeyboardEvent) => this._handleKeypress(e)}"
      >
        <kd-icon
          class="${this.expanded ? 'expanded--tile_icon' : ''}"
          .icon="${ChevronDown16}"
        ></kd-icon>
        <div class="expanded--tile_tile ${this.expanded ? 'expanded' : ''}">
          <div>${this.primaryText}</div>
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
