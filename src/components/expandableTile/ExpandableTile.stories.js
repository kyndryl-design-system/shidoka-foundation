import { html } from 'lit';
import './index';

export default {
  title: 'Components/Expandale Tile',
  component: 'kd-expandable-tile',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const ExpandableTile = {
  render: () =>
    html`
      <kd-expandable-tile
        >Hello!! I am an expandable content
      </kd-expandable-tile>
    `,
};
