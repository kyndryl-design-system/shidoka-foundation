import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Styles from './sample.scss';
import { LINK_TARGETS } from '../link/defs';

/**
 * Sample component
 * @fires on-click - Captures the click event and emits the original event details.
 */
@customElement('kd-sample')
export class Sample extends LitElement {
  /** message. */
  @property({ type: String })
  message = 'Hi there!';

  /** submessage. */
  @property({ type: String })
  submessage = 'Hi there!';

  /** Possible options include "_self" (default), "_blank", "_parent", "_top" */
  @property({ type: String })
  option: LINK_TARGETS = LINK_TARGETS.SELF;

  static override styles = Styles;

  override render() {
    return html`
      <div
        class="component"
        role="link"
        @click=${(e: Event) => this.handleClick(e)}
      >
        ${this.message}
      </div>
      <div>${this.submessage}</div>
      <div>${this.option}</div>
    `;
  }

  private handleClick(e: Event) {
    const event = new CustomEvent('on-click', {
      detail: { origEvent: e },
    });
    console.log('handleClick--', event);
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-sample': Sample;
  }
}
