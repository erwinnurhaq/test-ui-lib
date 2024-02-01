import React from 'react';

import { TextInput } from '../../lib/archive';

const metadata = {
  title: 'Production/Archive/TextInput',
  component: TextInput,
  argTypes: {
    onChange: {
      control: false,
    },
  },
};

export default metadata;

const Template = ({ ...args }) => <TextInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  value: '123',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  value: '123',
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  value: '123',
  isDisabled: true,
};
