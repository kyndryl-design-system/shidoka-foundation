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
  primaryText: 'Title text goes here...',
};

export const ExpandableTile = {
  args,
  render: (args) =>
    html`
      <kd-expandable-tile
        .expanded=${args.expanded}
        @on-toggle=${(e) => action(e.type)(e)}
      >
        <span slot="title"> ${args.primaryText}</span>
        Hello!! I am an expandable content
      </kd-expandable-tile>
    `,
};
