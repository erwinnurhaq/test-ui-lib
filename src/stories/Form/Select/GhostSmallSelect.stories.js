import React from 'react';

import { GhostSmallSelect } from '../../../lib';

const metadata = {
  title: 'Production/Form/Select/GhostSmallSelect',
  component: GhostSmallSelect,
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

const GhostSmallSelectWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState('10');

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
      <GhostSmallSelect {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="10">10 GB</option>
        <option value="20">20 GB</option>
        <option value="30">30 GB</option>
        <option value="40">40 GB</option>
        <option value="50">50 GB</option>
        <option value="100">100 GB</option>
        <option value="200">200 GB</option>
        <option value="XXXX">XXXX GB</option>
      </GhostSmallSelect>
    </div>
  );
};

const GhostSmallSelectWrapperRequired = ({ ...args }) => {
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
      <GhostSmallSelect {...args} value={value} onChange={e => setValue(e.target.value)}>
        <option value="">Select your option</option>
        <option value="10">10 GB</option>
        <option value="20">20 GB</option>
        <option value="30">30 GB</option>
        <option value="40">40 GB</option>
        <option value="50">50 GB</option>
        <option value="100">100 GB</option>
        <option value="200">200 GB</option>
        <option value="XXXX">XXXX GB</option>
      </GhostSmallSelect>
      <button style={{ marginLeft: '40px', width: '150px', alignSelf: 'center' }} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

const Template = ({ ...args }) => <GhostSmallSelectWrapper {...args} />;
const TemplateRequired = ({ ...args }) => <GhostSmallSelectWrapperRequired {...args} />;

export const GhostSmallSelectComponent = Template.bind({});
GhostSmallSelectComponent.args = { label: 'Select label', options: defaultOptions };

export const GhostSmallSelectDisabledComponent = Template.bind({});
GhostSmallSelectDisabledComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, disabled: true },
};

export const GhostSmallSelectWithTooltipComponent = Template.bind({});
GhostSmallSelectWithTooltipComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const GhostSmallSelectRequiredComponent = TemplateRequired.bind({});
GhostSmallSelectRequiredComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, required: true },
};

export const GhostSmallSelectSkeletonComponent = Template.bind({});
GhostSmallSelectSkeletonComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, skeleton: true },
};

export const GhostSmallSelectNoLabelComponent = Template.bind({});
GhostSmallSelectNoLabelComponent.args = {};

export const GhostSmallSelectNoLabelWithTooltipComponent = Template.bind({});
GhostSmallSelectNoLabelWithTooltipComponent.args = {
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const GhostSmallSelectFluidComponent = Template.bind({});
GhostSmallSelectFluidComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, fluid: true },
};

export const GhostSmallSelectAutoWidthComponent = Template.bind({});
GhostSmallSelectAutoWidthComponent.args = {
  label: 'Select label',
  options: { ...defaultOptions, autoWidth: true },
};
