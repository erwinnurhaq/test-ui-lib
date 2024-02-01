import React from 'react';

import { Avatar } from '../../../lib';

const metadata = {
  title: 'Production/NotCategorized/Avatar/AvatarDefault',
  component: Avatar,
};

export default metadata;

const Template = ({ ...args }) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {};
