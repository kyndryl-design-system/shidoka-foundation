import { html } from 'lit';
import './Motion.scss?global';

export default {
  title: 'Foundation/Motion',
};

export const Transition = {
  argTypes: {
    transitionPropsVar: {
      options: {},
      description: 'List of css properties to apply the transition.',
      table: {
        type: { summary: 'list' },
      },
    },
    duration: {
      options: [
        'var(--kd-anim-duration-short)',
        'var(--kd-anim-duration-med)',
        'var(--kd-anim-duration-long)',
        'var(--kd-anim-duration-x-long)',
      ],
      control: { type: 'select' },
      description:
        'How long a transition should take to complete one cycle. Use CSS variables from design guidelines for uniformity or customize as needed.',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'var(--kd-anim-duration-short)' },
      },
    },
    easing: {
      options: [
        'var(--kd-anim-easing-linear)',
        'var(--kd-anim-easing-in)',
        'var(--kd-anim-easing-out)',
        'var(--kd-anim-easing-in-out)',
      ],
      control: { type: 'select' },
      description:
        'Specifies the speed curve of a motion. Use CSS variables from design guidelines for uniformity or customize as needed.',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'var(--kd-anim-easing-in)' },
      },
    },
  },
  args: {
    transitionPropsVar: 'background-color, border',
  },

  render: (args) => {
    return html`
      <div class="transition" style="display:inline;padding:1rem">
        Component
      </div>
    `;
  },
};
