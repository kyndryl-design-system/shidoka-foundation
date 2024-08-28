import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Styles from './lifecycle.scss';
import '../button/button';
import { BUTTON_SIZES } from '../button/defs';

/**
 * LitLifecycle component
 *
 * @export
 * @class LitLifecycle
 * @typedef {LitLifecycle}
 * @extends {LitElement}
 */
@customElement('kd-lifecycle')
export class LitLifecycle extends LitElement {
  /**
   * Counter state
   *
   * @type {number}
   */
  @property({ type: Number }) counter = 0;

  /**
   * Button size small, medium, large
   *
   * @type {BUTTON_SIZES}
   */
  @property({ type: String })
  size: BUTTON_SIZES = BUTTON_SIZES.SMALL;

  /**
   * primaryBtnText
   *
   * @type {string}
   */
  @property({ type: String })
  primaryBtnText = '';

  /**
   * secondaryBtnText
   *
   * @type {string}
   */
  @property({ type: String })
  secondaryBtnText = '';

  /**
   * @inheritdoc
   *
   * @static
   * @type {*}
   */
  static override styles = Styles;
  /**
   * Creates an instance of LitLifecycle.
   *
   * @constructor
   */
  constructor() {
    super();
    console.log('Constructor: Component is being created');
  }

  /** @inheritdoc */
  override connectedCallback() {
    super.connectedCallback();
    console.log('ConnectedCallback: Component is added to the DOM');
    //set up additional listeners or logic here
  }

  /** @inheritdoc */
  override disconnectedCallback() {
    console.log('DisconnectedCallback: Component is removed from the DOM');
    //Clean up resources or listeners here
    super.disconnectedCallback();
  }

  /**
   * @inheritdoc
   *
   * @param {Map<string | number | symbol, unknown>} changedProperties
   * @returns {boolean}
   */
  override shouldUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ): boolean {
    console.log('ShouldUpdate: Check if the component should update');
    return super.shouldUpdate(changedProperties);
    // Implement logic to decide if the component should update
    // Return true to update, false to skip the update
  }

  /**
   * @inheritdoc
   *
   * @param {Map<string | number | symbol, unknown>} changedProperties
   */
  override willUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ) {
    console.log('WillUpdate: Before the component updates');
    super.willUpdate(changedProperties);
    // Implement logic to run before the update
  }

  /**
   * @inheritdoc
   *
   * @param {Map<string | number | symbol, unknown>} changedProperties
   */
  override update(changedProperties: Map<string | number | symbol, unknown>) {
    console.log('Update: During the update process');
    super.update(changedProperties);
    // Optionally request updates or perform other tasks here
  }

  /**
   * @inheritdoc
   *
   * @returns {*}
   */
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

  /**
   * @inheritdoc
   *
   * @param {Map<string | number | symbol, unknown>} changedProperties
   */
  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    console.log('Updated: After the component has updated');
    super.updated(changedProperties);
  }

  /** Description placeholder */
  incrementCounter() {
    console.log('IncrementCounter: Incrementing counter');
    this.counter += 1;
  }

  /** Description placeholder */
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
