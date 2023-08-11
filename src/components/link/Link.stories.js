import { html } from 'lit';
import './link';
import arrowRightIcon from '@carbon/icons/es/chevron--right/16';

export default {
  title: 'Components/Link',
  component: 'kd-link',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

const args = {
  href: '',
  size: 'md',
  target: '_self',
  kind: 'primary',
  disabled: false,
};

const linkIconArgs = { ...args, sizeOverride: 16 };

// Inline link
export const Link = {
  args: args,
  render: (args) =>
    html`
      <kd-link
        inline
        href=${args.href}
        size=${args.size}
        target=${args.target}
        kind=${args.kind}
        ?disabled=${args.disabled}
      >
        Link1
      </kd-link>
    `,
};

// Standalone Link
export const LinkWithIcon = {
  args: linkIconArgs,
  render: (args) => html`
    <kd-link
      href=${args.href}
      size=${args.size}
      target=${args.target}
      kind=${args.kind}
      ?disabled=${args.disabled}
    >
      Link1
      <span style="display: inline-flex; align-self: center; margin-left:2px;">
        <kyn-icon
          .icon=${arrowRightIcon}
          sizeOverride=${args.size === 'lg' ? '20' : args.sizeOverride}
        ></kyn-icon>
      </span>
    </kd-link>
  `,
};
