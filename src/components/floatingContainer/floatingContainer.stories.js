import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import chevronUpIcon from '@carbon/icons/es/chevron--up/20';
import chatIcon from '@carbon/icons/es/chat/20';
import './index';
import '../button';
import '../icon';

export default {
  title: 'Components/Button/With Floating Container',
  component: 'kd-button-float-container',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Default = {
  render: () => html`
    <kd-button-float-container>
      <kd-button
        kind="primary-web"
        type="button"
        size="small"
        iconposition="left"
        description="Button 1"
        ?isFloating=${true}
        @on-click=${(e) => action(e.type)(e)}
        >Button 1
        <kd-icon slot="icon" .icon=${chevronUpIcon}></kd-icon>
      </kd-button>
    </kd-button-float-container>
  `,
};

export const WithSecondaryButton = {
  render: () => html`
    <div style="padding-bottom:80px;">
      <!-- Add some space in bottom so FAB doesn't obstruct any essestial UI element -->
      <!-- Add some long content here to see the floating button in action -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum
      </p>
    </div>
    <kd-button-float-container>
      <kd-button
        kind="primary-web"
        type="button"
        size="small"
        iconposition="left"
        description="Button 1"
        ?isFloating=${true}
        @on-click=${(e) => action(e.type)(e)}
      >
        <span class="test">Button 1</span>
        <kd-icon slot="icon" .icon=${chevronUpIcon}></kd-icon>
      </kd-button>
      <kd-button
        kind="primary-app"
        type="button"
        size="small"
        iconposition="left"
        description="Button 2"
        ?isFloating=${true}
        @on-click=${(e) => action(e.type)(e)}
      >
        <span class="test">Button 2</span>
        <kd-icon slot="icon" .icon=${chatIcon}></kd-icon>
      </kd-button>
    </kd-button-float-container>
    <style>
      .test {
        display: none;
      }

      @media (min-width: 42rem) {
        .test {
          display: inline;
        }
      }
    </style>
  `,
};

export const WithScroll = {
  render: () => html`
    <div style="padding-bottom:70px;">
      <!-- Add some space in bottom so FAB doesn't obstruct any essestial UI element -->
      <!-- Add some long content here to see the floating button in action -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
    <kd-button-float-container>
      <kd-button
        kind="primary-web"
        type="button"
        size="small"
        iconposition="left"
        ?isFloating=${true}
        ?showOnScroll=${true}
        description="Button 1"
        @on-click=${(e) => action(e.type)(e)}
      >
        Button 1
        <kd-icon slot="icon" .icon=${chevronUpIcon}></kd-icon>
      </kd-button>
    </kd-button-float-container>
  `,
};
