import { html } from 'lit';
import './index';
//import { fn } from '@storybook/test';

import { userEvent, expect, waitFor, fn } from '@storybook/test';
import { within } from 'shadow-dom-testing-library';

import { createOptionsArray } from '../../common/helpers/storybook';
import { LINK_TARGETS } from '../link/defs';
const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Components/Practise/Sample',
  component: 'kd-sample',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    option: {
      options: createSelectOptions(LINK_TARGETS),
      control: { type: 'select', labels: { null: LINK_TARGETS.SELF } },
      table: {
        defaultValue: { summary: LINK_TARGETS.SELF },
      },
    },
  },
};

const args = {
  message: 'Hello, Storybook!',
  submessage: 'Hello, Subtitle!',
  option: '_self',
  'on-click': fn(),
};

export const Sample = {
  args,
  render: (args) =>
    html`
      <kd-sample
        message=${args.message}
        submessage="Hello, Subtitle!"
        option=${args.option}
        @on-click=${args['on-click']}
      ></kd-sample>
    `,
  play: async ({ canvasElement }) => {
    // example interaction test
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByShadowRole('link'));
    await waitFor(() => expect(args['on-click']).toHaveBeenCalled());
    canvas.getByShadowRole('link').blur();
  },
};

export const SampleWithSubtitle = {
  args,
  render: (args) =>
    html`
      <kd-sample
        message=${args.message}
        submessage=${args.submessage}
      ></kd-sample>
    `,
};

export const SampleWithOption = {
  args,
  render: (args) =>
    html`
      <kd-sample message=${args.message} option=${args.option}></kd-sample>
    `,
};
