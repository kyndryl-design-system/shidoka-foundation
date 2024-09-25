import { html } from 'lit';

export default {
  title: 'Foundation/Colors/Data Viz',
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
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-sea-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-sea-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-sea-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-sea-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-sea-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-jade-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-jade-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-jade-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-jade-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-amber-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-amber-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-amber-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-amber-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-blush-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-blush-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-blush-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-blush-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-lilac-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-data-lilac-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-lilac-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-lilac-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Neutral = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-text</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-text'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-text)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-background</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-background'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-background)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-10)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-20)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-gray-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-gray-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-gray-100)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Categorical = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-cat-01-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-cat-01-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-cat-01-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-cat-01-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Single = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-single</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-single'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-single)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Highlight = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-primary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-primary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-primary)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-secondary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-secondary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-secondary)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Sequential01 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-seq-01-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-01-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-01-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-01-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Sequential02 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-seq-02-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-02-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-02-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-02-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Sequential03 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-seq-03-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-03-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-03-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-03-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Sequential04 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-seq-04-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-04-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-04-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-04-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Sequential05 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-seq-05-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-01)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-02)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-03</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-03'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-03)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-04</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-04'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-04)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-05</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-05'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-05)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-06</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-06'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-06)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-07</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-07'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-07)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-08</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-08'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-08)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-09</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-09'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-09)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-seq-05-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-seq-05-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-seq-05-10)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Divergent01 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-div-01-pos-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-20)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-pos-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-pos-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-pos-10)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neutral</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neutral'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neutral)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-10)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-20)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-01-neg-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-01-neg-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-01-neg-100)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Divergent02 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-div-02-pos-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-20)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-pos-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-pos-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-pos-10)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neutral</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neutral'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neutral)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-10)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-20)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-div-02-neg-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-div-02-neg-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-div-02-neg-100)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const RAG8 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-status-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-success)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-success-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-success-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-success-light)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-error)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-error-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-error-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-error-light)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-warning)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-warning-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-warning-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-warning-light)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-informational</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-informational'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-informational)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const RAG3 = {
  render: () => {
    return html`
      <table>
        <thead>
          <tr>
            <th>Variable Name</th>
            <th>Hex value</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>--kd-color-data-status-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-success)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-warning)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-data-status-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-data-status-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-data-status-error)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
