import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import '../icon';
import chevronRightIcon from '@carbon/icons/es/checkmark--outline/20';
import './index';
import { createOptionsArray } from '../../common/helpers/storybook';
import {
  SPLIT_BTN_KINDS,
  SPLIT_BTN_SIZES,
  SPLIIT_BTN_ICON_POSITION,
} from './defs';
const createSelectOptions = (defs) => [null, ...createOptionsArray(defs)];

export default {
  title: 'Components/SplitButton',
  component: 'kd-split-btn',
  subcomponents: {
    SplitButtonOption: 'kd-splitbutton-option',
  },
  argTypes: {
    kind: {
      options: createSelectOptions(SPLIT_BTN_KINDS),
      control: {
        type: 'select',
        labels: { null: SPLIT_BTN_KINDS.PRIMARY_APP },
      },
      table: {
        defaultValue: { summary: SPLIT_BTN_KINDS.PRIMARY_APP },
      },
    },
    size: {
      options: createSelectOptions(SPLIT_BTN_SIZES),
      control: { type: 'select', labels: { null: SPLIT_BTN_SIZES.MEDIUM } },
      table: {
        defaultValue: { summary: SPLIT_BTN_SIZES.MEDIUM },
      },
    },
    iconPosition: {
      options: createSelectOptions(SPLIIT_BTN_ICON_POSITION),
      control: {
        type: 'select',
        labels: { null: SPLIIT_BTN_ICON_POSITION.LEFT },
      },
      table: {
        defaultValue: { summary: SPLIIT_BTN_ICON_POSITION.LEFT },
      },
    },
  },
};

const args = {
  size: 'medium',
  kind: 'primary-app',
  destructive: false,
  disabled: false,
  description: 'Split button description',
  label: 'Primary Action',
  name: '',
  iconPosition: 'left',
};

export const Default = {
  args,
  render: (args) => {
    return html`
      <kd-split-btn
        kind=${args.kind}
        ?destructive=${args.destructive}
        ?disabled=${args.disabled}
        size=${args.size}
        description=${args.description}
        name=${args.name}
        label=${args.label}
        @on-click=${(e) => action(e.type)(e)}
      >
        <kd-splitbutton-option value="1">Option 1</kd-splitbutton-option>
        <kd-splitbutton-option value="2" disabled
          >Option 2</kd-splitbutton-option
        >
        <kd-splitbutton-option value="3">Option 3</kd-splitbutton-option>
      </kd-split-btn>
    `;
  },
};

export const WithIcon = {
  args,
  render: (args) => {
    return html`
      <kd-split-btn
        kind=${args.kind}
        ?destructive=${args.destructive}
        ?disabled=${args.disabled}
        size=${args.size}
        description=${args.description}
        name=${args.name}
        label=${args.label}
        iconPosition=${args.iconPosition}
        @on-click=${(e) => action(e.type)(e)}
      >
        <kd-splitbutton-option value="1">Option 1</kd-splitbutton-option>
        <kd-splitbutton-option value="2">Option 2</kd-splitbutton-option>
        <kd-splitbutton-option value="3" disabled
          >Option 3</kd-splitbutton-option
        >
        <kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
      </kd-split-btn>
    `;
  },
};
