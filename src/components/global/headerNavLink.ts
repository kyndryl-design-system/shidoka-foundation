import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import HeaderNavLinkScss from './headerNavLink.scss';
import '../reusable/icon';
import downIcon from '@carbon/icons/es/chevron--down/16';

@customElement('kyn-header-nav-link')
export class HeaderNavLink extends LitElement {
  static override styles = HeaderNavLinkScss;

  @property({ type: String })
  text = '';

  @property({ type: String })
  href = '';

  @state()
  isSlotted = false;

  override render() {
    return html`
      <a
        href=${this.href}
        class="nav-link interactive menu"
        @click=${(e: Event) => this.handleClick(e)}
      >
        ${this.text}
        ${this.isSlotted
          ? html` <kyn-icon .icon=${downIcon}></kyn-icon> `
          : null}
        <slot class="menu__content"></slot>
      </a>
    `;
  }

  private handleClick(e: Event) {
    const event = new CustomEvent('on-click', {
      detail: { origEvent: e },
    });
    this.dispatchEvent(event);
  }

  private determineIfSlotted() {
    let hasHtmlElement = false;

    const slotNodes =
      this.shadowRoot!.querySelectorAll('slot')[0].assignedNodes();

    slotNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        hasHtmlElement = true;
      }
    });

    this.isSlotted = hasHtmlElement;
  }

  override firstUpdated() {
    this.determineIfSlotted();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-header-nav-link': HeaderNavLink;
  }
}
