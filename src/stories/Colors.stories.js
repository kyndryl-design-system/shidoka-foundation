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
  render: (args) => {
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
            <td>--kd-color-dk-springgreen-60</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-dk-springgreen-60'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-dk-springgreen-60)"
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
  render: (args) => {
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
            <td>--kd-color-text-featured</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-featured'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-featured)"
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
            <td>--kd-color-text-accent-01</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-accent-01'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-accent-01)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-text-accent-02</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-text-accent-02'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-text-accent-02)"
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
        </tbody>
      </table>
    `;
  },
};

export const Background = {
  render: (args) => {
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
            <td>--kd-color-background-tertiary</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-background-tertiary'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-background-tertiary)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Borders = {
  render: (args) => {
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
            <td>--kd-color-border-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-inversed</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-inversed'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-inversed)"
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
            <td>--kd-color-border-accent-spruce</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-accent-spruce'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-accent-spruce)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-border-accent-warmred</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-border-accent-warmred'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-border-accent-warmred)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const Status = {
  render: (args) => {
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
            <td>--kd-color-success</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-success'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-success)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-success-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-success-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-success-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-error</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-error'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-error)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-error-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-error-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-error-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warning</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warning'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warning)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-warning-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-warning-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-warning-light)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-informational</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-informational'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-informational)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-informational-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-informational-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-informational-light)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};

export const UI = {
  render: (args) => {
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
            <td>--kd-color-ui-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-ui-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-ui-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-ui-mid-dark</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-ui-mid-dark'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-ui-mid-dark)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-ui-medium</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-ui-medium'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-ui-medium)"
            ></td>
          </tr>

          <tr>
            <td>--kd-color-ui-light</td>
            <td>
              ${getComputedStyle(document.documentElement).getPropertyValue(
                '--kd-color-ui-light'
              )}
            </td>
            <td
              class="preview"
              style="background-color: var(--kd-color-ui-light)"
            ></td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
