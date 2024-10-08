/**
 * Copyright Kyndryl, Inc. 2023
 */
import { html } from 'lit';
import { userEvent, expect, waitFor, fn } from '@storybook/test';
import { within } from 'shadow-dom-testing-library';

import './link';
import '../icon';
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
  iconLeft: false,
  'on-click': fn(),
};

const linkIconArgs = { ...args, standalone: true, sizeOverride: 16 };

// Inline link
export const Link = {
  args: args,
  render: (args) =>
    html`
      <kd-link
        id="test"
        ?standalone=${args.standalone}
        href=${args.href}
        target=${args.target}
        kind=${args.kind}
        ?disabled=${args.disabled}
        @on-click=${args['on-click']}
      >
        ${args.unnamed}
      </kd-link>
    `,
  play: async ({ canvasElement }) => {
    // example interaction test
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByShadowRole('link'));
    await waitFor(() => expect(args['on-click']).toHaveBeenCalled());
    canvas.getByShadowRole('link').blur();
  },
};

// Standalone Link
export const LinkWithIcon = {
  args: linkIconArgs,
  render: (args) => html`
    <kd-link
      id="test"
      ?standalone=${args.standalone}
      ?iconLeft=${args.iconLeft}
      href=${args.href}
      target=${args.target}
      kind=${args.kind}
      ?disabled=${args.disabled}
      @on-click=${args['on-click']}
    >
      ${args.unnamed}
      <kd-icon
        role="img"
        aria-label="Arrow right icon"
        title="Arrow right icon"
        slot="icon"
        .icon=${arrowRightIcon}
        sizeOverride=${args.sizeOverride}
      ></kd-icon>
    </kd-link>
  `,
};
