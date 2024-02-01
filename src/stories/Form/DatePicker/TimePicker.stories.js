import React from 'react';

import { TimePicker } from '../../../lib';

const metadata = {
  title: 'Production/Form/DatePicker/TimePicker',
  component: TimePicker,
};

export default metadata;

const Template = ({ ...args }) => {
  const [selectedHours, setSelectedHours] = React.useState(null);
  const [selectedMinutes, setSelectedMinutes] = React.useState(null);

  return (
    <TimePicker
      {...args}
      selectedHours={selectedHours}
      selectedMinutes={selectedMinutes}
      onConfirm={(currentSelectedHours, currentSelectedMinutes) => {
        setSelectedHours(currentSelectedHours);
        setSelectedMinutes(currentSelectedMinutes);
      }}
    />
  );
};

const Template12HoursFormat = ({ ...args }) => {
  const [selectedHours, setSelectedHours] = React.useState(null);
  const [selectedMinutes, setSelectedMinutes] = React.useState(null);
  const [selectedAmPm, setSelectedAmPm] = React.useState('AM');

  return (
    <TimePicker
      {...args}
      with12HoursFormat
      selectedHours={selectedHours}
      selectedMinutes={selectedMinutes}
      selectedAMPM={selectedAmPm}
      onConfirm={(currentSelectedHours, currentSelectedMinutes, currentSelectedAmPm) => {
        setSelectedHours(currentSelectedHours);
        setSelectedMinutes(currentSelectedMinutes);
        setSelectedAmPm(currentSelectedAmPm);
      }}
    />
  );
};

export const TimePickerNormal = Template.bind({});
TimePickerNormal.args = {};

export const TimePickerNormalWithLabel = Template.bind({});
TimePickerNormalWithLabel.args = {
  inputOptions: { label: 'Select a time' },
};

export const TimePicker12HoursFormat = Template12HoursFormat.bind({});
Template12HoursFormat.args = {};
