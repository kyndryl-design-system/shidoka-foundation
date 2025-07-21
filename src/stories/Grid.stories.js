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
    noGap: {
      control: { type: 'boolean' },
      description: 'Remove column gap.',
      table: {
        defaultValue: { summary: false },
      },
    },
    fullBleed: {
      control: { type: 'boolean' },
      description: 'Full bleed/override page gutter.',
      table: {
        defaultValue: { summary: false },
      },
    },
    withLocalNav: {
      control: { type: 'boolean' },
      description: 'Simulate Local Nav presence.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  decorators: [
    (story) =>
      html`
        <style>
          .storybook-grid-example {
            margin: var(--kd-negative-page-gutter);
          }

          .storybook-grid-example .kd-grid {
            margin-top: var(--kd-grid-gap);
            margin-bottom: var(--kd-grid-gap);
          }

          .storybook-grid-example .kd-grid > div {
            text-align: center;
            border: 1px solid var(--kd-color-border-variants-light);
            padding: 16px;
          }

          .fake-local-nav {
            display: none;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: var(--kd-local-nav-width);
            background: var(--kd-color-background-menu-state-default);
            box-shadow: var(--kd-elevation-level-2);
          }

          @media (min-width: 42rem) {
            .fake-local-nav {
              display: block;
            }

            .with-local-nav {
              margin-left: 56px;
            }
          }
        </style>
        ${story()}
      `,
  ],
};

const args = {
  alignLeft: false,
  noMax: false,
  noGap: false,
  fullBleed: false,
  withLocalNav: false,
};

export const Grid = {
  args: args,
  render: (args) => {
    const gridClasses = {
      'kd-grid': true,
      'kd-grid--no-max': args.noMax,
      'kd-grid--no-gap': args.noGap,
      'kd-grid--align-left': args.alignLeft,
      'kd-grid--full-bleed': args.fullBleed,
    };

    return html`
      <div class="storybook-grid-example">
        ${args.withLocalNav ? html`<div class="fake-local-nav"></div>` : ''}
        <div
          class="kd-spacing--page-gutter ${args.withLocalNav
            ? 'with-local-nav'
            : ''}"
        >
          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-12"
            >
              12 cols @ max, xl, lg, 8 cols @ md, and 4 cols @ sm
            </div>
          </div>

          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-6"
            >
              6 cols @ max, xl, lg, 4 cols @ md and sm
            </div>
            <div
              class="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-6"
            >
              6 cols @ max, xl, lg, 4 cols @ md and sm
            </div>
          </div>

          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4"
            >
              4 cols @ max, xl, lg, md and 2 cols @ sm
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4"
            >
              4 cols @ max, xl, lg, md and 2 cols @ sm
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-4"
            >
              4 cols @ max, xl, lg, md and 2 cols @ sm
            </div>
          </div>

          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3"
            >
              3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3"
            >
              3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3"
            >
              3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-3"
            >
              3 cols @ max, xl, lg, 4 cols @ md, and 2 cols @ sm
            </div>
          </div>

          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
            <div
              class="kd-grid__col--sm-2 kd-grid__col--md-4 kd-grid__col--lg-2"
            >
              2 cols @ max, xl, lg, sm, 4 cols @ md
            </div>
          </div>

          <div class="${classMap(gridClasses)}">
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
            <div
              class="kd-grid__col--sm-1 kd-grid__col--md-1 kd-grid__col--lg-1"
            >
              1
            </div>
          </div>
        </div>
      </div>
    `;
  },
};
