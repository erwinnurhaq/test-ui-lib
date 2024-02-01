import React from 'react';

import { Radio } from '../../lib';

const metadata = {
  title: 'Production/Form/Radio',
  component: Radio,
};

export default metadata;

const RadioWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState(args.checked || false);

  return <Radio {...args} onChange={() => setValue(prev => !prev)} checked={value} />;
};

const Template = ({ ...args }) => <RadioWrapper {...args} />;

export const RadioNormal = Template.bind({});
RadioNormal.args = {
  id: 'Radio-Test',
  label: 'Radio',
};
export const RadioDisabled = Template.bind({});
RadioDisabled.args = {
  id: 'Radio-Test',
  label: 'Radio',
  isDisabled: true,
};
export const RadioDisabledChecked = Template.bind({});
RadioDisabledChecked.args = {
  id: 'Radio-Test',
  label: 'Radio',
  isDisabled: true,
  checked: true,
};

export const RadioYellow = Template.bind({});
RadioYellow.args = {
  id: 'Radio-Test',
  label: 'Radio',
  colorType: 'yellow',
};
