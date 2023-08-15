import { html } from 'lit';

export default {
  title: 'Foundation/Layout',

  decorators: [
    (story) =>
      html`
        <style>
          .layout-examples .aspect-ratio-box {
            width: 500px;
            background: var(--kd-color-background-ui-medium);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .layout-examples .object-fit-box {
            max-width: 500px;
            border: 1px solid var(--kd-color-background-secondary);
          }
        </style>
        ${story()}
      `,
  ],
};

export const AspectRatio = {
  argTypes: {
    aspectRatio: {
      options: ['16x9', '2x1', '4x3', '1x1', '1x2', '3x4'],
      control: { type: 'select' },
      description: 'Change aspect ratio.',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: '16x9' },
      },
    },
  },

  args: {
    aspectRatio: '16x9',
  },

  render: (args) => {
    const aspectRatioClass = 'kd-layout__aspect-ratio--' + args.aspectRatio;
    return html`
      <div class="layout-examples">
        <h3>Aspect Ratio</h3>
        <div class="aspect-ratio-box  kd-type--display-02 ${aspectRatioClass}">
          ${args.aspectRatio}
        </div>
      </div>
    `;
  },
};

export const ObjectFit = {
  argTypes: {
    objectFit: {
      options: ['cover', 'contain'],
      control: { type: 'select' },
      description: 'Change object fit.',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'cover' },
      },
    },
  },

  args: {
    objectFit: 'cover',
  },

  render: (args) => {
    const objectFitClass = 'kd-layout__object-fit--' + args.objectFit;

    return html`
      <div class="layout-examples">
        <h3>Object Fit</h3>
        <p>A 16x9 image in a 4x3 container</p>
        <div class="object-fit-box kd-layout__aspect-ratio--4x3">
          <img
            class="${objectFitClass}"
            src="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&wid=1200&ts=1650983065999&dpr=off"
          />
        </div>
      </div>
    `;
  },
};
