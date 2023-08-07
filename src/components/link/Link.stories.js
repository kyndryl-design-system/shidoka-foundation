import { html } from 'lit';
import './link';

export default {
  title: 'Components/Link',
  component: 'kd-link',
  argTypes: {},
};

const args = {
  href: '',
};

export const Link = {
  args: args,
  render: (args) => html` <kd-link href=${args.href}> Link1 </kd-link> `,
};
