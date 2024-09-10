import { html } from 'lit';
import './icon';
import sampleIcon from '@carbon/icons/es/machine-learning/24';

export default {
  title: 'Components/Icon',
  component: 'kd-icon',
  argTypes: {
    fill: {
      control: { type: 'color' },
    },
    sizeOverride: {
      control: { type: 'number', min: 10, max: 100 },
    },
  },
};

export const Icon = {
  args: {
    icon: sampleIcon,
    fill: 'currentColor',
    sizeOverride: undefined,
    iconDescription: 'Sample icon',
  },
  render: (args) => html`
    <kd-icon
      .icon=${args.icon}
      fill=${args.fill}
      sizeOverride=${args.sizeOverride}
      iconDescription=${args.iconDescription}
    ></kd-icon>
  `,
};
