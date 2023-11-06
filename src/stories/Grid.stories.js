import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export default {
  title: 'Foundation/Grid',
  argTypes: {
    alignLeft: {
      control: { type: 'boolean' },
      description: 'Align grid to the left.',
      table: {
        defaultValue: { summary: false },
      },
    },
    noMax: {
      control: { type: 'boolean' },
      description: 'Remove grid max width.',
      table: {
        defaultValue: { summary: false },
      },
    },
    noPad: {
      control: { type: 'boolean' },
      description: 'Remove grid padding.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  decorators: [
    (story) =>
      html`
        <style>
          .grid-examples {
            background: aliceblue;
            border: 1px dashed lightgray;
          }

          .grid-examples .kd-grid {
            background: lightpink;
            margin-top: 32px;
            margin-bottom: 32px;
          }

          .grid-examples .kd-grid > div {
            background: white;
            text-align: center;
            border: 1px solid lightgray;
            padding: 16px;
          }
        </style>
        ${story()}
      `,
  ],
};

const args = {
  alignLeft: false,
  noMax: false,
  noPad: false,
};

export const Grid = {
  args: args,
  render: (args) => {
    const gridContainerClasses = {
      'grid-examples': true,
      'kd-grid-container': true,
    };
    const gridClasses = {
      'kd-grid': true,
      'kd-grid--no-max': args.noMax,
      'kd-grid--no-pad': args.noPad,
      'kd-grid--align-left': args.alignLeft,
    };

    return html`
      <div class="${classMap(gridContainerClasses)}">
        <div class="${classMap(gridClasses)}">
          <div
            class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-12"
          >
            12 cols @ max, xl, lg, 8 cols @ md, and 4 cols @ sm
          </div>
        </div>

        <div class="${classMap(gridClasses)}">
          <div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-6">
            6 cols @ max, xl, lg, 4 cols @ md and sm
          </div>
          <div class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-6">
            6 cols @ max, xl, lg, 4 cols @ md and sm
          </div>
        </div>

        <div class="${classMap(gridClasses)}">
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4">
            4 cols @ max, xl, lg, md and 2 cols @ sm
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4">
            4 cols @ max, xl, lg, md and 2 cols @ sm
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4">
            4 cols @ max, xl, lg, md and 2 cols @ sm
          </div>
        </div>

        <div class="${classMap(gridClasses)}">
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3">
            3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3">
            3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3">
            3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3">
            3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
          </div>
        </div>

        <div class="${classMap(gridClasses)}">
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
          <div class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2">
            2 cols @ max, xl, lg, sm, 4 cols @ md
          </div>
        </div>
      </div>
    `;
  },
};
