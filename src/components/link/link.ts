import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LinkStyles from './link.scss';

/**
 * Component for navigation links.
 * @fires on-click - Captures the click event and emits the original event details.
 * @slot unnamed - Slot for link text/content.
 */

@customElement('kd-link')
export class Link extends LitElement {
  static override styles = LinkStyles;  

  /** Defines a target attribute for where to load the URL. Possible options include "_self" (deafult), "_blank", "_parent", "_top" */
  @property({ type: String })
  target = '_self' as const;
  
  /** Defines a relationship between a linked resource and the document. An empty string (default) means no particular relationship */
  @property({ type: String })
  rel = '';

  /** Link url. */
  @property({ type: String })
  href = '';

  override render() {
    return html`
      <a
        class="text-link"
        target=${this.target}
        role='link'
        rel=${this.rel}
        href=${this.href ? this.href : 'javascript:void(0)'}
        @click=${(e: Event) => this.handleClick(e)}
      >
        <slot></slot>
      </a>
    `;
  }

  private handleClick(e: Event) {
    console.log('called');
    
    const event = new CustomEvent('on-click', {
      detail: { origEvent: e },
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-link': Link;
  }
}
