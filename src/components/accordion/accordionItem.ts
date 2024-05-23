/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import stylesheet from './accordionItem.scss';
import chevronIcon from '@carbon/icons/es/chevron--down/24';
import '../icon';

/**
 * AccordionItem component. *
 * @fires on-toggle - Emits the `opened` state when the accordion item opens/closes.
 * @slot icon - Optional leading icon
 * @slot body - Body of the accordion item
 * @slot title - Title of the accordion item
 * @slot subtitle - Optional subtitle of the accordion item
 *
 */
@customElement('kd-accordion-item')
export class AccordionItem extends LitElement {
  static override styles = [stylesheet];

  /** Accordion item opened state. */
  @property({ type: Boolean })
  opened = false;

  /** Accordion item disabled state. */
  @property({ type: Boolean })
  disabled = false;

  /**
   * The index of this item. Passed from the Accordion.
   * @ignore
   */
  @state() private _index = 1;

  /**
   * Whether the number should be shown. Passed from the Accordion.
   * @ignore
   */
  @state() private _showNumber = false;

  /**
   * Whether this item displays a filled header. Passed from the Accordion.
   * @ignore
   */
  @state() private _filledHeader = false;

  /**
   * Whether this item is compact. Passed from the Accordion.
   * @ignore
   */
  @state() private _compact = false;

  setIndex(index: number) {
    this._index = index;
  }

  setShowNumbers(value: boolean) {
    this._showNumber = value;
  }

  setFilledHeader(value: boolean) {
    this._filledHeader = value;
  }

  setCompact(value: boolean) {
    this._compact = value;
  }

  open() {
    if (!this.opened) this._toggleOpenState();
  }

  close() {
    if (this.opened) this._toggleOpenState();
  }

  private _handleClick(e: Event) {
    e.preventDefault();
    this._toggleOpenState();
  }

  private _handleKeypress(e: KeyboardEvent) {
    e.preventDefault();
    if (e.key == ' ' || e.key == 'Enter') this._toggleOpenState();
  }

  private _toggleOpenState() {
    if (!this.disabled) {
      this.opened = !this.opened;

      this._emitToggleEvent();
    }
  }

  private _emitToggleEvent() {
    const event = new CustomEvent('on-toggle', {
      bubbles: true,
      composed: true,
      detail: { opened: this.opened },
    });
    this.dispatchEvent(event);
  }

  /**
   * Generates the number template
   * @ignore
   */
  get numberTemplate() {
    if (this._showNumber) {
      return html`<div class="number">${this._index}</div>`;
    } else {
      return '';
    }
  }

  /**
   * Generates the icon template
   * @ignore
   */
  get iconTemplate() {
    if (this.querySelector('[slot="icon"]')) {
      return html`<div class="icon"><slot name="icon"></slot></div>`;
    } else {
      return '';
    }
  }

  /**
   * Generates the subtitle template
   * @ignore
   */
  get subtitleTemplate() {
    if (this.querySelector('[slot="subtitle"]')) {
      return html`
        <div class="kd-accordion-item-subtitle">
          <slot name="subtitle"></slot>
        </div>
      `;
    } else {
      return '';
    }
  }

  override render() {
    const classes: any = classMap({
      'kd-accordion-item': true,
      opened: this.opened,
      disabled: this.disabled,
      'filled-header': this._filledHeader,
      compact: this._compact,
    });

    return html`
      <div class="${classes}">
        <div
          class="kd-accordion-item-title"
          aria-controls="kd-accordion-item-body-${this._index}"
          aria-expanded=${this.opened}
          aria-disabled=${this.disabled}
          tabindex="0"
          role="button"
          @click="${(e: Event) => this._handleClick(e)}"
          @keypress="${(e: KeyboardEvent) => this._handleKeypress(e)}"
          id="kd-accordion-item-title-${this._index}"
        >
          ${this.iconTemplate} ${this.numberTemplate}

          <div class="title">
            <slot name="title"></slot>

            ${this.subtitleTemplate}
          </div>

          <div class="expand-icon">
            <kd-icon .icon="${chevronIcon}"></kd-icon>
          </div>
        </div>

        <div
          class="kd-accordion-item-body"
          id="kd-accordion-item-body-${this._index}"
          role="region"
          aria-labelledby="kd-accordion-item-title-${this._index}"
        >
          <div class="kd-accordion-item-detail">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-accordion-item': AccordionItem;
  }
}
