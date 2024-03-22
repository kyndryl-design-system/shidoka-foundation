/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';

import './accordion';
import './accordionItem';
import '../icon';
import circleDashIcon from '@carbon/icons/es/circle-dash/24';
import checkmarkOutlineIcon from '@carbon/icons/es/checkmark--outline/24';
import errorFilledIcon from '@carbon/icons/es/error--filled/24';

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
        <kd-accordion-item opened>
          <span slot="title">Accordion Title 1</span>
          <span slot="subtitle">Accordion subtitle 1</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item>
          <span slot="title">Accordion Title 2</span>
          <span slot="subtitle">Accordion subtitle 2</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item>
          <span slot="title">Accordion Title 3</span>
          <span slot="subtitle">Accordion subtitle 3</span>
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
        <kd-accordion-item opened>
          <kd-icon
            slot="icon"
            .icon=${circleDashIcon}
            fill="var(--kd-color-text-placeholder)"
          ></kd-icon>
          <span slot="title">Accordion Title 1</span>
          <span slot="subtitle">Accordion subtitle 1</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item>
          <kd-icon
            slot="icon"
            .icon=${checkmarkOutlineIcon}
            fill="var(--kd-color-text-success)"
          ></kd-icon>
          <span slot="title">Accordion Title 2</span>
          <span slot="subtitle">Accordion subtitle 2</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>

        <kd-accordion-item>
          <kd-icon
            slot="icon"
            .icon=${errorFilledIcon}
            fill="var(--kd-color-text-destructive)"
          ></kd-icon>
          <span slot="title">Accordion Title 3</span>
          <span slot="subtitle">Accordion subtitle 3</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>
      </kd-accordion>
    `;
  },
};
