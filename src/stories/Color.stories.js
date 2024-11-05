import { html } from 'lit';
import { getTokens } from '../common/helpers/storybook';
import colorPalette from '../../tokens/Color Palette/Color.json';
import colorSemantic from '../../tokens/Themes/Light.json';

const paletteTokens = getTokens(colorPalette, true);
const semanticTokens = getTokens(colorSemantic);

export default {
  title: 'Foundation/Colors',
  decorators: [
    (story) =>
      html`
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
        ${story()}
      `,
  ],
};

export const Palette = {
  render: () => {
    return html`
      <p>
        <strong>Note:</strong> Do <strong><em>not</em></strong> use Palette
        tokens directly. Only use contextual tokens in designs and code.
      </p>

      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          ${paletteTokens.map((token) => {
            return html`
              <tr>
                <td>${token}</td>
                <td>
                  ${getComputedStyle(document.documentElement).getPropertyValue(
                    token
                  )}
                </td>
                <td
                  class="preview"
                  style="background-color: var(${token})"
                ></td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
};

export const Semantic = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          ${semanticTokens.map((token) => {
            return html`
              <tr>
                <td>${token}</td>
                <td>
                  ${getComputedStyle(document.documentElement).getPropertyValue(
                    token
                  )}
                </td>
                <td
                  class="preview"
                  style="background-color: var(${token})"
                ></td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
};
