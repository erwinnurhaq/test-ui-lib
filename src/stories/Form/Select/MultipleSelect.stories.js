import React from 'react';

import { MultipleSelect } from '../../../lib';

const metadata = {
  title: 'Production/Form/Select/MultipleSelect',
  component: MultipleSelect,
};

export default metadata;

const mockData = [
  { value: 1, name: 'Option 1' },
  { value: 2, name: 'Option 2' },
  { value: 3, name: 'Option 3' },
  { value: 4, name: 'Option 4' },
  { value: 5, name: 'Option 5' },
  { value: 6, name: 'Option 6' },
  { value: 7, name: 'Option 7' },
  { value: 8, name: 'Option 8' },
  { value: 9, name: 'Option 9' },
  { value: 10, name: 'Option 10' },
];

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
  placeholder: 'Pick options',
  searchPlaceholder: 'Search items',
  requiredText: 'Required field',
  noDataText: 'No Data',
  noItemMatchText: 'No Item Match',
};

const MultipleSelectWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState([]);

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
      <MultipleSelect {...args} value={value} onChange={setValue} />
    </div>
  );
};

const MultipleSelectNoDataWrapper = ({ ...args }) => {
  const [value, setValue] = React.useState([]);

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
      <MultipleSelect {...args} value={value} onChange={setValue} />
    </div>
  );
};

const MultipleSelectWrapperRequired = ({ ...args }) => {
  const [value, setValue] = React.useState([]);

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
      <MultipleSelect {...args} value={value} onChange={setValue} />
      <button style={{ marginLeft: '40px', width: '150px', alignSelf: 'center' }} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

const Template = ({ ...args }) => <MultipleSelectWrapper {...args} />;
const TemplateNoData = ({ ...args }) => <MultipleSelectNoDataWrapper {...args} />;
const TemplateRequired = ({ ...args }) => <MultipleSelectWrapperRequired {...args} />;

export const MultipleSelectComponent = Template.bind({});
MultipleSelectComponent.args = { label: 'Select label', data: mockData, options: defaultOptions };

export const MultipleSelectNoDataComponent = TemplateNoData.bind({});
MultipleSelectNoDataComponent.args = { label: 'Select label', data: [], options: defaultOptions };

export const MultipleSelectDisabledComponent = Template.bind({});
MultipleSelectDisabledComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, disabled: true },
};

export const MultipleSelectWithTooltipComponent = Template.bind({});
MultipleSelectWithTooltipComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const MultipleSelectRequiredComponent = TemplateRequired.bind({});
MultipleSelectRequiredComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, required: true },
};

export const MultipleSelectSkeletonComponent = Template.bind({});
MultipleSelectSkeletonComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, skeleton: true },
};

export const MultipleSelectNoLabelComponent = Template.bind({});
MultipleSelectNoLabelComponent.args = { data: mockData, options: defaultOptions };

export const MultipleSelectNoLabelWithTooltipComponent = Template.bind({});
MultipleSelectNoLabelWithTooltipComponent.args = {
  data: mockData,
  options: { ...defaultOptions, tooltipContent: 'Here is tooltip info' },
};

export const MultipleSelectFluidComponent = Template.bind({});
MultipleSelectFluidComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, fluid: true },
};

export const MultipleSelectAutoWidthComponent = Template.bind({});
MultipleSelectAutoWidthComponent.args = {
  label: 'Select label',
  data: mockData,
  options: { ...defaultOptions, autoWidth: true },
};
