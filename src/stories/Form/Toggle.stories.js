import React, { useEffect } from 'react';

import { Toggle } from '../../lib';

const metadata = {
  title: 'Production/Form/Toggle',
  component: Toggle,
};

export default metadata;

const ToggleWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState(args.checked || false);

  useEffect(() => {
    setValue(args.checked);
  }, [args.checked]);

  return (
    <Toggle
      {...args}
      onChange={() => setValue(prev => !prev)}
      checked={value}
      isDisabled={args.isDisabled}
    />
  );
};

const Template = ({ ...args }) => <ToggleWrapper {...args} />;

export const ToggleNormal = Template.bind({});
ToggleNormal.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
};
export const ToggleDisabled = Template.bind({});
ToggleDisabled.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
  isDisabled: true,
};
export const ToggleDisabledChecked = Template.bind({});
ToggleDisabledChecked.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
  isDisabled: true,
  checked: true,
};
export const ToggleYellow = Template.bind({});
ToggleYellow.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
  colorType: 'yellow',
};
export const ToggleLabelInside = Template.bind({});
ToggleLabelInside.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
  isLabelInside: true,
};
export const ToggleYellowLabelInside = Template.bind({});
ToggleYellowLabelInside.args = {
  id: 'Toggle-Test',
  label: 'Toggle',
  colorType: 'yellow',
  isLabelInside: true,
};
