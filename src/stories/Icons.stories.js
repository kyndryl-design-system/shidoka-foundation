import { html } from 'lit-html';
import kyndrylIcon from '../assets/svg/kyndryl-logo.svg';
import bridgeSmallIcon from '../assets/svg/bridge-logo-small.svg';
import bridgeLargeIcon from '../assets/svg/bridge-logo-large.svg';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

export default {
  title: 'Foundation/Icons',
  decorators: [
    (story) =>
      html`
        <style>
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
          svg {
            .kyndryl_text {
              fill: var(--kd-color-background-logo-kyndryl-txt);
            }
          }
        </style>
        ${story()}
      `,
  ],
};

export const Icons = {
  render: () => {
    return html`
      <table class="icons">
        <thead>
          <tr>
            <th>Icon</th>
            <th>filename</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${unsafeHTML(kyndrylIcon)}</td>
            <td>kyndryl-logo.svg</td>
          </tr>
          <tr>
            <td>${unsafeHTML(bridgeLargeIcon)}</td>
            <td>bridge-logo-large.svg</td>
          </tr>
          <tr>
            <td>${unsafeHTML(bridgeSmallIcon)}</td>
            <td>bridge-logo-small.svg</td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
