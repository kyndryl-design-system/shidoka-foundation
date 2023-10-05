/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import stylesheet from './accordionItem.scss';
import addIcon from '@carbon/icons/es/add/32';
import subtractIcon from '@carbon/icons/es/subtract/32';

/**
 * AccordionItem component.
 *
 * @slot icon - Optional leading icon
 * @slot body - Body of the accordion item
 * @slot title - Title of the accordion item
 * @slot subtitle - Optional subtitle of the accordion item
 *
 */
@customElement('kd-accordion-item')
export class AccordionItem extends LitElement {
  static override styles = [stylesheet];

  /** Specifies whether to show the accordion item starts opened. */
  @property({ type: Boolean }) startOpened = false;

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
   * Whether this item is opened.
   * @ignore
   */
  @state() private _opened = false;

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

  /**
   * A generated unique id
   * @ignore
   */
  @state() private _id = '';

  override connectedCallback() {
    super.connectedCallback();
    if (this.startOpened) {
      this.open();
    }
    this._id = crypto.randomUUID();
  }

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
    if (!this._opened) this._toggleOpenState();
  }

  close() {
    if (this._opened) this._toggleOpenState();
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
    if (this._opened) {
      this.ariaExpanded = 'false';
      this._opened = false;
    } else {
      this.ariaExpanded = 'true';
      this._opened = true;
    }
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

  /**
   * Generates the item level expand/collapse template
   * @ignore
   */
  get expandIconTemplate() {
    if (this._opened)
      return html`
        <div class="expand-icon">
          <kd-icon .icon="${subtractIcon}"></kd-icon>
        </div>
      `;
    else {
      return html`
        <div class="expand-icon"><kd-icon .icon="${addIcon}"></kd-icon></div>
      `;
    }
  }

  override render() {
    const classes: any = classMap({
      'kd-accordion-item': true,
      opened: this._opened,
      'filled-header': this._filledHeader,
      compact: this._compact,
    });

    return html`
      <div class="${classes}">
        <div
          class="kd-accordion-item-title"
          aria-controls="kd-accordion-item-detail-${this._index}-${this._id}"
          tabindex="${this._index}"
          role="button"
          @click="${(e: Event) => this._handleClick(e)}"
          @keypress="${(e: KeyboardEvent) => this._handleKeypress(e)}"
          id="kd-accordion-item-title-${this._index}-${this._id}"
        >
          ${this.iconTemplate} ${this.numberTemplate}

          <div class="title">
            <slot name="title"></slot>

            ${this.subtitleTemplate}
          </div>

          ${this.expandIconTemplate}
        </div>

        <div
          class="kd-accordion-item-body"
          aria-expanded="${ifDefined(
            this.ariaExpanded === null
              ? undefined
              : this.ariaExpanded === 'true'
              ? true
              : false
          )}"
          id="kd-accordion-item-body-${this._index}-${this._id}"
          aria-labelledby="kd-accordion-item-title-${this._index}-${this._id}"
        >
          <div class="kd-accordion-item-detail">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
