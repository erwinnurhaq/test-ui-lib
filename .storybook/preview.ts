import type { Preview } from '@storybook/react';
import '../src/lib/styles/resets.css';
import '../src/lib/styles/archive.css';
import '../src/lib/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
