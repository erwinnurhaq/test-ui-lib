import React from 'react';

import { SkeletonButton } from '../../lib';

const metadata = {
  title: 'Production/Buttons/SkeletonButton',
  component: SkeletonButton,
};

export default metadata;

const Template = ({ ...args }) => <SkeletonButton {...args} />;

export const SkeletonButtonComponent = Template.bind({});
SkeletonButtonComponent.args = {};
SkeletonButtonComponent.storyName = 'Skeleton Button';

export const SkeletonButtonFluidComponent = Template.bind({});
SkeletonButtonFluidComponent.args = { isFluid: true };
SkeletonButtonFluidComponent.storyName = 'Fluid Skeleton Button';
