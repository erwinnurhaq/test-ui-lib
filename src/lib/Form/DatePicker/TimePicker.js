import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput/TextInput';
import GhostSmallSelect from '../Select/GhostSmallSelect';

function HoursMinutesPicker({
  hourItemsArray,
  minuteItemsArray,
  selectedHours,
  selectedMinutes,
  okButtonCw,
  onOkClick,
}) {
  const [currentSelectedHours, setCurrentSelectedHours] = React.useState(selectedHours);
  const [currentSelectedMinutes, setCurrentSelectedMinutes] = React.useState(selectedMinutes);

  React.useEffect(() => {
    if (selectedHours !== null) {
      document
        .getElementById(`psui-timepicker__hours-minutes-picker__hours-item-${selectedHours}`)
        .scrollIntoView({ behavior: 'auto', block: 'center', inline: 'start' });
    }

    if (selectedMinutes !== null) {
      document
        .getElementById(`psui-timepicker__hours-minutes-picker__minutes-item-${selectedMinutes}`)
        .scrollIntoView({ behavior: 'auto', block: 'center', inline: 'start' });
    }
  }, [selectedHours, selectedMinutes]);

  return (
    <div className="psui-timepicker__hours-minutes-picker">
      <div className="psui-timepicker__hours-minutes-picker__hours-items-container">
        {hourItemsArray.map((item, index) => {
          const isSelected = currentSelectedHours !== null && item === currentSelectedHours;

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              id={`psui-timepicker__hours-minutes-picker__hours-item-${item}`}
              className={`psui-timepicker__hours-minutes-picker__hours-item${
                isSelected ? ' psui-timepicker__hours-minutes-picker__hours-item--selected' : ''
              }`}
              onClick={() => setCurrentSelectedHours(item)}
            >
              {String(item).padStart(2, '0')}
            </button>
          );
        })}
      </div>
      <div className="psui-timepicker__hours-minutes-picker__minutes-items-container">
        {minuteItemsArray.map((item, index) => {
          const isSelected = currentSelectedMinutes !== null && item === currentSelectedMinutes;

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              id={`psui-timepicker__hours-minutes-picker__minutes-item-${item}`}
              className={`psui-timepicker__hours-minutes-picker__minutes-item${
                isSelected ? ' psui-timepicker__hours-minutes-picker__minutes-item--selected' : ''
              }`}
              onClick={() => setCurrentSelectedMinutes(item)}
            >
              {String(item).padStart(2, '0')}
            </button>
          );
        })}
      </div>
      <div className="psui-timepicker__hours-minutes-picker__footer-container">
        <button
          type="button"
          className="psui-timepicker__hours-minutes-picker__footer-container__ok-button"
          onClick={() => onOkClick(currentSelectedHours, currentSelectedMinutes)}
        >
          {okButtonCw}
        </button>
      </div>
    </div>
  );
}

HoursMinutesPicker.propTypes = {
  hourItemsArray: PropTypes.arrayOf(PropTypes.number).isRequired,
  minuteItemsArray: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedHours: PropTypes.number,
  selectedMinutes: PropTypes.number,
  okButtonCw: PropTypes.string,
  onOkClick: PropTypes.func,
};

HoursMinutesPicker.defaultProps = {
  selectedHours: null,
  selectedMinutes: null,
  okButtonCw: 'OK',
  onOkClick: () => {},
};

function TimePicker({
  testId,
  className,
  selectedHours,
  selectedMinutes,
  selectedAMPM,
  with12HoursFormat,
  inputOptions,
  pickerOptions,
  onConfirm,
}) {
  const {
    isSkeleton = false,
    isFluid = false,
    isDisabled = false,
    isRequired = false,
    label = null,
    customRequiredText = 'Required field',
    customPlaceholderText = null,
    customValueText = null,
  } = inputOptions;
  const { okButtonCw = 'OK' } = pickerOptions;

  const [showedPicker, setShowedPicker] = React.useState('');

  const valueText =
    selectedHours !== null &&
    selectedHours !== undefined &&
    selectedMinutes !== null &&
    selectedMinutes !== undefined
      ? customValueText ||
        `${String(selectedHours).padStart(2, '0')}:${String(selectedMinutes).padStart(2, '0')}`
      : '';
  const placeholderText = customPlaceholderText || 'hh:mm';

  const hourItemsArray = with12HoursFormat
    ? Array(12)
        .fill(0)
        .map((item, index) => index)
    : Array(24)
        .fill(0)
        .map((item, index) => index);
  const minuteItemsArray = Array(60)
    .fill(0)
    .map((item, index) => index);

  return (
    <div
      data-testid={testId}
      className={`psui-timepicker${with12HoursFormat ? ' psui-timepicker--with-12-hour' : ''}${
        isFluid ? ' psui-timepicker--fluid' : ''
      }${className ? ` ${className}` : ''}`}
    >
      {showedPicker ? (
        <div className="psui-timepicker__wrapper" onClick={() => setShowedPicker('')} />
      ) : null}
      <TextInput
        className={`psui-timepicker-input${
          showedPicker ? ' psui-timepicker-input--timepicker-showed' : ''
        }${label ? ` psui-timepicker-input--with-label` : ''}${
          isRequired ? ` psui-timepicker-input--with-required` : ''
        }`}
        readOnly
        value={valueText}
        placeholder={placeholderText}
        label={label}
        options={{
          skeleton: isSkeleton,
          fluid: isFluid,
          required: isRequired,
          requiredText: customRequiredText,
          disabled: isDisabled,
        }}
        onClick={() => {
          if (isDisabled) return;
          setShowedPicker('time');
        }}
      />
      {!isSkeleton && with12HoursFormat ? (
        <GhostSmallSelect
          value={selectedAMPM || 'AM'}
          onChange={ev => onConfirm(selectedHours, selectedMinutes, ev.target.value)}
          className={`${label ? ' psui-timepicker-am-pm-select--with-label' : ''}${
            isRequired ? ' psui-timepicker-am-pm-select--with-required' : ''
          }`}
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </GhostSmallSelect>
      ) : null}
      {showedPicker ? (
        <div className="psui-timepicker__picker">
          <HoursMinutesPicker
            hourItemsArray={hourItemsArray}
            minuteItemsArray={minuteItemsArray}
            selectedHours={selectedHours}
            selectedMinutes={selectedMinutes}
            okButtonCw={okButtonCw}
            onOkClick={(currentSelectedHours, currentSelectedMinutes) => {
              onConfirm(
                currentSelectedHours,
                currentSelectedMinutes,
                with12HoursFormat ? selectedAMPM || 'AM' : null
              );
              setShowedPicker('');
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

TimePicker.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  selectedHours: PropTypes.number,
  selectedMinutes: PropTypes.number,
  selectedAMPM: PropTypes.oneOf(['AM', 'PM']),
  with12HoursFormat: PropTypes.bool,
  inputOptions: PropTypes.shape({
    isSkeleton: PropTypes.bool,
    isFluid: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    customRequiredText: PropTypes.string,
    customPlaceholderText: PropTypes.string,
    customValueText: PropTypes.string,
  }),
  pickerOptions: PropTypes.shape({
    okButtonCw: PropTypes.string,
  }),
  onConfirm: PropTypes.func,
};

TimePicker.defaultProps = {
  testId: null,
  className: '',
  selectedHours: null,
  selectedMinutes: null,
  selectedAMPM: 'AM',
  with12HoursFormat: false,
  inputOptions: {
    isSkeleton: false,
    isFluid: false,
    isDisabled: false,
    isRequired: false,
    label: null,
    customRequiredText: 'Required',
    customPlaceholderText: null,
    customValueText: null,
  },
  pickerOptions: {
    okButtonCw: 'OK',
  },
  onConfirm: () => {},
};

export default TimePicker;
