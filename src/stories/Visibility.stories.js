import { html } from 'lit';

export default {
  title: 'Foundation/Visibility',
  decorators: [
    (story) =>
      html`
        <style>
          .storybook-visibility-example {
            align-items: center;
            background: var(--kd-color-cloud-10);
            display: flex;
            margin: 16px;
            min-height: 4em;
            padding: 16px;
          }
        </style>
        ${story()}
      `,
  ],
};

const args = {};

export const Visibility = {
  args: args,
  render: () => {
    return html`
      <div class="storybook-visibility-example">
        This block includes text for screen readers only.
        <div class="kd-visibility--sr-only">screen reader only content</div>
      </div>
      <div class="storybook-visibility-example">
        <div class="kd-visibility--hidden-sm">
          Text hidden at Small (sm) breakpoint.
        </div>
      </div>
      <div class="storybook-visibility-example">
        <div class="kd-visibility--hidden-md">
          Text hidden at Medium (md) breakpoint.
        </div>
      </div>
      <div class="storybook-visibility-example">
        <div class="kd-visibility--hidden-lg">
          Text hidden at Large (lg) breakpoint.
        </div>
      </div>
      <div class="storybook-visibility-example">
        <div class="kd-visibility--hidden-xl">
          Text hidden at X-Large (xl) breakpoint.
        </div>
      </div>
      <div class="storybook-visibility-example">
        <div class="kd-visibility--hidden-max">
          Text hidden at Max (max) breakpoint.
        </div>
      </div>
    `;
  },
};
