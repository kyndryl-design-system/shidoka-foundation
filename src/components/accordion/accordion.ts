/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { AccordionItem } from './accordionItem';
import stylesheet from './accordion.scss';

/**
 * Accordion component.
 *
 * @slot unnamed - Holds Accordion Items (kd-accordion-item) that make up the accordion
 *
 */
@customElement('kd-accordion')
export class Accordion extends LitElement {
  /** Specifies whether to show numbers on the list items. */
  @property({ type: Boolean })
  showNumbers = false;

  /** Specifies the number to start at if the list has numbers. */
  @property({ type: Number })
  startNumber = 1;

  /** Specifies whether to show the accordion items with filled headers. */
  @property({ type: Boolean })
  filledHeaders = false;

  /** Display the accordion as compact or the default large size. */
  @property({ type: Boolean })
  compact = false;

  /** The string that displays on the toggle to enpand all the accordion items. */
  @property({ type: String })
  expandLabel = 'Expand';

  /** The string that displays on the toggle to collapse all the accordion items. */
  @property({ type: String })
  collapseLabel = 'Collapse';

  /**
   * The children accordion items
   * @ignore
   */
  @state() private _childItems: AccordionItem[] = [];

  /**
   * The state of the toggle controling the "expand all" functionality
   * @ignore
   */
  @state() private _allOpenState = false;

  static override styles = [stylesheet];

  protected _handleSlotChange(event: Event) {
    const slottedNodes = (event.target as HTMLSlotElement).assignedNodes({
      flatten: true,
    });

    this._childItems = slottedNodes.filter(
      (node) => node instanceof AccordionItem
    ) as AccordionItem[];
    this._childItems.map((item, index) => {
      if (index == 0) {
        (item as AccordionItem).setFirst();
      }
      (item as AccordionItem).setFilledHeader(this.filledHeaders);
      (item as AccordionItem).setCompact(this.compact);
      (item as AccordionItem).setIndex(this.startNumber + index);
      (item as AccordionItem).setShowNumbers(this.showNumbers);
      if (index == this._childItems.length - 1) {
        (item as AccordionItem).setLast();
      }
      return item;
    });
  }

  override willUpdate() {
    this._childItems.map((item, index) => {
      if (index == 0) {
        (item as AccordionItem).setFirst();
      }
      (item as AccordionItem).setFilledHeader(this.filledHeaders);
      (item as AccordionItem).setCompact(this.compact);
      (item as AccordionItem).setIndex(this.startNumber + index);
      (item as AccordionItem).setShowNumbers(this.showNumbers);
      if (index == this._childItems.length - 1) {
        (item as AccordionItem).setLast();
      }
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

  private _toggleExpandAll() {
    if (this._allOpenState) {
      this._closeAllItems();
      this._allOpenState = false;
    } else {
      this._openAllItems();
      this._allOpenState = true;
    }
  }

  override render() {
    let itemContainerClasses = '';
    if (this.filledHeaders) itemContainerClasses += ' filled-headers';
    return html`
      <div class="kd-accordion">
        <div class="toggle-container">
          <a @click="${this._toggleExpandAll}">
            ${this._allOpenState ? this.collapseLabel : this.expandLabel}
          </a>
        </div>
        <div class="accordion-item-container${itemContainerClasses}">
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
