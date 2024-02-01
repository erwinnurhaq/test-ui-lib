import React from 'react';

import { Link } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/Link/Link',
  component: Link,
};

export default metadata;

const Template = ({ ...args }) => <Link {...args} />;

export const LinkNormal = Template.bind({});
LinkNormal.args = {
  children: 'Link example',
};

export const LinkNewTab = Template.bind({});
LinkNewTab.args = {
  children: 'Link example',
  target: '_blank',
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  children: 'Link example',
  isDisabled: true,
};
