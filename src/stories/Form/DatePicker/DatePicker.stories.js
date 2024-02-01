import React from 'react';

import { DatePicker } from '../../../lib';

const metadata = {
  title: 'Production/Form/DatePicker/DatePicker',
  component: DatePicker,
};

export default metadata;

const inputOptions = {
  isSkeleton: false,
  isFluid: false,
  isDisabled: false,
  isRequired: false,
  isWithIcon: false,
  label: null,
  customRequiredText: 'Required field',
  customPlaceholderText: null,
  customValueText: null,
};

const Template = ({ ...args }) => {
  const [currentDate, setCurrentDate] = React.useState(null);
  return <DatePicker {...args} currentDate={currentDate} onDateClicked={setCurrentDate} />;
};

export const DatePickerNormal = Template.bind({});
DatePickerNormal.args = {};

export const DatePickerSkeleton = Template.bind({});
DatePickerSkeleton.args = { inputOptions: { ...inputOptions, isSkeleton: true } };

export const DatePickerFluid = Template.bind({});
DatePickerFluid.args = { inputOptions: { ...inputOptions, isFluid: true } };

export const DatePickerDisabled = Template.bind({});
DatePickerDisabled.args = { inputOptions: { ...inputOptions, isDisabled: true } };

export const DatePickerWithIcon = Template.bind({});
DatePickerWithIcon.args = { inputOptions: { ...inputOptions, isWithIcon: true } };

export const DatePickerWithLabel = Template.bind({});
DatePickerWithLabel.args = { inputOptions: { ...inputOptions, label: 'Test label' } };

export const DatePickerWithRequired = Template.bind({});
DatePickerWithRequired.args = { inputOptions: { ...inputOptions, isRequired: true } };

export const DatePickerWithCustomRequiredText = Template.bind({});
DatePickerWithCustomRequiredText.args = {
  inputOptions: { ...inputOptions, isRequired: true, customRequiredText: 'Custom Required Text' },
};

export const DatePickerWithCustomPlaceholderText = Template.bind({});
DatePickerWithCustomPlaceholderText.args = {
  inputOptions: { ...inputOptions, customPlaceholderText: 'mm/dd/yyy' },
};

export const DatePickerWithCustomValueText = Template.bind({});
DatePickerWithCustomValueText.args = {
  inputOptions: { ...inputOptions, customValueText: 'dd/mm/yyy' },
};

export const DatePickerWithDisabledBeforeDates = Template.bind({});
DatePickerWithDisabledBeforeDates.args = {
  disabledDates: {
    before: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  },
};

export const DatePickerWithDisabledAfterDates = Template.bind({});
DatePickerWithDisabledAfterDates.args = {
  disabledDates: {
    after: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  },
};

export const DatePickerWithDisabledBeforeAndAfterDates = Template.bind({});
DatePickerWithDisabledBeforeAndAfterDates.args = {
  disabledDates: {
    before: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    after: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
  },
};

export const DatePickerWithCustomDaysText = Template.bind({});
DatePickerWithCustomDaysText.args = {
  customDaysText: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export const DatePickerWithCustomMonthsText = Template.bind({});
DatePickerWithCustomMonthsText.args = {
  customMonthsText: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Juny',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};
