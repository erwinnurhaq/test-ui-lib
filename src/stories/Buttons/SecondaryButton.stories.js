import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { RiLoader4Fill } from 'react-icons/ri';

import { SecondaryButton } from '../../lib';
import './styles.css';

const metadata = {
  title: 'Production/Buttons/SecondaryButton',
  component: SecondaryButton,
};

export default metadata;

const Template = ({ ...args }) => <SecondaryButton {...args}>Secondary Button</SecondaryButton>;

const TemplateWithIcon = ({ ...args }) => (
  <SecondaryButton {...args}>
    Secondary Button <FiPlus className="psui-ml-2 psui-h-4" />
  </SecondaryButton>
);

const TemplateWithLoader = ({ ...args }) => (
  <SecondaryButton {...args}>
    Secondary Button <RiLoader4Fill className="psui-text-xl psui-ml-2 psui-animate-spin" />
  </SecondaryButton>
);

const TemplateWithLoaderAndIcon = ({ ...args }) => (
  <SecondaryButton {...args}>
    <RiLoader4Fill className="psui-text-xl psui-mx-2 psui-animate-spin" /> Secondary Button{' '}
    <FiPlus className="psui-ml-2 psui-h-4" />
  </SecondaryButton>
);

const TemplateWithRoundedButton = ({ ...args }) => (
  <SecondaryButton {...args} className="storybook-secondary-button-rounded">
    Secondary Button
  </SecondaryButton>
);

const TemplateWithRoundedButtonAndIcon = ({ ...args }) => (
  <SecondaryButton {...args} className="storybook-secondary-button-rounded">
    Secondary Button <FiPlus className="psui-ml-2 psui-h-4" />
  </SecondaryButton>
);

const TemplateWithRoundedButtonAndLoader = ({ ...args }) => (
  <SecondaryButton {...args} className="storybook-secondary-button-rounded">
    Secondary Button <RiLoader4Fill className="psui-text-xl psui-ml-2 psui-animate-spin" />
  </SecondaryButton>
);

const TemplateWithRoundedButtonAndLoaderAndIcon = ({ ...args }) => (
  <SecondaryButton {...args} className="storybook-secondary-button-rounded">
    <RiLoader4Fill className="psui-text-xl psui-mx-2 psui-animate-spin" /> Secondary Button{' '}
    <FiPlus className="psui-ml-2 psui-h-4" />
  </SecondaryButton>
);

export const SecondaryButtonComponent = Template.bind({});
SecondaryButtonComponent.args = {};
SecondaryButtonComponent.storyName = 'Secondary Button';

export const SecondaryButtonFluidComponent = Template.bind({});
SecondaryButtonFluidComponent.args = { isFluid: true };
SecondaryButtonFluidComponent.storyName = 'Secondary Button Fluid';

export const SecondaryButtonDisabledComponent = Template.bind({});
SecondaryButtonDisabledComponent.args = {
  isDisabled: true,
};
SecondaryButtonDisabledComponent.storyName = 'Disabled Secondary Button';

export const SecondaryButtonSmallComponent = Template.bind({});
SecondaryButtonSmallComponent.args = {
  isSmall: true,
};
SecondaryButtonSmallComponent.storyName = 'Small Secondary Button';

export const SecondaryButtonSmallDisabledComponent = Template.bind({});
SecondaryButtonSmallDisabledComponent.args = {
  isSmall: true,
  isDisabled: true,
};
SecondaryButtonSmallDisabledComponent.storyName = 'Small Secondary Button Disabled';

export const SecondaryButtonWithIcon = TemplateWithIcon.bind({});
SecondaryButtonWithIcon.args = {};
SecondaryButtonWithIcon.storyName = 'Secondary Button With Icon';

export const SecondaryButtonWithLoading = TemplateWithLoader.bind({});
SecondaryButtonWithLoading.args = {};
SecondaryButtonWithLoading.storyName = 'Secondary Button With Loading';

export const SecondaryButtonWithLoadingAndIcon = TemplateWithLoaderAndIcon.bind({});
SecondaryButtonWithLoadingAndIcon.args = {};
SecondaryButtonWithLoadingAndIcon.storyName = 'Secondary Button With Loading And Icon';

export const SecondaryButtonRoundedComponent = TemplateWithRoundedButton.bind({});
SecondaryButtonRoundedComponent.args = {};
SecondaryButtonRoundedComponent.storyName = 'Secondary Button Rounded';

export const SecondaryButtonRoundedIconComponent = TemplateWithRoundedButtonAndIcon.bind({});
SecondaryButtonRoundedIconComponent.args = {};
SecondaryButtonRoundedIconComponent.storyName = 'Secondary Button Rounded With Icon';

export const SecondaryButtonRoundedLoaderComponent = TemplateWithRoundedButtonAndLoader.bind({});
SecondaryButtonRoundedLoaderComponent.args = {};
SecondaryButtonRoundedLoaderComponent.storyName = 'Secondary Button Rounded With Loader';

export const SecondaryButtonRoundedLoaderIconComponent = TemplateWithRoundedButtonAndLoaderAndIcon.bind(
  {}
);
SecondaryButtonRoundedLoaderIconComponent.args = {};
SecondaryButtonRoundedLoaderIconComponent.storyName =
  'Secondary Button Rounded With Loader And Icon';
