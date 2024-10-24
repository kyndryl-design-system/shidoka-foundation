/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import './accordion';
import './accordionItem';
import circleDashIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/24/circle-stroke.svg';
import checkmarkOutlineIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/24/checkmark.svg';
import errorFilledIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/24/close-filled.svg';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

export default {
  title: 'Components/Accordion',
  component: 'kd-accordion',
  subcomponents: { 'kd-accordion-item': 'kd-accordion-item' },
};

const args = {
  filledHeaders: false,
  compact: false,
  showNumbers: false,
  startNumber: 1,
  expandLabel: 'Expand all items',
  collapseLabel: 'Collapse all items',
};

export const Accordion = {
  args: args,
  render: (args) => {
    return html`
      <kd-accordion
        ?filledHeaders="${args.filledHeaders}"
        ?compact="${args.compact}"
        ?showNumbers="${args.showNumbers}"
        startNumber="${args.startNumber}"
        expandLabel="${args.expandLabel}"
        collapseLabel="${args.collapseLabel}"
      >
        <kd-accordion-item opened @on-toggle=${(e) => action(e.type)(e)}>
          <span slot="title"> Accordion Title 1 </span>
          <span slot="subtitle"> Accordion subtitle 1 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item @on-toggle=${(e) => action(e.type)(e)}>
          <span slot="title"> Accordion Title 2 </span>
          <span slot="subtitle"> Accordion subtitle 2 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item disabled @on-toggle=${(e) => action(e.type)(e)}>
          <span slot="title"> Accordion Title 3 </span>
          <span slot="subtitle"> Accordion subtitle 3 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>
      </kd-accordion>
    `;
  },
};

Accordion.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5TqtPa7KWfhJbQv6ELnbqf/Foundation?node-id=707%3A2396&mode=dev',
  },
};

export const AccordionWithIcons = {
  args: args,
  render: (args) => {
    return html`
      <kd-accordion
        ?filledHeaders="${args.filledHeaders}"
        ?compact="${args.compact}"
        ?showNumbers="${args.showNumbers}"
        startNumber="${args.startNumber}"
        expandLabel="${args.expandLabel}"
        collapseLabel="${args.collapseLabel}"
      >
        <kd-accordion-item opened @on-toggle=${(e) => action(e.type)(e)}>
          <!-- <kd-icon
            slot="icon"
            .icon=${circleDashIcon}
            role="img"
            aria-label="in progress"
            fill="var(--kd-color-text-placeholder)"
          ></kd-icon> -->
          <span
            class="inProgress"
            slot="icon"
            role="img"
            aria-label="in progress"
            >${unsafeSVG(circleDashIcon)}</span
          >
          <span slot="title"> Accordion Title 1 </span>
          <span slot="subtitle"> Accordion subtitle 1 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item @on-toggle=${(e) => action(e.type)(e)}>
          <!-- <kd-icon
            slot="icon"
            .icon=${checkmarkOutlineIcon}
            role="img"
            aria-label="complete"
            fill="var(--kd-color-text-success)"
          >
          </kd-icon> -->
          <span class="complete" slot="icon" role="img" aria-label="complete"
            >${unsafeSVG(checkmarkOutlineIcon)}</span
          >
          <span slot="title"> Accordion Title 2 </span>
          <span slot="subtitle"> Accordion subtitle 2 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item @on-toggle=${(e) => action(e.type)(e)}>
          <!-- <kd-icon
            slot="icon"
            .icon=${errorFilledIcon}
            role="img"
            aria-label="error"
            fill="var(--kd-color-text-destructive)"
          ></kd-icon> -->
          <span class="error" slot="icon" role="img" aria-label="error"
            >${unsafeSVG(errorFilledIcon)}</span
          >
          <span slot="title"> Accordion Title 3 </span>
          <span slot="subtitle"> Accordion subtitle 3 </span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>
      </kd-accordion>
      <style>
        .inProgress {
          svg {
            fill: var(--kd-color-text-placeholder);
          }
        }
        .complete {
          svg {
            fill: var(--kd-color-text-success);
          }
        }
        .error {
          svg {
            fill: var(--kd-color-text-destructive);
          }
        }
      </style>
    `;
  },
};
