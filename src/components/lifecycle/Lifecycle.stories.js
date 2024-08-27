import { html } from 'lit';
import './index';

import { BUTTON_SIZES } from '../button/defs';
import { createOptionsArray } from '../../common/helpers/storybook';

const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Components/Practise/Lifecycle Lit Component',
  component: 'kd-lifecycle',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  argTypes: {
    size: {
      options: createSelectOptions(BUTTON_SIZES),
      control: { type: 'select', labels: { null: BUTTON_SIZES.MEDIUM } },
      table: {
        defaultValue: { summary: BUTTON_SIZES.MEDIUM },
      },
    },
  },
};

const args = {
  size: 'medium',
  primaryBtnText: 'Increment Counter',
  secondaryBtnText: 'Decrement Counter',
};

export const Lifecycle = {
  args,
  render: (args) => html`
    <kd-lifecycle
      size=${args.size}
      primaryBtnText=${args.primaryBtnText}
      secondaryBtnText=${args.secondaryBtnText}
    ></kd-lifecycle>
  `,
};
