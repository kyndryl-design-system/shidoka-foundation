/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html } from 'lit';

import './accordion';
import '../icon';
import checkmarkOutlineIcon from '@carbon/icons/es/checkmark--outline/16';

export default {
  title: 'Work in Progress/Accordion',
  component: `kd-accordion`,
  argTypes: {
    showNumbers: {
      control: { type: 'boolean' },
    },
    startNumber: {
      control: { type: 'number' },
    },
  },
};
const args = {
  showNumbers: true,
  startNumber: '1',
};

export const Accordion = {
  args: args,
  render: (args) => {
    return html`
      <kd-accordion
        ?showNumbers="${args.showNumbers}"
        startNumber="${args.startNumber}"
      >
        <kd-accordion-item startOpened>
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
export const AccordionWithIcons = {
  args: args,
  render: (args) => {
    return html`
      <kd-accordion
        ?showNumbers="${args.showNumbers}"
        startNumber="${args.startNumber}"
      >
        <kd-accordion-item>
          <span slot="icon"
            ><kd-icon .icon=${checkmarkOutlineIcon}></kd-icon
          ></span>
          <span slot="title">Accordion Title 1</span>
          <span slot="subtitle">Accordion subtitle 1</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>
        <kd-accordion-item>
          <span slot="icon"
            ><kd-icon .icon=${checkmarkOutlineIcon}></kd-icon
          ></span>
          <span slot="title">Accordion Title 2</span>
          <span slot="subtitle">Accordion subtitle 2</span>
          <div slot="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </kd-accordion-item>
        <kd-accordion-item>
          <span slot="icon"
            ><kd-icon .icon=${checkmarkOutlineIcon}></kd-icon
          ></span>
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
