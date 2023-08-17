import { html } from 'lit';
import './link';
import arrowRightIcon from '@carbon/icons/es/chevron--right/16';

export default {
  title: 'Components/Link',
  component: 'kd-link',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tTu138pz3jLk0mykJSg3t4/KDS---Foundation-v1.0.0?type=design&node-id=4860-23646&mode=design&t=qd3pGvXxQckM9VJ2-0',
    },
  },
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
  unnamed: 'Link Text',
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
        ${args.unnamed}
      </kd-link>
    `,
};

// Standalone Link
export const LinkWithIcon = {
  args: linkIconArgs,
  argTypes: {
    inline: {
      control: false,
    },
  },
  render: (args) => html`
    <kd-link
      href=${args.href}
      target=${args.target}
      kind=${args.kind}
      ?disabled=${args.disabled}
    >
      ${args.unnamed}
      <kd-icon
        .icon=${arrowRightIcon}
        sizeOverride=${args.sizeOverride}
      ></kd-icon>
    </kd-link>
  `,
};
