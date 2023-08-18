import { html } from 'lit';

export default {
  title: 'Foundation/Themes',
};

export const Default = {
  argTypes: {
    theme: {
      options: [
        'Darkstone-80',
        'Spruce-80',
        'Spruce-60',
        'SpringGreen-60',
        'WarmRed-50',
        'SpringGreen-20',
      ],
      control: { type: 'select' },
      description: 'Change theme.',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'Darkstone-80' },
      },
    },
  },

  args: {
    theme: 'Darkstone-80',
  },

  render: (args) => {
    const themeClass = 'kd-theme--' + args.theme.toLowerCase();
    return html`
      <style>
        table {
          border-collapse: collapse;
        }
        td,
        th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        .preview {
          width: 50px;
          height: 50px;
        }
      </style>
      <table id="theme-table" class="${themeClass}">
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-border-primary</td>

            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-default)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-primary</td>

            <td
              class="preview"
              style="background-color: var(--kd-color-background-primary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-primary</td>

            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-border-primary</td>

            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary-hover)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-border-primary</td>

            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary-pressed)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
