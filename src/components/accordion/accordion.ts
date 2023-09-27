/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { AccordionItem } from './accordionItem';
import stylesheet from './accordion.scss';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import onToggleSwitchSmall from '../../assets/svg/on-toggle-switch-small.svg';

@customElement(`kd-accordion`)
export class Accordion extends LitElement {
  @property({ type: Boolean }) showNumbers = false;
  @property({ type: Number }) startNumber = 1;

  private _childItems: AccordionItem[] = [];
  private _allOpenState = false;

  static override styles = [stylesheet];

  protected _handleSlotChange(event: Event) {
    const slottedNodes = (event.target as HTMLSlotElement).assignedNodes({
      flatten: true,
    });

    this._childItems = slottedNodes.filter(
      (node) => node instanceof AccordionItem
    ) as AccordionItem[];
    this._childItems.map((item, index) => {
      (item as AccordionItem).setIndex(this.startNumber + index);
      (item as AccordionItem).setShowNumbers(this.showNumbers);
      return item;
    });
  }

  override willUpdate() {
    this._childItems.map((item, index) => {
      (item as AccordionItem).setIndex(this.startNumber + index);
      (item as AccordionItem).setShowNumbers(this.showNumbers);
      return item;
    });
  }

  protected _openAllItems() {
    this._childItems.map((item) => {
      (item as AccordionItem).open();
    });
  }

  protected _closeAllItems() {
    this._childItems.map((item) => {
      (item as AccordionItem).close();
    });
  }

  private _toggleExpandAll(e: Event) {
    e.preventDefault();
    if (this._allOpenState) {
      this._closeAllItems();
      this._allOpenState = false;
    } else {
      this._openAllItems();
      this._allOpenState = true;
    }
  }

  override render() {
    return html`
      <div class="kd-accordion">
        <div class="toggle-container">
          <label @click="${(e: Event) => this._toggleExpandAll(e)}"
            >${unsafeSVG(onToggleSwitchSmall)} Expand all Items</label
          >
        </div>
        <div class="accordion-item-container">
          <slot @slotchange="${this._handleSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'kd-accordion': Accordion;
  }
}
