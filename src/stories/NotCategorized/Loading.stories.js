import React from 'react';

import { Loading } from '../../lib';

const metadata = {
  title: 'Production/NotCategorized/Loading',
  component: Loading,
};

export default metadata;

const Template = ({ ...args }) => <Loading {...args} />;

export const LoadingNormal = Template.bind({});
LoadingNormal.args = {
  isShow: true,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
  isShow: true,
  type: 'small',
};

export const LoadingNormalWithText = Template.bind({});
LoadingNormalWithText.args = {
  isShow: true,
  text: 'Loading',
};

export const LoadingSmallWithText = Template.bind({});
LoadingSmallWithText.args = {
  isShow: true,
  type: 'small',
  text: 'Loading',
};

export const LoadingNormalWithErrorMessage = Template.bind({});
LoadingNormalWithErrorMessage.args = {
  isShow: true,
  isError: true,
  text: 'Loading',
};

export const LoadingSmallWithErrorMessage = Template.bind({});
LoadingSmallWithErrorMessage.args = {
  isShow: true,
  isError: true,
  type: 'small',
  text: 'Loading',
};
