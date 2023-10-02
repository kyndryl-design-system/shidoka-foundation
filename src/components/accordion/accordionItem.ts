/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import stylesheet from './accordionItem.scss';
import addIcon from '@carbon/icons/es/add/32';
import subtractIcon from '@carbon/icons/es/subtract/32';

/**
 * kd-accordion-item web component
 */
@customElement(`kd-accordion-item`)
export class AccordionItem extends LitElement {
  static override styles = [stylesheet];

  @property({ type: Boolean }) startOpened = false;

  @state() private _index = 1;
  @state() private _showNumber = false;
  @state() private _first = false;
  @state() private _opened = false;
  @state() private _filledHeader = false;
  @state() private _compact = false;

  override connectedCallback() {
    super.connectedCallback();
    if (this.startOpened) {
      this.open();
    }
  }

  setIndex(index: number) {
    this._index = index;
  }

  setFirst() {
    this._first = true;
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

  get numberTemplate() {
    if (this._showNumber) {
      return html`<div class="number">${this._index}</div>`;
    } else {
      return '';
    }
  }

  get iconTemplate() {
    if (this.querySelector('[slot="icon"]')) {
      return html`<div class="icon"><slot name="icon"></slot></div>`;
    } else {
      return '';
    }
  }

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
    let classAdditions = '';
    classAdditions += `kd-accordion-item`;

    if (this._first === true) {
      classAdditions += ` first-item`;
    }
    if (this._opened === true) {
      classAdditions += ` opened`;
    }
    if (this._filledHeader === true) {
      classAdditions += ` filled-header`;
    }
    if (this._compact === true) {
      classAdditions += ` compact`;
    }

    return html`
      <div
        class="${classAdditions}"
        aria-expanded="${ifDefined(
          this.ariaExpanded === null
            ? undefined
            : this.ariaExpanded === 'true'
            ? true
            : false
        )}"
        aria-controls="kd-accordion-item-detail-${this._index}"
        tabindex="${this._index}"
        @click="${(e: Event) => this._handleClick(e)}"
        @keypress="${(e: KeyboardEvent) => this._handleKeypress(e)}"
      >
        <div
          id="kd-accordion-item-title-${this._index}"
          class="kd-accordion-item-title"
        >
          ${this.iconTemplate} ${this.numberTemplate}
          <div class="title">
            <div><slot name="title"></slot></div>
            ${this.subtitleTemplate}
          </div>
          ${this.expandIconTemplate}
        </div>

        <div
          class="kd-accordion-item-body"
          id="kd-accordion-item-body-${this._index}"
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
