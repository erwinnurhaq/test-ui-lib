import React from 'react';

import { AvatarImage } from '../../../lib';

const metadata = {
  title: 'Production/NotCategorized/Avatar/AvatarImage',
  component: AvatarImage,
};

export default metadata;

const Template = ({ ...args }) => <AvatarImage {...args} />;

export const AvatarImageDefault = Template.bind({});
AvatarImageDefault.args = {
  sourceImg: 'https://www.giantbomb.com/a/uploads/scale_medium/0/9320/535395-chocobo_baby.jpg',
};
