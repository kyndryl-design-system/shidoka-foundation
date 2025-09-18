import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCustomElementsManifest } from '@storybook/web-components-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
// import customElements from '../custom-elements.json';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { BREAKPOINT_VIEWPORTS } from '../src/common/helpers/breakpoints';

import '../src/scss/root.scss';
import '../src/scss/utility/index.scss';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Welcome'],
      },
    },

    docs: {
      page: DocumentationTemplate,
      codePanel: true,
      source: {
        // excludeDecorators: true,
        type: 'code',
      },
    },

    backgrounds: { disable: true },

    viewport: {
      viewports: {
        ...BREAKPOINT_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
        auto: 'light dark',
      },
      defaultTheme: 'auto',
      parentSelector: 'head meta[name="color-scheme"]',
      attributeName: 'content',
    }),
  ],

  tags: ['autodocs'],
};

// setCustomElementsManifest(customElements);
