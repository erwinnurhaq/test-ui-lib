import React from 'react';

import { DateRangePicker } from '../../../lib';

const metadata = {
  title: 'Production/Form/DatePicker/DateRangePicker',
  component: DateRangePicker,
};

export default metadata;

const Template = ({ ...args }) => {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);

  return (
    <DateRangePicker
      {...args}
      startDate={startDate}
      endDate={endDate}
      onStartDateChanged={setStartDate}
      onEndDateChanged={setEndDate}
    />
  );
};

export const DateRangePickerNormal = Template.bind({});
DateRangePickerNormal.args = {};

export const DateRangePickerWithoutIcon = Template.bind({});
DateRangePickerWithoutIcon.args = {
  withIcon: false,
};

export const DateRangePickerSkeleton = Template.bind({});
DateRangePickerSkeleton.args = {
  isSkeleton: true,
};

export const DateRangePickerFluid = Template.bind({});
DateRangePickerFluid.args = {
  isFluid: true,
};

export const DateRangePickerWithDisabledBeforeAndAfterDates = Template.bind({});
DateRangePickerWithDisabledBeforeAndAfterDates.args = {
  disabledDates: {
    before: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7),
    after: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7),
  },
};

export const DateRangePickerWithCustomDaysText = Template.bind({});
DateRangePickerWithCustomDaysText.args = {
  customDaysText: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export const DateRangePickerWithCustomMonthsText = Template.bind({});
DateRangePickerWithCustomMonthsText.args = {
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
