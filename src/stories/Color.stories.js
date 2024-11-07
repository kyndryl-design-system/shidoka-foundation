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
                <td>${token.variable}</td>
                <td>
                  ${getComputedStyle(document.documentElement).getPropertyValue(
                    token.variable
                  )}
                </td>
                <td
                  class="preview"
                  style="background-color: var(${token.variable})"
                ></td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
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
                <td>${token.variable}</td>
                <td>
                  ${getComputedStyle(document.documentElement).getPropertyValue(
                    token.variable
                  )}
                </td>
                <td
                  class="preview"
                  style="background-color: var(${token.variable})"
                ></td>
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  },
};

// export const Buttons = {
//   render: () => {
//     return html`
//       <table>
//         <thead>
//           <tr>
//             <th>Variable Name</th>
//             <th>Value</th>
//             <th>Preview</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${semanticTokens
//             .filter((token) => token.categoryTree.includes('Buttons'))
//             .map((token) => {
//               return html`
//                 <tr>
//                   <td>${token.variable}</td>
//                   <td>
//                     ${getComputedStyle(
//                       document.documentElement
//                     ).getPropertyValue(token.variable)}
//                   </td>
//                   <td
//                     class="preview"
//                     style="background-color: var(${token.variable})"
//                   ></td>
//                 </tr>
//               `;
//             })}
//         </tbody>
//       </table>
//     `;
//   },
// };
