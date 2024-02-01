import React from 'react';

import { Badges } from '../../lib';

const metadata = {
  title: 'Production/NotCategorized/Badges',
  component: Badges,
};

export default metadata;

const Template = ({ ...args }) => <Badges {...args} />;

export const BadgesDefault = Template.bind({});
BadgesDefault.args = {
  label: 'Blue',
};
export const BadgesPill = Template.bind({});
BadgesPill.args = {
  label: 'Cyan',
  color: 'cyan',
  shape: 'pill',
};
export const BadgesRectangle = Template.bind({});
BadgesRectangle.args = {
  label: 'Purple',
  color: 'purple',
  shape: 'rectangle',
};
export const BadgesDefaultIcon = Template.bind({});
BadgesDefaultIcon.args = {
  label: 'Red',
  color: 'red',
  shape: 'pill',
  icon: true,
};
export const BadgesLabelIcon = Template.bind({});
BadgesLabelIcon.args = {
  label: 'green',
  color: 'green',
  shape: 'rectangle',
  icon: true,
  iconLabel: '12',
};
