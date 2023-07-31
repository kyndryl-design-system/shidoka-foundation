import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

export default {
  title: 'Foundation/Typography',
};

export const Hero = {
  argTypes: {
    fontWeight: {
      options: ['ultralight', 'light', 'bold'],
      control: { type: 'select' },
      description: 'Change font weight.',
      table: {
        defaultValue: { summary: 'ultralight' },
      },
    },
  },
  args: {
    fontWeight: 'ultralight',
  },
  render: (args) => {
    const weightClasses = {
      'kd-type--weight-ultralight': args.fontWeight == 'ultralight',
      'kd-type--weight-light': args.fontWeight == 'light',
      'kd-type--weight-regular': args.fontWeight == 'regular',
      'kd-type--weight-medium': args.fontWeight == 'medium',
      'kd-type--weight-bold': args.fontWeight == 'bold',
    };

    return html`
      <div class="type-examples">
        <div class="kd-type--hero-01 ${classMap(weightClasses)}">Hero-01</div>
        <div class="kd-type--hero-02 ${classMap(weightClasses)}">Hero-02</div>
        <div class="kd-type--hero-03 ${classMap(weightClasses)}">Hero-03</div>
        <div class="kd-type--hero-04 ${classMap(weightClasses)}">Hero-04</div>
      </div>
    `;
  },
};

export const Display = {
  argTypes: {
    fontWeight: {
      options: ['ultralight', 'light'],
      control: { type: 'select' },
      description: 'Change font weight.',
      table: {
        defaultValue: { summary: 'ultralight' },
      },
    },
  },
  args: {
    fontWeight: 'ultralight',
  },
  render: (args) => {
    const weightClasses = {
      'kd-type--weight-ultralight': args.fontWeight == 'ultralight',
      'kd-type--weight-light': args.fontWeight == 'light',
    };

    return html`
      <div class="type-examples">
        <div class="kd-type--display-01 ${classMap(weightClasses)}">
          Display-01
        </div>
        <div class="kd-type--display-02 ${classMap(weightClasses)}">
          Display-02
        </div>
        <div class="kd-type--display-03 ${classMap(weightClasses)}">
          Display-03
        </div>
      </div>
    `;
  },
};

export const Headline = {
  argTypes: {
    fontWeight: {
      options: ['ultralight', 'light', 'regular'],
      control: { type: 'select' },
      description: 'Change font weight.',
      table: {
        defaultValue: { summary: '1-3=light, 4-8=regular' },
      },
    },
  },
  args: {
    fontWeight: 'light',
  },
  render: (args) => {
    const weightClasses = {
      'kd-type--weight-ultralight': args.fontWeight == 'ultralight',
      'kd-type--weight-light': args.fontWeight == 'light',
      'kd-type--weight-regular': args.fontWeight == 'regular',
    };

    return html`
      <div class="type-examples">
        <div class="kd-type--headline-01 ${classMap(weightClasses)}">
          Headline-01
        </div>
        <div class="kd-type--headline-02 ${classMap(weightClasses)}">
          Headline-02
        </div>
        <div class="kd-type--headline-03 ${classMap(weightClasses)}">
          Headline-03
        </div>
        <div class="kd-type--headline-04 ${classMap(weightClasses)}">
          Headline-04
        </div>
        <div class="kd-type--headline-05 ${classMap(weightClasses)}">
          Headline-05
        </div>
        <div class="kd-type--headline-06 ${classMap(weightClasses)}">
          Headline-06
        </div>
        <div class="kd-type--headline-07 ${classMap(weightClasses)}">
          Headline-07
        </div>
        <div class="kd-type--headline-08 ${classMap(weightClasses)}">
          Headline-08
        </div>
      </div>
    `;
  },
};

export const Body = {
  argTypes: {
    fontWeight: {
      options: ['light', 'regular', 'medium'],
      control: { type: 'select' },
      description: 'Change font weight.',
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
  },
  args: {
    fontWeight: 'regular',
  },
  render: (args) => {
    const weightClasses = {
      'kd-type--weight-light': args.fontWeight == 'light',
      'kd-type--weight-regular': args.fontWeight == 'regular',
      'kd-type--weight-medium': args.fontWeight == 'medium',
    };

    return html`
      <div class="type-examples">
        <div class="kd-type--body-01 ${classMap(weightClasses)}">Body-01</div>
        <div class="kd-type--body-02 ${classMap(weightClasses)}">Body-02</div>
      </div>
    `;
  },
};

export const Utility = {
  argTypes: {
    fontWeight: {
      options: ['light', 'regular', 'medium'],
      control: { type: 'select' },
      description: 'Change font weight.',
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
  },
  args: {
    fontWeight: 'regular',
  },
  render: (args) => {
    const weightClasses = {
      'kd-type--weight-light': args.fontWeight == 'light',
      'kd-type--weight-regular': args.fontWeight == 'regular',
      'kd-type--weight-medium': args.fontWeight == 'medium',
    };

    return html`
      <div class="type-examples">
        <div class="kd-type--ui-01 ${classMap(weightClasses)}">UI-01</div>
        <div class="kd-type--ui-02 ${classMap(weightClasses)}">UI-02</div>
        <div class="kd-type--ui-03 ${classMap(weightClasses)}">UI-03</div>
        <div class="kd-type--ui-04 ${classMap(weightClasses)}">UI-04</div>
      </div>
    `;
  },
};
