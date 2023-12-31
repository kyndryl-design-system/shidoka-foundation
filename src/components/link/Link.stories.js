/**
 * Copyright Kyndryl, Inc. 2023
 */
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import './link';
import arrowRightIcon from '@carbon/icons/es/chevron--right/16';
import { LINK_TYPES, LINK_TARGETS } from './defs';
import { createOptionsArray } from '../../common/helpers/storybook';

const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Components/Link',
  component: 'kd-link',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/5TqtPa7KWfhJbQv6ELnbqf/Foundation?node-id=72%3A24578&mode=dev',
    },
  },
  argTypes: {
    kind: {
      options: createSelectOptions(LINK_TYPES),
      control: { type: 'select', labels: { null: LINK_TYPES.PRIMARY } },
      table: {
        defaultValue: { summary: LINK_TYPES.PRIMARY },
      },
    },
    target: {
      options: createSelectOptions(LINK_TARGETS),
      control: { type: 'select', labels: { null: LINK_TARGETS.SELF } },
      table: {
        defaultValue: { summary: LINK_TARGETS.SELF },
      },
    },
  },
};

const args = {
  unnamed: 'Link Text',
  href: '',
  target: '_self',
  kind: 'primary',
  disabled: false,
  standalone: false,
};

const linkIconArgs = { ...args, standalone: true, sizeOverride: 16 };

// Inline link
export const Link = {
  args: args,
  render: (args) =>
    html`
      <kd-link
        ?standalone=${args.standalone}
        href=${args.href}
        target=${args.target}
        kind=${args.kind}
        ?disabled=${args.disabled}
        @on-click=${(e) => action(e.type)(e)}
      >
        ${args.unnamed}
      </kd-link>
    `,
};

// Standalone Link
export const LinkWithIcon = {
  args: linkIconArgs,
  render: (args) => html`
    <kd-link
      ?standalone=${args.standalone}
      href=${args.href}
      target=${args.target}
      kind=${args.kind}
      ?disabled=${args.disabled}
      @on-click=${(e) => action(e.type)(e)}
    >
      ${args.unnamed}
      <kd-icon
        slot="icon"
        .icon=${arrowRightIcon}
        sizeOverride=${args.sizeOverride}
      ></kd-icon>
    </kd-link>
  `,
};
