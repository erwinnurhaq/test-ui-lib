import React from 'react';

import { Loader } from '../../lib/archive';

const metadata = {
  title: 'Production/Archive/Loader',
  component: Loader,
  // we cannot use docs for loader because Loader will fill the whole page
  // on top of the docs
  // so we disabled it instead and just use expanded controls for the props info
  parameters: {
    docs: {
      page: null,
    },
    controls: { expanded: true },
  },
};

export default metadata;

const Template = ({ ...args }) => <Loader {...args} />;

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {
  isShow: true,
};
LoaderComponent.storyName = 'Loader';

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  isShow: true,
  errorMessage: 'error',
};
