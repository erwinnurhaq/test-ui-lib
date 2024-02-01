import React from 'react';

import { AvatarInitial } from '../../../lib';

const metadata = {
  title: 'Production/NotCategorized/Avatar/AvatarInitial',
  component: AvatarInitial,
};

export default metadata;

const Template = ({ ...args }) => <AvatarInitial {...args} />;

export const AvatarInitialDefault = Template.bind({});
AvatarInitialDefault.args = {
  initial: 'Jhon doe',
};

export const AvatarInitialCustom = Template.bind({});
const handleCustomInitial = name => name.slice(0, 1);
AvatarInitialCustom.args = {
  customInitial: handleCustomInitial('Jhon doe'),
};
