import React from 'react';
import PropTypes from 'prop-types';
import { GoCalendar } from 'react-icons/go';

import TextInput from '../TextInput/TextInput';

import DateItemPicker from './components/DateItemPicker';
import MonthPicker from './components/MonthPicker';
import YearPicker from './components/YearPicker';

// SHOWED PICKER CONSTANTS
const START_DATE_DATE_ITEM_PICKER = 'start.date.date.item.picker';
const START_DATE_MONTH_PICKER = 'start.date.month.picker';
const START_DATE_YEAR_PICKER = 'start.date.year.picker';
const END_DATE_DATE_ITEM_PICKER = 'end.date.date.item.picker';
const END_DATE_MONTH_PICKER = 'end.date.month.picker';
const END_DATE_YEAR_PICKER = 'end.date.year.picker';
// SHOWED PICKER DATE STATUS CONSTANT
const START_DATE = 'start.date';
const END_DATE = 'end.date';

function checkShowedPickerStartOrEndDateStatus(showedPicker, trueCondition) {
  if (showedPicker.includes(trueCondition)) {
    return true;
  }

  return false;
}

function DateRangePicker({
  testId,
  className,
  startDate,
  endDate,
  disabledDates,
  customDaysText,
  customMonthsText,
  withIcon,
  isSkeleton,
  isFluid,
  startDateInputOptions,
  endDateInputOptions,
  onStartDateChanged,
  onEndDateChanged,
}) {
  const {
    isDisabled: startDateInputDisabledStatus = false,
    isRequired: startDateInputRequiredStatus = false,
    label: startDateInputLabel = null,
    customRequiredText: startDateInputCustomRequiredText = 'Required field',
    customPlaceholderText: startDateInputCustomPlaceholderText = null,
    customValueText: startDateInputCustomValueText = null,
  } = startDateInputOptions;

  const {
    isDisabled: endDateInputDisabledStatus = false,
    isRequired: endDateInputRequiredStatus = false,
    label: endDateInputLabel = null,
    customRequiredText: endDateInputCustomRequiredText = 'Required field',
    customPlaceholderText: endDateInputCustomPlaceholderText = null,
    customValueText: endDateInputCustomValueText = null,
  } = endDateInputOptions;

  const [showedPicker, setShowedPicker] = React.useState('');

  const defaultDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const [
    showedMonthIndexForStartDatePicker,
    setShowedMonthIndexForStartDatePicker,
  ] = React.useState(startDate ? startDate.getMonth() : defaultDate.getMonth());
  const [showedYearForStartDatePicker, setShowedYearForStartDatePicker] = React.useState(
    startDate ? startDate.getFullYear() : defaultDate.getFullYear()
  );
  const [showedMonthIndexForEndDatePicker, setShowedMonthIndexForEndDatePicker] = React.useState(
    endDate ? endDate.getMonth() : defaultDate.getMonth()
  );
  const [showedYearForEndDatePicker, setShowedYearForEndDatePicker] = React.useState(
    endDate ? endDate.getFullYear() : defaultDate.getFullYear()
  );

  React.useEffect(() => {
    // if start date picker closing and startDate not null
    if (!checkShowedPickerStartOrEndDateStatus(showedPicker, START_DATE) && startDate) {
      setShowedMonthIndexForStartDatePicker(startDate.getMonth());
      setShowedYearForStartDatePicker(startDate.getFullYear());
    }
  }, [showedPicker, startDate]);

  React.useEffect(() => {
    // if end date picker closing and endDate not null
    if (!checkShowedPickerStartOrEndDateStatus(showedPicker, END_DATE) && endDate) {
      setShowedMonthIndexForEndDatePicker(endDate.getMonth());
      setShowedYearForEndDatePicker(endDate.getFullYear());
    }
  }, [showedPicker, endDate]);

  const startDateValueText = startDate
    ? startDateInputCustomValueText ||
      `${String(startDate.getDate()).padStart(2, '0')}/${String(startDate.getMonth() + 1).padStart(
        2,
        '0'
      )}/${String(startDate.getFullYear()).padStart(4, '0')}`
    : '';
  const startDatePlaceholderText = startDateInputCustomPlaceholderText || 'dd/mm/yyyy';

  const endDateValueText = endDate
    ? endDateInputCustomValueText ||
      `${String(endDate.getDate()).padStart(2, '0')}/${String(endDate.getMonth() + 1).padStart(
        2,
        '0'
      )}/${String(endDate.getFullYear()).padStart(4, '0')}`
    : '';
  const endDatePlaceholderText = endDateInputCustomPlaceholderText || 'dd/mm/yyyy';

  return (
    <div
      data-testid={testId}
      className={`psui-date-range-picker${isFluid ? ' psui-date-range-picker--fluid' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {showedPicker ? (
        <div className="psui-date-range-picker__wrapper" onClick={() => setShowedPicker('')} />
      ) : null}
      <TextInput
        className={`psui-date-range-picker-input${
          checkShowedPickerStartOrEndDateStatus(showedPicker, START_DATE)
            ? ' psui-date-range-picker-input--datepicker-showed'
            : ''
        }${startDateInputLabel ? ` psui-date-range-picker-input--with-label` : ''}${
          startDateInputRequiredStatus || endDateInputRequiredStatus
            ? ` psui-date-range-picker-input--with-required`
            : ''
        }`}
        readOnly
        value={startDateValueText}
        placeholder={startDatePlaceholderText}
        label={startDateInputLabel}
        options={{
          skeleton: isSkeleton,
          fluid: isFluid,
          required: startDateInputRequiredStatus,
          requiredText: startDateInputCustomRequiredText,
          disabled: startDateInputDisabledStatus,
        }}
        onClick={() => {
          if (startDateInputDisabledStatus) return;
          setShowedPicker(START_DATE_DATE_ITEM_PICKER);
        }}
      />
      <div className="psui-date-range-picker-end-date-input-and-icon-container">
        <TextInput
          className={`psui-date-range-picker-input${
            checkShowedPickerStartOrEndDateStatus(showedPicker, END_DATE)
              ? ' psui-date-range-picker-input--datepicker-showed'
              : ''
          }${endDateInputLabel ? ` psui-date-range-picker-input--with-label` : ''}${
            startDateInputRequiredStatus || endDateInputRequiredStatus
              ? ` psui-date-range-picker-input--with-required`
              : ''
          }`}
          readOnly
          value={endDateValueText}
          placeholder={endDatePlaceholderText}
          label={endDateInputLabel}
          options={{
            skeleton: isSkeleton,
            fluid: isFluid,
            required: endDateInputRequiredStatus,
            requiredText: endDateInputCustomRequiredText,
            disabled: endDateInputDisabledStatus,
          }}
          onClick={() => {
            if (endDateInputDisabledStatus) return;
            setShowedPicker(END_DATE_DATE_ITEM_PICKER);
          }}
        />
        {!isSkeleton && withIcon ? (
          <GoCalendar
            className={`psui-date-range-picker-icon${
              endDateInputLabel && !(startDateInputRequiredStatus || endDateInputRequiredStatus)
                ? ` psui-date-range-picker-icon--with-label`
                : ''
            }${
              !endDateInputLabel && (startDateInputRequiredStatus || endDateInputRequiredStatus)
                ? ` psui-date-range-picker-icon--with-required`
                : ''
            }`}
          />
        ) : (
          <div className="psui-date-range-picker-icon--empty-placeholder" />
        )}
        {showedPicker ? (
          <div
            className={`psui-date-range-picker__picker${
              showedPicker === 'year' ? ' psui-date-range-picker__picker--year-active' : ''
            }`}
          >
            {showedPicker === START_DATE_DATE_ITEM_PICKER ||
            showedPicker === END_DATE_DATE_ITEM_PICKER ? (
              <DateItemPicker
                startDate={startDate}
                endDate={endDate}
                disabledDates={disabledDates}
                showedMonthIndex={
                  showedPicker === START_DATE_DATE_ITEM_PICKER
                    ? showedMonthIndexForStartDatePicker
                    : showedMonthIndexForEndDatePicker
                }
                setShowedMonthIndex={selectedMonthIndex =>
                  showedPicker === START_DATE_DATE_ITEM_PICKER
                    ? setShowedMonthIndexForStartDatePicker(selectedMonthIndex)
                    : setShowedMonthIndexForEndDatePicker(selectedMonthIndex)
                }
                showedYear={
                  showedPicker === START_DATE_DATE_ITEM_PICKER
                    ? showedYearForStartDatePicker
                    : showedYearForEndDatePicker
                }
                setShowedYear={selectedYear =>
                  showedPicker === START_DATE_DATE_ITEM_PICKER
                    ? setShowedYearForStartDatePicker(selectedYear)
                    : setShowedYearForEndDatePicker(selectedYear)
                }
                customDayCW={customDaysText}
                customMonthCW={customMonthsText}
                onYearButtonClicked={() =>
                  setShowedPicker(
                    showedPicker === START_DATE_DATE_ITEM_PICKER
                      ? START_DATE_YEAR_PICKER
                      : END_DATE_YEAR_PICKER
                  )
                }
                onDateItemClicked={date => {
                  if (showedPicker === START_DATE_DATE_ITEM_PICKER) {
                    if (endDate !== null) {
                      if (date.dateObject.getTime() < endDate.getTime()) {
                        onStartDateChanged(date.dateObject);
                      }
                      return;
                    }

                    onStartDateChanged(date.dateObject);
                    return;
                  }

                  if (startDate !== null) {
                    if (date.dateObject.getTime() > startDate.getTime()) {
                      onEndDateChanged(date.dateObject);
                    }
                    return;
                  }

                  onEndDateChanged(date.dateObject);
                }}
              />
            ) : null}
            {showedPicker === START_DATE_MONTH_PICKER || showedPicker === END_DATE_MONTH_PICKER ? (
              <MonthPicker
                showedMonthIndex={
                  showedPicker === START_DATE_MONTH_PICKER
                    ? showedMonthIndexForStartDatePicker
                    : showedMonthIndexForEndDatePicker
                }
                showedYear={
                  showedPicker === START_DATE_MONTH_PICKER
                    ? showedYearForStartDatePicker
                    : showedYearForEndDatePicker
                }
                customMonthCW={customMonthsText}
                onYearButtonClicked={() =>
                  setShowedPicker(
                    showedPicker === START_DATE_MONTH_PICKER
                      ? START_DATE_YEAR_PICKER
                      : END_DATE_YEAR_PICKER
                  )
                }
                onMonthItemClicked={monthIndex => {
                  if (showedPicker === START_DATE_MONTH_PICKER) {
                    setShowedMonthIndexForStartDatePicker(monthIndex);
                    setShowedPicker(START_DATE_DATE_ITEM_PICKER);
                    return;
                  }

                  setShowedMonthIndexForEndDatePicker(monthIndex);
                  setShowedPicker(END_DATE_DATE_ITEM_PICKER);
                }}
              />
            ) : null}
            {showedPicker === START_DATE_YEAR_PICKER || showedPicker === END_DATE_YEAR_PICKER ? (
              <YearPicker
                showedYear={
                  showedPicker === START_DATE_YEAR_PICKER
                    ? showedYearForStartDatePicker
                    : showedYearForEndDatePicker
                }
                onYearItemClicked={selectedYear => {
                  if (showedPicker === START_DATE_YEAR_PICKER) {
                    setShowedYearForStartDatePicker(selectedYear);
                    setShowedPicker(START_DATE_MONTH_PICKER);
                    return;
                  }

                  setShowedYearForEndDatePicker(selectedYear);
                  setShowedPicker(END_DATE_MONTH_PICKER);
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

DateRangePicker.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.shape({
    before: PropTypes.instanceOf(Date),
    after: PropTypes.instanceOf(Date),
  }),
  customDaysText: PropTypes.arrayOf(PropTypes.string),
  customMonthsText: PropTypes.arrayOf(PropTypes.string),
  withIcon: PropTypes.bool,
  isSkeleton: PropTypes.bool,
  isFluid: PropTypes.bool,
  startDateInputOptions: PropTypes.shape({
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    customRequiredText: PropTypes.string,
    customPlaceholderText: PropTypes.string,
    customValueText: PropTypes.string,
  }),
  endDateInputOptions: PropTypes.shape({
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    customRequiredText: PropTypes.string,
    customPlaceholderText: PropTypes.string,
    customValueText: PropTypes.string,
  }),
  onStartDateChanged: PropTypes.func,
  onEndDateChanged: PropTypes.func,
};

DateRangePicker.defaultProps = {
  testId: null,
  className: '',
  startDate: null,
  endDate: null,
  disabledDates: null,
  customDaysText: [],
  customMonthsText: [],
  withIcon: true,
  isSkeleton: false,
  isFluid: false,
  startDateInputOptions: {
    isDisabled: false,
    isRequired: false,
    label: 'Start date',
    customRequiredText: 'Required field',
    customPlaceholderText: null,
    customValueText: null,
  },
  endDateInputOptions: {
    isDisabled: false,
    isRequired: false,
    label: 'End date',
    customRequiredText: 'Required field',
    customPlaceholderText: null,
    customValueText: null,
  },
  onStartDateChanged: () => {},
  onEndDateChanged: () => {},
};

export default DateRangePicker;
