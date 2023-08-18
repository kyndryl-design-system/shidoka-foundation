import { html } from 'lit';
import '../components/button';

export default {
  title: 'Foundation/Themes',
  decorators: [
    (story) =>
      html`
        <style>
          kd-button {
            margin-bottom: 8px;
          }
        </style>
        ${story()}
      `,
  ],
};

export const Example = {
  render: (args) => {
    return html`
      <kd-button> Primary App Button </kd-button>

      <kd-button kind="primary-web"> Primary Web Button </kd-button>

      <kd-button kind="primary-app" destructive>
        Primary Destructive
      </kd-button>

      <kd-button kind="secondary"> Secondary Button </kd-button>
      <kd-button kind="secondary" destructive>
        Secondary Destructive
      </kd-button>

      <kd-button kind="tertiary"> Tertiary Button </kd-button>
      <kd-button kind="tertiary" destructive> Tertiary Destructive </kd-button>
    `;
  },
};
