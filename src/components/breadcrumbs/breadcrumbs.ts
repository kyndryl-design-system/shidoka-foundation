/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import stylesheet from './breadcrumbs.scss';

// Define the shape of a breadcrumb item
interface BreadcrumbItem {
  label: string; // Label for the breadcrumb
  href?: string; // Optional href for the breadcrumb
}

@customElement('kd-breadcrumbs')
export class Breadcrumbs extends LitElement {
  static override styles = [stylesheet];

  /**
   * An array of breadcrumb items to be displayed.
   *
   * @type {Array<{label: string, [href]: string}>}
   * @example
   * items: [
   *  { label: 'Bridge', href: '/' },
   *  { label: 'Catalog', href: '/catalog' },
   *  { label: 'FinOps' } // This won't have a link as the href is optional
   * ]
   */
  @property({ type: Array }) items: BreadcrumbItem[] = [];

  override render() {
    return html`
      <ul class="breadcrumbs">
        ${this.items.map(
          (item, index) => html`
            <li key="${item.label}${index}" class="breadcrumbs-item">
              ${item.href
                ? html`<kd-link .href=${item.href}>${item.label}</kd-link>`
                : item.label}
            </li>
          `
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-breadcrumbs': Breadcrumbs;
  }
}
