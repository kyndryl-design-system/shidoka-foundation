import { html } from 'lit';
import { fn } from '@storybook/test';
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
  title: 'Title text goes here...',
  unnamed: 'Hello!! I am an expandable content',
  'on-toggle': fn(),
};

export const ExpandableTile = {
  args,
  render: (args) =>
    html`
      <kd-expandable-tile
        .expanded=${args.expanded}
        @on-toggle=${args['on-toggle']}
      >
        <span slot="title"> ${args.title}</span>
        ${args.unnamed}
      </kd-expandable-tile>
    `,
};
