/**
 * Copyright Kyndryl, Inc. 2023
 */

// External library imports
import { html } from 'lit';
import chevronRightIcon from '@carbon/icons/es/chevron--right/20';

// Relative component and helper imports
import './button';
import '../icon';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_ICON_POSITION } from './defs';
import { createOptionsArray } from '../../common/helpers/helpers';

const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Foundation/Button',
  component: 'kd-button',
  parameters: {},
  argTypes: {
    description: {
      description:
        'ARIA label for the button for accessibility.',
      control: { type: 'text' },
    },
    type: {
      description: 'Specifies the visual appearance/type of the button.',
      options: createSelectOptions(BUTTON_TYPES),
      control: { type: 'select', labels: { null: BUTTON_TYPES.PRIMARY } },
    },
    appType: {
      description: 'Indicates if the context pertains to an app.',
      options: ['app', 'web'],
      control: { type: 'select', labels: { null: 'app' } },
    },
    destructive: {
      description: ' Determines if the button indicates a destructive action.',
      control: { type: 'boolean' },
    },
    size: {
      description: 'Specifies the size of the button.',
      options: createSelectOptions(BUTTON_SIZES),
      control: { type: 'select', labels: { null: BUTTON_SIZES.MEDIUM } },
    },
    iconPosition: {
      description: 'Specifies the position of the icon relative to any button text.',
      options: createSelectOptions(BUTTON_ICON_POSITION),
      control: { type: 'select', labels: { null: 'center' } },
    },
    disabled: {
      description: 'Determines if the button is disabled.',
      control: { type: 'boolean' },
    }
  },
};

// Templates
const Template = ({
  type,
  appType,
  destructive,
  size,
  iconPosition,
  description,
  disabled,
}) => html`
  <kd-button
    type=${type}
    .app=${appType === 'app'}
    .destructive=${destructive}
    .disabled=${disabled}
    size=${size}
    iconPosition=${iconPosition}
    description=${description}
    >Button Text</kd-button
  >
`;

// Component Variants
export const Primary_App = Template.bind({});
Primary_App.args = {
  type: BUTTON_TYPES.PRIMARY,
  appType: 'app',
  size: BUTTON_SIZES.MEDIUM,
};

export const Primary_Web = Template.bind({});
Primary_Web.args = {
  type: BUTTON_TYPES.PRIMARY,
  appType: 'web',
  size: BUTTON_SIZES.MEDIUM,
};

export const Primary_Destructive = Template.bind({});
Primary_Destructive.args = {
  type: BUTTON_TYPES.PRIMARY,
  destructive: true,
  size: BUTTON_SIZES.MEDIUM,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: BUTTON_TYPES.SECONDARY,
  size: BUTTON_SIZES.MEDIUM,
};

export const Secondary_Destructive = Template.bind({});
Secondary_Destructive.args = {
  type: BUTTON_TYPES.SECONDARY,
  destructive: true,
  size: BUTTON_SIZES.MEDIUM,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: BUTTON_TYPES.TERTIARY,
  size: BUTTON_SIZES.MEDIUM,
};

export const Tertiary_Destructive = Template.bind({});
Tertiary_Destructive.args = {
  type: BUTTON_TYPES.TERTIARY,
  destructive: true,
  size: BUTTON_SIZES.MEDIUM,
};

export const Button_Disabled = Template.bind({});
Button_Disabled.args = {
  type: BUTTON_TYPES.PRIMARY,
  disabled: true,
  size: BUTTON_SIZES.MEDIUM,
};

export const ButtonWithIcon = {
  args: {
    type: BUTTON_TYPES.PRIMARY,
    appType: 'app',
    size: BUTTON_SIZES.MEDIUM,
    iconPosition: 'right',
  },
  render: ({ type, appType, size, iconPosition }) => html`
    <kd-button
      type=${type}
      .app=${appType === 'app'}
      size=${size}
      iconPosition=${iconPosition}
    >
      Button Text
      <kd-icon .icon=${chevronRightIcon}></kd-icon>
    </kd-button>
  `,
};

export const IconOnly = {
  args: {
    type: BUTTON_TYPES.PRIMARY,
    appType: 'app',
    size: BUTTON_SIZES.MEDIUM,
    iconPosition: 'center',
  },
  render: ({ type, appType, size, iconPosition }) => html`
    <kd-button
      type=${type}
      .app=${appType === 'app'}
      size=${size}
      iconPosition=${iconPosition}
    >
      <kd-icon .icon=${chevronRightIcon}></kd-icon>
    </kd-button>
  `,
};

Primary_App.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/tTu138pz3jLk0mykJSg3t4/KDS---Foundation-v1.0.0?node-id=4703%3A29021&mode=dev',
  },
};
