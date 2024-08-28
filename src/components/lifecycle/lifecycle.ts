import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Styles from './lifecycle.scss';
import '../button/button';
import { BUTTON_SIZES } from '../button/defs';

@customElement('kd-lifecycle')
export class LitLifecycle extends LitElement {
  @property({ type: Number }) counter = 0;

  @property({ type: String })
  size: BUTTON_SIZES = BUTTON_SIZES.SMALL;

  @property({ type: String })
  primaryBtnText = '';

  @property({ type: String })
  secondaryBtnText = '';

  static override styles = Styles;
  constructor() {
    super();
    console.log('Constructor: Component is being created');
  }

  override connectedCallback() {
    super.connectedCallback();
    console.log('ConnectedCallback: Component is added to the DOM');
    //set up additional listeners or logic here
  }

  override disconnectedCallback() {
    console.log('DisconnectedCallback: Component is removed from the DOM');
    //Clean up resources or listeners here
    super.disconnectedCallback();
  }

  override shouldUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ): boolean {
    console.log('ShouldUpdate: Check if the component should update');
    return super.shouldUpdate(changedProperties);
    // Implement logic to decide if the component should update
    // Return true to update, false to skip the update
  }

  override willUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ) {
    console.log('WillUpdate: Before the component updates');
    super.willUpdate(changedProperties);
    // Implement logic to run before the update
  }

  override update(changedProperties: Map<string | number | symbol, unknown>) {
    console.log('Update: During the update process');
    super.update(changedProperties);
    // Optionally request updates or perform other tasks here
  }

  override render() {
    console.log('Render: Rendering the component');
    return html`
      <div>
        <p>Counter: ${this.counter}</p>
        <kd-button size=${this.size} @click="${this.incrementCounter}"
          >${this.primaryBtnText}</kd-button
        >
        <kd-button
          ?disabled=${this.counter === 0}
          destructive
          size=${this.size}
          @click="${this.decrementCounter}"
          >${this.secondaryBtnText}</kd-button
        >
      </div>
    `;
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    console.log('Updated: After the component has updated');
    super.updated(changedProperties);
  }

  incrementCounter() {
    console.log('IncrementCounter: Incrementing counter');
    this.counter += 1;
  }

  decrementCounter() {
    console.log('DecrementCounter: Decrementing counter');
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-lifecycle': LitLifecycle;
  }
}
