import React from 'react';
import PropTypes from 'prop-types';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function getDateGrid(month, year) {
  const firstDateDay = new Date(year, month).getDay();

  const gridStartIndex = 0 - firstDateDay;

  const dateGrid = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 42; i++) {
    const currentDate = new Date(year, month, i + gridStartIndex);
    const currentDateString = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`;

    dateGrid.push({
      dateObject: currentDate,
      date: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
      text: currentDateString,
    });
  }

  return dateGrid;
}

function DateItemPicker({
  currentDate,
  startDate,
  endDate,
  disabledDates,
  showedMonthIndex,
  setShowedMonthIndex,
  showedYear,
  setShowedYear,
  customDayCW,
  customMonthCW,
  onYearButtonClicked,
  onDateItemClicked,
}) {
  function goToNextMonth() {
    if (showedMonthIndex === 11) {
      setShowedMonthIndex(0);
      setShowedYear(value => value + 1);

      return;
    }

    setShowedMonthIndex(value => value + 1);
  }

  function goToPrevMonth() {
    if (showedMonthIndex === 0) {
      setShowedMonthIndex(11);
      setShowedYear(value => value - 1);

      return;
    }

    setShowedMonthIndex(value => value - 1);
  }

  const dateArray =
    customDayCW.length === 7 ? customDayCW : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthArray =
    customMonthCW.length === 12
      ? customMonthCW
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dateGrid = getDateGrid(showedMonthIndex, showedYear);

  return (
    <div className="psui-datepicker__date-item-picker">
      <div className="psui-datepicker__date-item-picker__header">
        <button
          type="button"
          className="psui-datepicker__date-item-picker__header__prev-button"
          onClick={goToPrevMonth}
        >
          <GrFormPrevious />
        </button>
        <div className="psui-type-label psui-datepicker__date-item-picker__header__month-year">
          <div className="psui-datepicker__date-item-picker__header__month-year__month-text">
            {monthArray[showedMonthIndex]}
          </div>
          <button
            type="button"
            className="psui-datepicker__date-item-picker__year-button"
            onClick={onYearButtonClicked}
          >
            {showedYear}
          </button>
        </div>
        <button
          type="button"
          className="psui-datepicker__date-item-picker__header__next-button"
          onClick={goToNextMonth}
        >
          <GrFormNext />
        </button>
      </div>
      <div className="psui-datepicker__date-item-picker__day-item-container">
        {dateArray.map(item => (
          <div key={item} className="psui-type-label psui-datepicker__date-item-picker__day-item">
            {item}
          </div>
        ))}
      </div>
      <div className="psui-datepicker__date-item-picker__item-container">
        {dateGrid.map((item, index) => {
          const isActive =
            (currentDate && currentDate.getTime() === item.dateObject.getTime()) ||
            (startDate && startDate.getTime() === item.dateObject.getTime()) ||
            (endDate && endDate.getTime() === item.dateObject.getTime());
          const isOnSameMonthAsShowedMonth = item.month !== showedMonthIndex;
          const isDisabledDate =
            (disabledDates &&
              disabledDates.before &&
              item.dateObject.getTime() < disabledDates.before.getTime()) ||
            (disabledDates &&
              disabledDates.after &&
              item.dateObject.getTime() > disabledDates.after.getTime());

          let isBetweenStartDateAndEndDate = false;

          if (startDate && endDate) {
            isBetweenStartDateAndEndDate =
              item.dateObject.getTime() > startDate.getTime() &&
              item.dateObject.getTime() < endDate.getTime();
          }

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              className={`psui-type-label psui-datepicker__date-item-picker__item${
                isActive ? ' psui-datepicker__date-item-picker__item--selected' : ''
              }${
                isOnSameMonthAsShowedMonth || isDisabledDate
                  ? ' psui-datepicker__date-item-picker__item--greyed'
                  : ''
              }${isDisabledDate ? ' psui-datepicker__date-item-picker__item--disabled' : ''}${
                isBetweenStartDateAndEndDate
                  ? ' psui-datepicker__date-item-picker__item--between'
                  : ''
              }`}
              disabled={isDisabledDate}
              onClick={() => {
                if (isDisabledDate) return;
                onDateItemClicked(item);
              }}
            >
              {item.date}
            </button>
          );
        })}
      </div>
    </div>
  );
}

DateItemPicker.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.shape({
    before: PropTypes.instanceOf(Date),
    after: PropTypes.instanceOf(Date),
  }),
  showedMonthIndex: PropTypes.number.isRequired,
  setShowedMonthIndex: PropTypes.func.isRequired,
  showedYear: PropTypes.number.isRequired,
  setShowedYear: PropTypes.func.isRequired,
  customDayCW: PropTypes.arrayOf(PropTypes.string),
  customMonthCW: PropTypes.arrayOf(PropTypes.string),
  onYearButtonClicked: PropTypes.func.isRequired,
  onDateItemClicked: PropTypes.func.isRequired,
};

DateItemPicker.defaultProps = {
  currentDate: null,
  startDate: null,
  endDate: null,
  disabledDates: null,
  customDayCW: [],
  customMonthCW: [],
};

export default DateItemPicker;
