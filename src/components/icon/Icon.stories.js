import { html } from 'lit';
import './icon';
import userIcon from '@carbon/icons/es/user--avatar/24';

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
    icon: userIcon,
    fill: 'currentColor',
    sizeOverride: undefined,
  },
  render: (args) => html`
    <kd-icon
      .icon=${args.icon}
      fill=${args.fill}
      sizeOverride=${args.sizeOverride}
    ></kd-icon>
  `,
};
