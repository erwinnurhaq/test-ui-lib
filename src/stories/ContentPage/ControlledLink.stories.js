import React from 'react';

import { ControlledLink } from '../../lib';

const metadata = {
  title: 'Production/ContentPage/Link/ControlledLink',
  component: ControlledLink,
};

export default metadata;

const Template = ({ ...args }) => <ControlledLink {...args} />;

export const ControlledLinkNormal = Template.bind({});
ControlledLinkNormal.args = {
  children: 'Link example',
};

export const ControlledLinkDisabled = Template.bind({});
ControlledLinkDisabled.args = {
  children: 'Link example',
  isDisabled: true,
};
