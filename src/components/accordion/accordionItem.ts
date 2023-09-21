/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';

import stylesheet from './accordionItem.scss';

/**
 * kd-accordion-item web component
 */
@customElement(`kd-accordion-item`)
export class AccordionItem extends LitElement {
  static override styles = [stylesheet];

  @property({ type: Boolean }) startOpened = false;

  @state() private _index = 1;
  @state() private showNumber = false;
  @state() private opened = false;

  constructor() {
    super();
    this.opened = this.startOpened;
  }

  setIndex(index: number) {
    this._index = index;
  }
  setShowNumbers(value: boolean) {
    this.showNumber = value;
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
    if (this.opened) {
      this.ariaExpanded = 'false';
      this.opened = false;
    } else {
      this.ariaExpanded = 'true';
      this.opened = true;
    }

    const accordionItem = this.renderRoot.querySelector('.kd-accordion-item');
    if (accordionItem) {
      accordionItem.classList.toggle('opened');
    }
  }

  get numberTemplate() {
    if (this.showNumber) {
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

  override render() {
    let classAdditions = '';
    classAdditions += `kd-accordion-item`;
    if (this.startOpened) {
      this._toggleOpenState();
    }
    if (this._index == 1) {
      classAdditions += ` first-item`;
    }

    return html`
      <div
        class="${classAdditions}"
        aria-expanded="${this.ariaExpanded}"
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
