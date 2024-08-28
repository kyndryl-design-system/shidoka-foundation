import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'Components/Practise/Expandale Tile',
  component: 'kd-expandable-tile',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

const args = {
  expanded: false,
  primaryText: 'Hello!! I am main content',
};

export const ExpandableTile = {
  args,
  render: (args) =>
    html`
      <kd-expandable-tile
        .expanded=${args.expanded}
        primaryText=${args.primaryText}
        @on-toggle=${(e) => action(e.type)(e)}
      >
        Hello!! I am an expandable content
      </kd-expandable-tile>
    `,
};
