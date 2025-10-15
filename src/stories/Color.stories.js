import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { getTokens } from '../common/helpers/storybook';
import colorPalette from '../../tokens/Color Palette/Color.json';
import colorSemantic from '../../tokens/Themes/Light.json';

const paletteTokens = getTokens(colorPalette);
const semanticTokens = getTokens(colorSemantic);

import '@kyndryl-design-system/shidoka-applications/components/reusable/tabs';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import copyToClipboard from 'copy-to-clipboard';
import copyIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/copy.svg?raw';

export default {
  title: 'Foundation/Colors',
  decorators: [
    (story) =>
      html`
        <style>
          .heading {
            margin-bottom: 16px;
            color: var(--kd-color-text-title-primary);
          }

          p {
            margin-bottom: 12px;
          }

          table.tokens {
            border-collapse: collapse;
            margin-bottom: 32px;
          }

          table.tokens td,
          table.tokens th {
            text-align: left;
            padding: 16px;
            border-bottom: 1px solid var(--kd-color-border-variants-light);
          }

          table.tokens th {
            background: var(--kd-color-background-table-header);
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
          }

          table.tokens th:first-child {
            border-top-left-radius: 8px;
          }

          table.tokens th:last-child {
            border-top-right-radius: 8px;
          }

          table.tokens td {
            background: var(--kd-color-background-table-row);
          }

          table.tokens tr:nth-child(odd) td {
            background: var(--kd-color-background-table-alt-row);
          }

          table.tokens tr:last-child td {
            border-bottom: none;
          }

          table.tokens tr:last-child td:first-child {
            border-bottom-left-radius: 8px;
          }

          table.tokens tr:last-child td:last-child {
            border-bottom-right-radius: 8px;
          }

          .token-preview {
            display: block;
            border-radius: 8px;
            outline: 1px solid var(--kd-color-border-variants-light);
            width: 100%;
            height: 40px;
          }

          .copy-code {
            background: none;
            border: none;
            margin: 0;
            padding: 0;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s ease;
            svg {
              display: block;
            }
          }

          table.tokens tr:hover .copy-code {
            opacity: 1;
          }
        </style>
        ${story()}
      `,
  ],
};

const handleCopy = (token, event) => {
  copyToClipboard(token);
  const button = event.target.closest('button');
  const originalTitle = button.title;
  button.title = 'Copied!';

  setTimeout(() => {
    button.title = originalTitle;
  }, 0);
};

export const Semantic = {
  render: () => {
    return html`
      <div class="heading kd-type--headline-04">Semantic Tokens</div>

      <kyn-tabs vertical>
        ${repeat(
          Object.entries(colorSemantic).sort(),
          ([key]) => key,
          ([key], index) => html`
            <kyn-tab slot="tabs" id="tab${key}" ?selected=${index === 0}>
              ${key}
            </kyn-tab>

            <kyn-tab-panel tabid="tab${key}" ?visible=${index === 0}>
              <div class="heading kd-type--headline-06">${key}</div>

              <table class="tokens">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Value</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  ${repeat(
                    semanticTokens.filter(
                      (token) => token.categoryTree[0] === key
                    ),
                    (token) => token.variable,
                    (token) => html`
                      <tr>
                        <td>
                          ${token.variable}
                          <button
                            class="copy-code"
                            title="Copy token"
                            @click=${(e) => handleCopy(token.variable, e)}
                          >
                            ${unsafeSVG(copyIcon)}
                          </button>
                        </td>
                        <td>
                          ${getComputedStyle(
                            document.documentElement
                          ).getPropertyValue(token.variable)}
                        </td>
                        <td>
                          <span
                            class="token-preview"
                            style="background-color: var(${token.variable})"
                          ></span>
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            </kyn-tab-panel>
          `
        )}
      </kyn-tabs>
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

      <kyn-tabs vertical>
        ${repeat(
          Object.entries(colorPalette).sort(),
          ([key]) => key,
          ([key], index) => html`
            <kyn-tab slot="tabs" id="tab${key}" ?selected=${index === 0}>
              ${key}
            </kyn-tab>

            <kyn-tab-panel tabid="tab${key}" ?visible=${index === 0}>
              <div class="heading kd-type--headline-06">${key}</div>

              <table class="tokens">
                <thead>
                  <tr>
                    <th>Token</th>
                    <th>Value</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  ${repeat(
                    paletteTokens.filter(
                      (token) => token.categoryTree[0] === key
                    ),
                    (token) => token.variable,
                    (token) => html`
                      <tr>
                        <td>
                          ${token.variable}
                          <button
                            class="copy-code"
                            title="Copy token"
                            @click=${(e) => handleCopy(token.variable, e)}
                          >
                            ${unsafeSVG(copyIcon)}
                          </button>
                        </td>
                        <td>
                          ${getComputedStyle(
                            document.documentElement
                          ).getPropertyValue(token.variable)}
                        </td>
                        <td>
                          <span
                            class="token-preview"
                            style="background-color: var(${token.variable})"
                          ></span>
                        </td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            </kyn-tab-panel>
          `
        )}
      </kyn-tabs>
    `;
  },
};
