import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import {LINK_TYPES, LINK_TARGETS, LINK_SIZES } from './defs';

import LinkStyles from './link.scss';

/**
 * Component for navigation links.
 * @fires on-click - Captures the click event and emits the original event details.
 * @slot unnamed - Slot for link text/content.
 */

@customElement('kd-link')

export class Link extends LitElement {
    static override styles = LinkStyles; 
    
    /** 
     * @description Link url. 
     * */
    @property({ type: String })
    href = '';
     /** 
     * @description Link target. 
     * */
    @property({type: String}) target = LINK_TARGETS.SELF;

    /** 
     * @description The Link size. 
     * */
    @property({ type: String }) size = LINK_SIZES.MEDIUM; // default : App (primary) 
     /** 
     * @description The Link type. 
     * */
    @property() kind = LINK_TYPES.PRIMARY;

    /** 
     * @description 
     * Defines a relationship between a linked resource and the document. An empty string (default) means no particular relationship 
     * */
    @property({ type: String })
    rel = '';
    /** 
     * @description Disables the link. 
    */
    @property({ type: Boolean })
    disabled = false;

   // @property({type: String}) variant = LINK_VARIANTS.INLINE;
   @property ({type: Boolean})
   inline = false;

    override render(){
        const classes = classMap({
            ['kd-link-text-primary']: this.kind === LINK_TYPES.PRIMARY || !this.kind,
            ['kd-link-text-secondary']: this.kind === LINK_TYPES.SECONDARY,
            ['kd-link-text-md']: this.size === LINK_SIZES.MEDIUM,
            ['kd-link-text-lg']: this.size === LINK_SIZES.LARGE,
            ['kd-link-text-sm']: this.size === LINK_SIZES.SMALL,
            ['kd-link-text-inline']: this.inline,
            ['kd-link-text-standalone']: !this.inline,
            ['kd-link-text-disabled']: this.disabled === true
        });

        return html`
        <a
          class="kd-link-text ${classes}"
          target=${this.target}
          role='link'
          rel=${this.rel}
          href=${this.href ? this.href : 'javascript:void(0)'}
          @click=${(e: Event) => this.handleClick(e)}
        >
          <slot></slot>
        </a>`;
    }

    private handleClick(e: Event) {
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