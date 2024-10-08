/**
 * Copyright Kyndryl, Inc. 2023
 */

// External library imports
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';

// Relative component and helper imports
import './button';
import '../icon';
import {
  BUTTON_KINDS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_ICON_POSITION,
} from './defs';
import { createOptionsArray } from '../../common/helpers/storybook';

const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Components/Button',
  component: 'kd-button',
  parameters: {},
  argTypes: {
    type: {
      options: createSelectOptions(BUTTON_TYPES),
      control: { type: 'select', labels: { null: BUTTON_TYPES.BUTTON } },
      table: {
        defaultValue: { summary: BUTTON_TYPES.BUTTON },
      },
    },
    kind: {
      options: createSelectOptions(BUTTON_KINDS),
      control: { type: 'select', labels: { null: BUTTON_KINDS.PRIMARY_APP } },
      table: {
        defaultValue: { summary: BUTTON_KINDS.PRIMARY_APP },
      },
    },
    size: {
      options: createSelectOptions(BUTTON_SIZES),
      control: { type: 'select', labels: { null: BUTTON_SIZES.MEDIUM } },
      table: {
        defaultValue: { summary: BUTTON_SIZES.MEDIUM },
      },
    },
    iconPosition: {
      options: createSelectOptions(BUTTON_ICON_POSITION),
      control: {
        type: 'select',
        labels: { null: BUTTON_ICON_POSITION.CENTER },
      },
      table: {
        defaultValue: { summary: BUTTON_ICON_POSITION.CENTER },
      },
    },
  },
};

const args = {
  unnamed: 'Button Text',
  kind: 'primary-app',
  type: 'button',
  size: 'medium',
  destructive: false,
  disabled: false,
  iconPosition: 'right',
  description: 'Button description',
  href: '',
  name: '',
  value: '',
  isFloating: false,
  showOnScroll: false,
};

export const Button = {
  args,
  render: (args) => {
    return html`
      <kd-button
        kind=${args.kind}
        type=${args.type}
        ?destructive=${args.destructive}
        ?disabled=${args.disabled}
        ?isFloating=${args.isFloating}
        ?showOnScroll=${args.showOnScroll}
        size=${args.size}
        iconPosition=${args.iconPosition}
        description=${args.description}
        href=${args.href}
        name=${args.name}
        value=${args.value}
        @on-click=${(e) => action(e.type)(e)}
      >
        ${args.unnamed}
      </kd-button>
    `;
  },
};

Button.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/5TqtPa7KWfhJbQv6ELnbqf/Foundation?node-id=72%3A18796&mode=dev',
  },
};

export const ButtonWithIcon = {
  args,
  render: (args) => {
    return html`
      <kd-button
        kind=${args.kind}
        type=${args.type}
        ?destructive=${args.destructive}
        ?disabled=${args.disabled}
        ?isFloating=${args.isFloating}
        ?showOnScroll=${args.showOnScroll}
        size=${args.size}
        iconPosition=${args.iconPosition}
        description=${args.description}
        href=${args.href}
        name=${args.name}
        value=${args.value}
        @on-click=${(e) => action(e.type)(e)}
      >
        ${args.unnamed}
        <kd-icon
          slot="icon"
          .icon=${chevronRightIcon}
          role="img"
          aria-label="Chevron right icon"
          title="Chevron right icon"
        ></kd-icon>
      </kd-button>
    `;
  },
};

export const IconOnly = {
  args: {
    ...args,
    description: 'Button Description',
  },
  render: (args) => {
    return html`
      <kd-button
        kind=${args.kind}
        type=${args.type}
        ?destructive=${args.destructive}
        ?disabled=${args.disabled}
        ?isFloating=${args.isFloating}
        ?showOnScroll=${args.showOnScroll}
        size=${args.size}
        iconPosition="center"
        description=${args.description}
        href=${args.href}
        name=${args.name}
        value=${args.value}
        @on-click=${(e) => action(e.type)(e)}
      >
        <kd-icon
          slot="icon"
          .icon=${chevronRightIcon}
          role="img"
          aria-label="Chevron right icon"
          title="Chevron right icon"
        ></kd-icon>
      </kd-button>
    `;
  },
};

// Component Variants
// export const Primary_App = Template.bind({});
// Primary_App.args = {
//   kind: BUTTON_TYPES.PRIMARY_APP,
// };

// export const Primary_Web = Template.bind({});
// Primary_Web.args = {
//   type: BUTTON_TYPES.PRIMARY_WEB,
// };

// export const Primary_Destructive = Template.bind({});
// Primary_Destructive.args = {
//   type: BUTTON_TYPES.PRIMARY_APP,
//   destructive: true,
//   size: BUTTON_SIZES.MEDIUM,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: BUTTON_TYPES.SECONDARY,
// };

// export const Secondary_Destructive = Template.bind({});
// Secondary_Destructive.args = {
//   type: BUTTON_TYPES.SECONDARY,
//   destructive: true,
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   type: BUTTON_TYPES.TERTIARY,
// };

// export const Tertiary_Destructive = Template.bind({});
// Tertiary_Destructive.args = {
//   type: BUTTON_TYPES.TERTIARY,
//   destructive: true,
// };

// export const Button_Disabled = Template.bind({});
// Button_Disabled.args = {
//   type: BUTTON_TYPES.PRIMARY_APP,
//   disabled: true,
// };

// export const ButtonWithIcon = {
//   args: {
//     type: BUTTON_TYPES.PRIMARY_APP,
//     iconPosition: 'right',
//   },
//   render: ({ kind, type, size, iconPosition }) => html`
//     <kd-button
//       kind=${kind}
//       type=${type}
//       size=${size}
//       iconPosition=${iconPosition}
//     >
//       Button Text
//       <kd-icon .icon=${chevronRightIcon}></kd-icon>
//     </kd-button>
//   `,
// };

// export const IconOnly = {
//   args: {
//     type: BUTTON_TYPES.PRIMARY_APP,
//     iconPosition: 'center',
//   },
//   render: ({ kind, type, size, iconPosition }) => html`
//     <kd-button
//       kind=${kind}
//       type=${type}
//       size=${size}
//       iconPosition=${iconPosition}
//     >
//       <kd-icon .icon=${chevronRightIcon}></kd-icon>
//     </kd-button>
//   `,
// };
