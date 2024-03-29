import { html } from 'lit';

export default {
  title: 'Foundation/Elevation',
  decorators: [
    (story) =>
      html`
        <style>
          .elevation-examples {
            display: flex;
            flex-direction: column;
            gap: 32px;

            & > div {
              padding: 16px;
              border-radius: 8px;
            }
          }
        </style>
        ${story()}
      `,
  ],
};

export const Elevation = {
  render: () => {
    return html`
      <div class="elevation-examples">
        <div class="kd-elevation--level-1">
          <div class="kd-type--headline-07">Level 1</div>
          <p>
            Slight elevation, for subtle elements like navigation, cards and
            widgets.
          </p>
        </div>

        <div class="kd-elevation--level-2">
          <div class="kd-type--headline-07">Level 2</div>
          <p>
            Moderate elevation, for rollover, menus, tooltips and overflow
            menus.
          </p>
        </div>

        <div class="kd-elevation--level-2-overflow">
          <div class="kd-type--headline-07">Level 2 - Overflow</div>
          <p>
            Moderate elevation with equal distribution of shadow all around, for
            element overflow.
          </p>
        </div>

        <div class="kd-elevation--level-3">
          <div class="kd-type--headline-07">Level 3</div>
          <p>
            Intense elevation, for critical components like alerts and modals.
          </p>
        </div>

        <div class="kd-elevation--level-4">
          <div class="kd-type--headline-07">Level 4</div>
          <p>
            Floating elevation, for floating elements like objects that are
            being dragged.
          </p>
        </div>
      </div>
    `;
  },
};
