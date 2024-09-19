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
      options: {},
      description:
        'How long a transition should take to complete one cycle. Use CSS variables from design guidelines for uniformity or customize as needed.',
      table: {
        type: { summary: 'css variable / custom duration' },
        defaultValue: { summary: 'var(--kd-anim-duration-short)' },
      },
    },
    easing: {
      options: {},
      description:
        'Specifies the speed curve of a motion. Use CSS variables from design guidelines for uniformity or customize as needed.',
      table: {
        type: { summary: 'css variable / custom easing' },
        defaultValue: { summary: 'var(--kd-anim-easing-in)' },
      },
    },
  },

  render: (args) => {
    return html`
      <style>
        .transition--1 {
          @include motion.transition(
            $transitionPropsVar,
            var(--kd-anim-duration-long),
            var(--kd-anim-easing-in)
          );
          &:hover {
            border: 2px solid var(--kd-color-border-default);
            background-color: var(--kd-color-background-ui-subtle);
          }
        }

        .transition-2 {
          @include motion.transition(color, 600ms);
          &:hover {
            color: red;
          }
        }

        .transition-3 {
          @include motion.transition(transform);
          &:hover {
            transform: scaleY(1.2);
          }
        }

        .transition-4 {
          @include motion.transition(
            opacity,
            $easing: var(--kd-anim-easing-in-out)
          );

          &:hover {
            opacity: 0.5;
          }
        }
      </style>

      <div class="transition-examples">
        <div class="transition-1">
          <div class="kd-type--headline-07">
            transitionPropsVar, duration , easing
          </div>
          <br />
          <p>$transitionPropsVar: background-color, border;</p>
          <br />
          <p>
            @include motion.transition( $transitionPropsVar,
            var(--kd-anim-duration-long), var(--kd-anim-easing-in) );
          </p>
        </div>
        <div class="transition-2">
          <div class="kd-type--headline-07">transitionPropsVar, duration</div>
          <br />
          @include motion.transition(color, 600ms);
        </div>
        <div class="transition-3">
          <div class="kd-type--headline-07">transitionPropsVar</div>
          <br />
          @include motion.transition(transform);
        </div>
        <div class="transition-4">
          <div class="kd-type--headline-07">transitionPropsVar, easing</div>
          <br />
          @include motion.transition(transform, $easing:
          var(--kd-anim-easing-in-out) );
        </div>
      </div>
    `;
  },
};
