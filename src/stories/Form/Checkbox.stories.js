import React from 'react';

import { Checkbox } from '../../lib';

const metadata = {
  title: 'Production/Form/Checkbox',
  component: Checkbox,
};

export default metadata;

const CheckboxWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState(args.checked || false);

  return (
    <Checkbox
      {...args}
      onChange={() => {
        setValue(prev => !prev);
      }}
      checked={value}
      isIndeterminate={args.isIndeterminate}
      isDisabled={args.isDisabled}
    />
  );
};

const Template = ({ ...args }) => <CheckboxWrapper {...args} />;

export const CheckboxOnly = Template.bind({});
CheckboxOnly.args = {};
export const CheckboxNormal = Template.bind({});
CheckboxNormal.args = {
  id: 'Checkbox-Test',
  label: 'Checkbox',
};
export const CheckboxIndeterminate = Template.bind({});
CheckboxIndeterminate.args = {
  id: 'Checkbox-Test',
  label: 'Checkbox',
  isIndeterminate: true,
  checked: true,
};
export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  id: 'Checkbox-Test',
  label: 'Checkbox',
  isDisabled: true,
};
export const CheckboxDisabledChecked = Template.bind({});
CheckboxDisabledChecked.args = {
  id: 'Checkbox-Test',
  label: 'Checkbox',
  isDisabled: true,
  checked: true,
};
export const CheckboxDisabledIndeterminate = Template.bind({});
CheckboxDisabledIndeterminate.args = {
  id: 'Checkbox-Test',
  label: 'Checkbox',
  isDisabled: true,
  isIndeterminate: true,
  checked: true,
};
