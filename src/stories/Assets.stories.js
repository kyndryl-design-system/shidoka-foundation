import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import copyIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/copy.svg';

const copyCode = (filePath) => {
  const code = `import assetName from '@kyndryl-design-system/shidoka-foundation/assets/svg/${filePath}'`;

  navigator.clipboard.writeText(code);
};

export default {
  title: 'Foundation/Image Assets',
  decorators: [
    (story) =>
      html`
        <style>
          .copy-code {
            background: none;
            border: none;
            margin: 0;
            padding: 0;
            cursor: pointer;

            svg {
              display: block;
            }
          }

          table.icons {
            border-collapse: collapse;
            margin-bottom: 32px;
          }

          table.icons td,
          table.icons th {
            text-align: left;
            padding: 16px;
            border-bottom: 1px solid var(--kd-color-border-variants-light);
          }

          table.icons th {
            background: var(--kd-color-background-table-header);
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
          }

          table.icons th:first-child {
            border-top-left-radius: 8px;
          }

          table.icons th:last-child {
            border-top-right-radius: 8px;
          }

          table.icons td {
            background: var(--kd-color-background-table-row);
            svg {
              display: block;
            }
          }

          table.icons tr:nth-child(odd) td {
            background: var(--kd-color-background-table-alt-row);
          }

          table.icons tr:last-child td {
            border-bottom: none;
          }

          table.icons tr:last-child td:first-child {
            border-bottom-left-radius: 8px;
          }

          table.icons tr:last-child td:last-child {
            border-bottom-right-radius: 8px;
          }
        </style>
        ${story()}
      `,
  ],
};

const logoFiles = ['kyndryl-logo', 'bridge-logo-small', 'bridge-logo-large'];

export const Logo = {
  render: () => {
    return html`
      <table class="icons">
        <thead>
          <tr>
            <th>Image</th>
            <th>filename</th>
          </tr>
        </thead>
        <tbody>
          ${logoFiles.map((fileName) => {
            const filePath = `${fileName}.svg`;

            return html`
              <tr>
                <td>${unsafeSVG(require(`../assets/svg/${filePath}`))}</td>
                <td>
                  ${fileName}.svg

                  <button
                    class="copy-code"
                    title="Copy import path"
                    @click=${() => copyCode(filePath)}
                  >
                    ${unsafeSVG(copyIcon)}
                  </button>
                </td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
};

const mascotFiles = [
  '404-error',
  'angry',
  'box',
  'cleaning',
  'mobile-angry',
  'mobile-annoyed',
  'mobile-confused',
  'mobile',
  'question',
  'search',
  'sleep',
  'stop',
  'tech-issue',
  'tech-issue-2',
  'text-bubble',
  'warning',
  'kyn-simplified',
  'kyn-simplified-notification',
  'kyn-simplified-48px',
  'kyn-chathead',
];

export const Mascot = {
  argTypes: {
    color: {
      options: ['default', 'spruce', 'purple'],
      control: { type: 'select' },
    },
  },
  args: {
    color: 'default',
  },
  render: (args) => {
    return html`
      <table class="icons">
        <thead>
          <tr>
            <th>Image</th>
            <th>filename</th>
          </tr>
        </thead>
        <tbody>
          ${mascotFiles.map((fileName) => {
            let filePath = `mascot/${fileName}`;
            if (args.color !== 'default') {
              filePath += `-${args.color}`;
            }
            filePath += '.svg';

            return html`
              <tr>
                <td>${unsafeSVG(require(`../assets/svg/${filePath}`))}</td>
                <td>
                  ${filePath}

                  <button
                    class="copy-code"
                    title="Copy import path"
                    @click=${() => copyCode(filePath)}
                  >
                    ${unsafeSVG(copyIcon)}
                  </button>
                </td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
};
