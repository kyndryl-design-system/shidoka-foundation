import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCustomElementsManifest } from '@storybook/web-components';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
// import customElements from '../custom-elements.json';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { BREAKPOINT_VIEWPORTS } from '../src/common/helpers/breakpoints';

import '../src/scss/root.scss?global';
import '../src/scss/utility/index.scss?global';

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
    },
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        ...BREAKPOINT_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
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
