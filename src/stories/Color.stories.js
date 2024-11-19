import { html } from 'lit';
import { getTokens } from '../common/helpers/storybook';
import colorPalette from '../../tokens/Color Palette/Color.json';
import colorSemantic from '../../tokens/Themes/Light.json';

const paletteTokens = getTokens(colorPalette);
const semanticTokens = getTokens(colorSemantic);

export default {
  title: 'Foundation/Colors',
  decorators: [
    (story) =>
      html`
        <style>
          .heading {
            margin-bottom: 16px;
            color: var(--kd-color-titles-primary-title);
          }

          p {
            margin-bottom: 12px;
          }

          table {
            border-collapse: collapse;
            margin-bottom: 32px;
          }

          td,
          th {
            text-align: left;
            padding: 16px;
            /* border-bottom: 1px solid var(--kd-color-border-light); */
          }

          th {
            background: var(--kd-color-table-header);
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
          }

          th:first-child {
            border-top-left-radius: 8px;
          }

          th:last-child {
            border-top-right-radius: 8px;
          }

          td {
            background: var(--kd-color-table-row);
          }

          tr:nth-child(odd) td {
            background: var(--kd-color-table-alt-row);
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr:last-child td:first-child {
            border-bottom-left-radius: 8px;
          }

          tr:last-child td:last-child {
            border-bottom-right-radius: 8px;
          }

          .preview {
            display: block;
            border-radius: 8px;
            outline: 1px solid var(--kd-color-border-light);
            width: 100%;
            height: 40px;
          }
        </style>
        ${story()}
      `,
  ],
};

export const Semantic = {
  render: () => {
    return html`
      <div class="heading kd-type--headline-04">Semantic Tokens</div>

      ${Object.entries(colorSemantic).map(([key]) => {
        return html`
          <div class="heading kd-type--headline-06">${key}</div>

          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              ${semanticTokens
                .filter((token) => token.categoryTree.includes(key))
                .map((token) => {
                  return html`
                    <tr>
                      <td>${token.variable}</td>
                      <td>
                        ${getComputedStyle(
                          document.documentElement
                        ).getPropertyValue(token.variable)}
                      </td>
                      <td>
                        <span
                          class="preview"
                          style="background-color: var(${token.variable})"
                        ></span>
                      </td>
                    </tr>
                  `;
                })}
            </tbody>
          </table>
        `;
      })}
    `;
  },
};

export const Palette = {
  render: () => {
    return html`
      <div class="heading kd-type--headline-04">Palette Tokens</div>

      <p>
        <strong>Note:</strong> Do <strong><em>not</em></strong> use Palette
        Tokens directly. Only use Semantic Tokens in designs and code.
      </p>

      ${Object.entries(colorPalette).map(([key]) => {
        return html`
          <div class="heading kd-type--headline-06">${key}</div>

          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              ${paletteTokens
                .filter((token) => token.categoryTree.includes(key))
                .map((token) => {
                  return html`
                    <tr>
                      <td>${token.variable}</td>
                      <td>
                        ${getComputedStyle(
                          document.documentElement
                        ).getPropertyValue(token.variable)}
                      </td>
                      <td>
                        <span
                          class="preview"
                          style="background-color: var(${token.variable})"
                        ></span>
                      </td>
                    </tr>
                  `;
                })}
            </tbody>
          </table>
        `;
      })}
    `;
  },
};
