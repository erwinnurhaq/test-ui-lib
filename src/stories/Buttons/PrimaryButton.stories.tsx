import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { FiPlus } from 'react-icons/fi';
import { RiLoader4Fill } from 'react-icons/ri';

import { PrimaryButton } from '../../lib';
import './styles.css';

const meta = {
  title: 'Production/Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PrimaryButton>;

export default meta;

/**
 * For Story Object type:
 * type Story = StoryObj<typeof meta>;
 * export const PrimaryButtonStory: Story = {
 *   name: 'Primary Button'
 *   args: {},
 *   render: Template,
 * };
 */

/**
 * For Story Template Function type: (old approach)
 * const Template: Story = ({ ...args }) => <PrimaryButton {...args}/>;
 * export const PrimaryButtonComponent: Story = Template.bind({});
 * PrimaryButtonComponent.args = {};
 * PrimaryButtonComponent.storyName = 'Primary Button';
 */

type Story = StoryFn<typeof PrimaryButton>;

const Template: Story = ({ ...args }) => <PrimaryButton {...args}>Primary Button</PrimaryButton>;

const TemplateWithIcon: Story = ({ ...args }) => (
  <PrimaryButton {...args}>
    Primary Button <FiPlus className="psui-ml-2 psui-h-4" />
  </PrimaryButton>
);

const TemplateWithLoader: Story = ({ ...args }) => (
  <PrimaryButton {...args}>
    Primary Button <RiLoader4Fill className="psui-text-xl psui-ml-2 psui-animate-spin" />
  </PrimaryButton>
);

const TemplateWithLoaderAndIcon: Story = ({ ...args }) => (
  <PrimaryButton {...args}>
    <RiLoader4Fill className="psui-text-xl psui-mx-2 psui-animate-spin" /> Primary Button{' '}
    <FiPlus className="psui-ml-2 psui-h-4" />
  </PrimaryButton>
);

const TemplateWithRoundedButton: Story = ({ ...args }) => (
  <PrimaryButton {...args} className="storybook-primary-button-rounded">
    Primary Button
  </PrimaryButton>
);

const TemplateWithRoundedButtonAndIcon: Story = ({ ...args }) => (
  <PrimaryButton {...args} className="storybook-primary-button-rounded">
    Primary Button <FiPlus className="psui-ml-2 psui-h-4" />
  </PrimaryButton>
);

const TemplateWithRoundedButtonAndLoader: Story = ({ ...args }) => (
  <PrimaryButton {...args} className="storybook-primary-button-rounded">
    Primary Button <RiLoader4Fill className="psui-text-xl psui-ml-2 psui-animate-spin" />
  </PrimaryButton>
);

const TemplateWithRoundedButtonAndLoaderAndIcon: Story = ({ ...args }) => (
  <PrimaryButton {...args} className="storybook-primary-button-rounded">
    <RiLoader4Fill className="psui-text-xl psui-mx-2 psui-animate-spin" /> Primary Button{' '}
    <FiPlus className="psui-ml-2 psui-h-4" />
  </PrimaryButton>
);

export const PrimaryButtonComponent: Story = Template.bind({});
PrimaryButtonComponent.args = {};
PrimaryButtonComponent.storyName = 'Primary Button';

export const PrimaryButtonDisabledComponent: Story = Template.bind({});
PrimaryButtonDisabledComponent.args = {
  isDisabled: true,
};
PrimaryButtonDisabledComponent.storyName = 'Primary Button Disabled';

export const PrimaryButtonFluidComponent: Story = Template.bind({});
PrimaryButtonFluidComponent.args = { isFluid: true };
PrimaryButtonFluidComponent.storyName = 'Primary Button Fluid';

export const PrimaryButtonSmallComponent: Story = Template.bind({});
PrimaryButtonSmallComponent.args = { isSmall: true };
PrimaryButtonSmallComponent.storyName = 'Small Primary Button';

export const PrimaryButtonSmallDisabledComponent: Story = Template.bind({});
PrimaryButtonSmallDisabledComponent.args = {
  isSmall: true,
  isDisabled: true,
};
PrimaryButtonSmallDisabledComponent.storyName = 'Small Primary Button Disabled';

export const PrimaryButtonWithIcon: Story = TemplateWithIcon.bind({});
PrimaryButtonWithIcon.args = {};
PrimaryButtonWithIcon.storyName = 'Primary Button With Icon';

export const PrimaryButtonWithLoading: Story = TemplateWithLoader.bind({});
PrimaryButtonWithLoading.args = {};
PrimaryButtonWithLoading.storyName = 'Primary Button With Loading';

export const PrimaryButtonWithLoadingAndIcon: Story = TemplateWithLoaderAndIcon.bind({});
PrimaryButtonWithLoadingAndIcon.args = {};
PrimaryButtonWithLoadingAndIcon.storyName = 'Primary Button With Loading And Icon';

export const PrimaryButtonDangerComponent: Story = Template.bind({});
PrimaryButtonDangerComponent.args = { colorType: 'danger' };
PrimaryButtonDangerComponent.storyName = 'Primary Button Danger';

export const PrimaryButtonDangerWithIcon: Story = TemplateWithIcon.bind({});
PrimaryButtonDangerWithIcon.args = { colorType: 'danger' };
PrimaryButtonDangerWithIcon.storyName = 'Primary Button Danger With Icon';

export const PrimaryButtonDangerWithLoading: Story = TemplateWithLoader.bind({});
PrimaryButtonDangerWithLoading.args = { colorType: 'danger' };
PrimaryButtonDangerWithLoading.storyName = 'Primary Button Danger With Loading';

export const PrimaryButtonDangerWithLoadingAndIcon: Story = TemplateWithLoaderAndIcon.bind({});
PrimaryButtonDangerWithLoadingAndIcon.args = { colorType: 'danger' };
PrimaryButtonDangerWithLoadingAndIcon.storyName = 'Primary Button Danger With Loading And Icon';

export const PrimaryButtonRoundedComponent: Story = TemplateWithRoundedButton.bind({});
PrimaryButtonRoundedComponent.args = {};
PrimaryButtonRoundedComponent.storyName = 'Primary Button Rounded';

export const PrimaryButtonRoundedIconComponent: Story = TemplateWithRoundedButtonAndIcon.bind({});
PrimaryButtonRoundedIconComponent.args = {};
PrimaryButtonRoundedIconComponent.storyName = 'Primary Button Rounded With Icon';

export const PrimaryButtonRoundedLoaderComponent: Story = TemplateWithRoundedButtonAndLoader.bind(
  {}
);
PrimaryButtonRoundedLoaderComponent.args = {};
PrimaryButtonRoundedLoaderComponent.storyName = 'Primary Button Rounded With Loader';

export const PrimaryButtonRoundedLoaderIconComponent: Story =
  TemplateWithRoundedButtonAndLoaderAndIcon.bind({});
PrimaryButtonRoundedLoaderIconComponent.args = {};
PrimaryButtonRoundedLoaderIconComponent.storyName = 'Primary Button Rounded With Loader And Icon';
