import { html } from 'lit-html';
import { classMap } from 'lit/directives/class-map.js';

let spacingOptions = [
  '0',
  '2',
  '4',
  '8',
  '12',
  '16',
  '24',
  '32',
  '40',
  '48',
  '64',
  '72',
  '80',
  '96',
  '120',
  '128',
  '144',
  '160',
  '192',
];
export const Spacing = {
  argTypes: {
    paddingLeft: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Padding Left',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    paddingRight: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Padding Right',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    paddingTop: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Padding Top',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    paddingBottom: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Padding Bottom',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },

    marginLeft: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Margin Left',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    marginRight: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Margin Right',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    marginTop: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Margin Top',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
    marginBottom: {
      options: spacingOptions,
      control: { type: 'select' },
      description: 'Margin Bottom',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '0' },
      },
    },
  },

  args: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    marginBottom: '0',
  },

  render: (args) => {
    const spacingClasses = {
      [`kd-spacing--padding-left-${args.paddingLeft}`]: true,
      [`kd-spacing--padding-right-${args.paddingRight}`]: true,
      [`kd-spacing--padding-top-${args.paddingTop}`]: true,
      [`kd-spacing--padding-bottom-${args.paddingBottom}`]: true,
      [`kd-spacing--margin-left-${args.marginLeft}`]: true,
      [`kd-spacing--margin-right-${args.marginRight}`]: true,
      [`kd-spacing--margin-top-${args.marginTop}`]: true,
      [`kd-spacing--margin-bottom-${args.marginBottom}`]: true,
      [`middle-container`]: true,
    };
    return html`
      <style>
        .outer-container {
          background: #ffaaaa;
          display: inline-block;
        }

        .middle-container {
          display: inline-block;
          border: 1px solid #000;
          background: #aaffaa;
        }
        .inner-container {
          background: #fff;
        }
      </style>
      <div class="outer-container">
        <div class="${classMap(spacingClasses)}">
          <div class="inner-container">Sample Text</div>
          <div></div>
        </div>
      </div>
    `;
  },
};

export default {
  title: 'Foundation/Spacing',
};
