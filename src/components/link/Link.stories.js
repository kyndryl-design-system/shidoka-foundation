import { html } from 'lit';
import './link';
import arrowRightIcon from '@carbon/icons/es/chevron--right/16';

export default {
  title: 'Components/Link',
  component: 'kd-link',
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_top', '_parent'],
    },
  },
};

const args = {
  href: '',
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
      target=${args.target}
      kind=${args.kind}
      ?disabled=${args.disabled}
    >
      Link1
      <span style="display: inline-flex; align-self: center; margin-left:2px;">
        <kd-icon
          .icon=${arrowRightIcon}
          sizeOverride=${args.sizeOverride}
        ></kd-icon>
      </span>
    </kd-link>
  `,
};
