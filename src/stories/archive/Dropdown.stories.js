import React from 'react';

import { Dropdown } from '../../lib/archive';

const metadata = {
  title: 'Production/Archive/Dropdown',
  component: Dropdown,
  argTypes: {
    onChange: {
      control: false,
    },
    children: {
      control: false,
    },
  },
};

export default metadata;

const Template = ({ ...args }) => <Dropdown {...args}>{args.children()}</Dropdown>;

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {
  value: '0',
  children: () => (
    <React.Fragment>
      <option value="0">Select Option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </React.Fragment>
  ),
};

DropdownComponent.storyName = 'Dropdown';

export const DropdownDisabled = Template.bind({});
DropdownDisabled.args = {
  value: '0',
  isDisabled: true,
  children: () => (
    <React.Fragment>
      <option value="0">Select Option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </React.Fragment>
  ),
};
