import { html } from 'lit';
import './index';

export default {
  title: 'Components/Lifecycle Lit Component',
  component: 'kd-lifecycle',
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
};

export const Lifecycle = {
  render: () => html` <kd-lifecycle></kd-lifecycle> `,
};
