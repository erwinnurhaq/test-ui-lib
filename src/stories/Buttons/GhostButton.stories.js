import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { RiLoader4Fill } from 'react-icons/ri';

import { GhostButton } from '../../lib';

const metadata = {
  title: 'Production/Buttons/GhostButton',
  component: GhostButton,
};

export default metadata;

const Template = ({ ...args }) => <GhostButton {...args}>Ghost Button</GhostButton>;

const TemplateWithIcon = ({ ...args }) => (
  <GhostButton {...args}>
    Ghost Button <FiPlus className="psui-ml-2 psui-h-4" />
  </GhostButton>
);

const TemplateWithLoader = ({ ...args }) => (
  <GhostButton {...args}>
    Ghost Button <RiLoader4Fill className="psui-text-xl psui-ml-2 psui-animate-spin" />
  </GhostButton>
);

const TemplateWithLoaderAndIcon = ({ ...args }) => (
  <GhostButton {...args}>
    <RiLoader4Fill className="psui-text-xl psui-mx-2 psui-animate-spin" /> Ghost Button{' '}
    <FiPlus className="psui-ml-2 psui-h-4" />
  </GhostButton>
);

export const GhostButtonComponent = Template.bind({});
GhostButtonComponent.args = {};
GhostButtonComponent.storyName = 'Ghost Button';

export const GhostButtonFluidComponent = Template.bind({});
GhostButtonFluidComponent.args = {
  isFluid: true,
};
GhostButtonFluidComponent.storyName = 'Fluid Ghost Button';

export const GhostButtonDisabledComponent = Template.bind({});
GhostButtonDisabledComponent.args = {
  isDisabled: true,
};
GhostButtonDisabledComponent.storyName = 'Disabled Ghost Button';

export const GhostButtonSmallComponent = Template.bind({});
GhostButtonSmallComponent.args = {
  isSmall: true,
};
GhostButtonSmallComponent.storyName = 'Small Ghost Button';

export const GhostButtonSmallDisabledComponent = Template.bind({});
GhostButtonSmallDisabledComponent.args = {
  isSmall: true,
  isDisabled: true,
};
GhostButtonSmallDisabledComponent.storyName = 'Small Ghost Button Disabled';

export const GhostButtonWithIcon = TemplateWithIcon.bind({});
GhostButtonWithIcon.args = {};
GhostButtonWithIcon.storyName = 'Ghost Button With Icon';

export const GhostButtonWithLoading = TemplateWithLoader.bind({});
GhostButtonWithLoading.args = {};
GhostButtonWithLoading.storyName = 'Ghost Button With Loading';

export const GhostButtonWithLoadingAndIcon = TemplateWithLoaderAndIcon.bind({});
GhostButtonWithLoadingAndIcon.args = {};
GhostButtonWithLoadingAndIcon.storyName = 'Ghost Button With Loading And Icon';
