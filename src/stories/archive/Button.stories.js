import React from 'react';

import { Button } from '../../lib/archive';

const metadata = {
  title: 'Production/Archive/Button',
  component: Button,
  argTypes: {
    onClick: {
      control: false,
    },
  },
};

export default metadata;
// because we are using default value in onClick function
// the storybook cannot put action into it so that is why the log didn't come out
// after clicking the button
const Template = ({ ...args }) => <Button {...args}>{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
};
