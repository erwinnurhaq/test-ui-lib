import React from 'react';

import { SmallSelect } from '../../../lib';

const metadata = {
  title: 'Production/Form/Select/SmallSelect',
  component: SmallSelect,
};

export default metadata;

const defaultOptions = {
  tooltipContent: '',
  tooltipPosition: 'top',
  tooltipClassName: '',
  autoWidth: false,
  fluid: false,
  disabled: false,
  required: false,
  skeleton: false,
};

const SmallSelectWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState('1');

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
      <SmallSelect {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="1">Option One</option>
        <option value="2">Option Two</option>
        <option value="3">Option Three</option>
      </SmallSelect>
    </div>
  );
};

const SmallSelectWrapperRequired = ({ ...args }) => {
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
      <SmallSelect {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="">Select your option</option>
        <option value="1">Option One</option>
        <option value="2">Option Two</option>
        <option value="3">Option Three</option>
      </SmallSelect>
      <button style={{ marginLeft: '40px', width: '150px', alignSelf: 'center' }} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

const Template = ({ ...args }) => <SmallSelectWrapper {...args} />;
const TemplateRequired = ({ ...args }) => <SmallSelectWrapperRequired {...args} />;

export const SmallSelectComponent = Template.bind({});
SmallSelectComponent.args = { label: 'Select label', options: defaultOptions };

export const SmallSelectDisabledComponent = Template.bind({});
SmallSelectDisabledComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, disabled: true },
};

export const SmallSelectWithTooltipComponent = Template.bind({});
SmallSelectWithTooltipComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const SmallSelectRequiredComponent = TemplateRequired.bind({});
SmallSelectRequiredComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, required: true },
};

export const SmallSelectSkeletonComponent = Template.bind({});
SmallSelectSkeletonComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, skeleton: true },
};

export const SmallSelectNoLabelComponent = Template.bind({});
SmallSelectNoLabelComponent.args = { options: defaultOptions };

export const SmallSelectNoLabelWithTooltipComponent = Template.bind({});
SmallSelectNoLabelWithTooltipComponent.args = {
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const SmallSelectFluidComponent = Template.bind({});
SmallSelectFluidComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, fluid: true },
};

export const SmallSelectAutoWidthComponent = Template.bind({});
SmallSelectAutoWidthComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, autoWidth: true },
};
