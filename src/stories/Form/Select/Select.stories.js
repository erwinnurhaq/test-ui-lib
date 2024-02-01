import React from 'react';

import { Select } from '../../../lib';

const metadata = {
  title: 'Production/Form/Select/Select',
  component: Select,
};

export default metadata;

const defaultOptions = {
  tooltipContent: '',
  tooltipPosition: 'top',
  tooltipClassName: '',
  autoWidth: false,
  hideLabel: false,
  hideInfo: false,
  fluid: false,
  disabled: false,
  required: false,
  skeleton: false,
  requiredText: 'Required field',
};

const SelectWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState('');

  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Select {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="">Select your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </div>
  );
};

const SelectWrapperRequired = ({ ...args }) => {
  const [value, setValue] = React.useState('');

  return (
    <form
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onSubmit={e => {
        e.preventDefault();
        window.alert(`Submit ${value}`);
      }}
    >
      <Select {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="">Select your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <button style={{ marginLeft: '40px', width: '150px', alignSelf: 'center' }} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

const Template = ({ ...args }) => <SelectWrapper {...args} />;
const TemplateRequired = ({ ...args }) => <SelectWrapperRequired {...args} />;

export const SelectComponent = Template.bind({});
SelectComponent.args = { label: 'Select label', options: defaultOptions };

export const SelectDisabledComponent = Template.bind({});
SelectDisabledComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, disabled: true },
};

export const SelectWithTooltipComponent = Template.bind({});
SelectWithTooltipComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const SelectRequiredComponent = TemplateRequired.bind({});
SelectRequiredComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, required: true },
};

export const SelectSkeletonComponent = Template.bind({});
SelectSkeletonComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, skeleton: true },
};

export const SelectNoLabelComponent = Template.bind({});
SelectNoLabelComponent.args = { options: defaultOptions };

export const SelectNoLabelDisabledComponent = Template.bind({});
SelectNoLabelDisabledComponent.args = {
  options: { ...defaultOptions, disabled: true },
};

export const SelectNoLabelWithTooltipComponent = Template.bind({});
SelectNoLabelWithTooltipComponent.args = {
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const SelectNoLabelRequiredComponent = TemplateRequired.bind({});
SelectNoLabelRequiredComponent.args = {
  options: { ...defaultOptions, required: true },
};

export const SelectNoLabelSkeletonComponent = Template.bind({});
SelectNoLabelSkeletonComponent.args = {
  options: { ...defaultOptions, skeleton: true },
};

export const SelectFluidComponent = Template.bind({});
SelectFluidComponent.args = { label: 'Select label', options: { ...defaultOptions, fluid: true } };

export const SelectAutoWidthComponent = Template.bind({});
SelectAutoWidthComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, autoWidth: true },
};
