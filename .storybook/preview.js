import DocumentationTemplate from './DocumentationTemplate.mdx';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

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
  },
};

setCustomElementsManifest(customElements);
