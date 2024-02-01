import React from 'react';
import PropTypes from 'prop-types';
import { GoCalendar } from 'react-icons/go';

import TextInput from '../TextInput/TextInput';

import DateItemPicker from './components/DateItemPicker';
import MonthPicker from './components/MonthPicker';
import YearPicker from './components/YearPicker';

function DatePicker({
  testId,
  className,
  currentDate,
  disabledDates,
  customDaysText,
  customMonthsText,
  inputOptions,
  onDateClicked,
}) {
  const {
    isSkeleton = false,
    isFluid = false,
    isDisabled = false,
    isRequired = false,
    isWithIcon = false,
    label = null,
    customRequiredText = 'Required field',
    customPlaceholderText = null,
    customValueText = null,
  } = inputOptions;

  const [showedPicker, setShowedPicker] = React.useState('');

  const defaultDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const [showedMonthIndex, setShowedMonthIndex] = React.useState(
    currentDate ? currentDate.getMonth() : defaultDate.getMonth()
  );
  const [showedYear, setShowedYear] = React.useState(
    currentDate ? currentDate.getFullYear() : defaultDate.getFullYear()
  );

  React.useEffect(() => {
    // if showedPicker closing and currentDate not null
    if (showedPicker === '' && currentDate) {
      setShowedMonthIndex(currentDate.getMonth());
      setShowedYear(currentDate.getFullYear());
    }
  }, [showedPicker, currentDate]);

  const valueText = currentDate
    ? customValueText ||
      `${String(currentDate.getDate()).padStart(2, '0')}/${String(
        currentDate.getMonth() + 1
      ).padStart(2, '0')}/${String(currentDate.getFullYear()).padStart(4, '0')}`
    : '';
  const placeholderText = customPlaceholderText || 'dd/mm/yyyy';

  return (
    <div data-testid={testId} className={`psui-datepicker${className ? ` ${className}` : ''}`}>
      {showedPicker ? (
        <div className="psui-datepicker__wrapper" onClick={() => setShowedPicker('')} />
      ) : null}
      <TextInput
        className={`psui-datepicker-input${
          showedPicker ? ' psui-datepicker-input--datepicker-showed' : ''
        }${label ? ` psui-datepicker-input--with-label` : ''}${
          isWithIcon ? ` psui-datepicker-input--with-icon` : ''
        }${isRequired ? ` psui-datepicker-input--with-required` : ''}`}
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
          prefix: isWithIcon ? <GoCalendar className="psui-h-5 psui-w-5" /> : '',
        }}
        onClick={() => {
          if (isDisabled) return;
          setShowedPicker('date');
        }}
      />
      {showedPicker ? (
        <div
          className={`psui-datepicker__picker${
            showedPicker === 'year' ? ' psui-datepicker__picker--year-active' : ''
          }`}
        >
          {showedPicker === 'date' ? (
            <DateItemPicker
              currentDate={currentDate}
              disabledDates={disabledDates}
              showedMonthIndex={showedMonthIndex}
              setShowedMonthIndex={setShowedMonthIndex}
              showedYear={showedYear}
              setShowedYear={setShowedYear}
              customDayCW={customDaysText}
              customMonthCW={customMonthsText}
              onYearButtonClicked={() => setShowedPicker('year')}
              onDateItemClicked={date => onDateClicked(date.dateObject)}
            />
          ) : null}
          {showedPicker === 'month' ? (
            <MonthPicker
              showedMonthIndex={showedMonthIndex}
              showedYear={showedYear}
              customMonthCW={customMonthsText}
              onYearButtonClicked={() => setShowedPicker('year')}
              onMonthItemClicked={monthIndex => {
                setShowedMonthIndex(monthIndex);
                setShowedPicker('date');
              }}
            />
          ) : null}
          {showedPicker === 'year' ? (
            <YearPicker
              showedYear={showedYear}
              onYearItemClicked={selectedYear => {
                setShowedYear(selectedYear);
                setShowedPicker('month');
              }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

DatePicker.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  currentDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.shape({
    before: PropTypes.instanceOf(Date),
    after: PropTypes.instanceOf(Date),
  }),
  customDaysText: PropTypes.arrayOf(PropTypes.string),
  customMonthsText: PropTypes.arrayOf(PropTypes.string),
  inputOptions: PropTypes.shape({
    isSkeleton: PropTypes.bool,
    isFluid: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    isWithIcon: PropTypes.bool,
    label: PropTypes.string,
    customRequiredText: PropTypes.string,
    customPlaceholderText: PropTypes.string,
    customValueText: PropTypes.string,
  }),
  onDateClicked: PropTypes.func,
};

DatePicker.defaultProps = {
  testId: null,
  className: '',
  currentDate: null,
  disabledDates: null,
  customDaysText: [],
  customMonthsText: [],
  inputOptions: {
    isSkeleton: false,
    isFluid: false,
    isDisabled: false,
    isRequired: false,
    isWithIcon: false,
    label: null,
    customRequiredText: 'Required field',
    customPlaceholderText: null,
    customValueText: null,
  },
  onDateClicked: () => {},
};

export default DatePicker;
