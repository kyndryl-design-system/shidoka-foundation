import { html } from 'lit';

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
            <td>--kd-color-spruce-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-spruce-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-spruce-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-spruce-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-spruce-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-skye-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-skye-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-skye-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-deepforest-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-deepforest-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-deepforest-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-springgreen-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-springgreen-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-springgreen-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmred-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmred-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmred-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-earth-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-earth-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-earth-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-cloud-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-cloud-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-cloud-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-darkstone-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-darkstone-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-darkstone-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-100)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-90)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-80)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-70)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-60)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-40)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-30)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warmgray-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warmgray-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warmgray-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-coolgray-100</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-100'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-100)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-90</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-90'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-90)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-80</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-80'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-80)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-70</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-70'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-70)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-60)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-50)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-40</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-40'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-40)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-30</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-30'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-30)"
            ></td>
          </tr>
          <tr>
            <td>--kd-color-coolgray-20</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-20'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-20)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-coolgray-10</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-coolgray-10'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-coolgray-10)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-transparent</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-transparent'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-transparent)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-light-opacity-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-light-opacity-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-light-opacity-50)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-dark-opacity-50</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-dark-opacity-50'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-dark-opacity-50)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Text = {
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
            <td>--kd-color-text-primary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-primary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-primary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-primary-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-primary-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-primary-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-primary-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-primary-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-primary-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-secondary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-secondary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-secondary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-tertiary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-tertiary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-tertiary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-tertiary-bold</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-tertiary-bold'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-tertiary-bold)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-eyebrow</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-eyebrow'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-eyebrow)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-brand</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-brand'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-brand)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-inversed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-inversed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-inversed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-disabled</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-disabled'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-disabled)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-link</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-link'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-link)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-link-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-link-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-link-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-link-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-link-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-link-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-placeholder</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-placeholder'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-placeholder)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-success)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-error)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-warning)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-informational</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-informational'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-informational)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Background = {
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
            <td>--kd-color-background-ui-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui-medium</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-medium'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-medium)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui-mid-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-mid-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-mid-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-brand</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-brand'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-brand)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-ui-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-ui-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-ui-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-primary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-primary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-primary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-primary-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-primary-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-primary-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-primary-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-primary-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-primary-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-secondary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-secondary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-secondary-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-secondary-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-secondary-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-secondary-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-secondary-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-destructive</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-destructive'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-destructive)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-destructive-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-destructive-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-destructive-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-destructive-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-destructive-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-destructive-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-focus</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-focus'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-focus)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-inverse</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-inverse'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-inverse)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-inverse-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-inverse-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-inverse-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-accent-stone</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-accent-stone'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-accent-stone)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-accent-skye</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-accent-skye'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-accent-skye)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-accent-springgreen</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-accent-springgreen'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-accent-springgreen)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-accent-spruce-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-accent-spruce-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-accent-spruce-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-accent-spruce-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-accent-spruce-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-accent-spruce-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-success)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-success-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-success-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-success-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-error)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-error-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-error-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-error-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-warning)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-warning-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-warning-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-warning-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-informational</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-informational'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-informational)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-informational-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-informational-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-informational-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-background-disabled</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-disabled'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-disabled)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Borders = {
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
            <td>--kd-color-border-primary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-primary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-primary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-secondary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-secondary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-secondary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-ui</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-ui'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-ui)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-ui-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-ui-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-ui-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-ui-disabled</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-ui-disabled'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-ui-disabled)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-tertiary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-tertiary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-tertiary)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-tertiary-bold</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-tertiary-bold'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-tertiary-bold)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-brand</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-brand'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-brand)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-focus</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-focus'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-focus)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-destructive</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-destructive'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-destructive)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-inverse</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-inverse'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-inverse)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-hover</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-hover'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-hover)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-pressed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-pressed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-pressed)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-disabled</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-disabled'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-disabled)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-accent-springgreen</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-accent-springgreen'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-accent-springgreen)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-accent-spruce-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-accent-spruce-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-accent-spruce-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-success)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-error)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-warning)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-informational</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-informational'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-informational)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
