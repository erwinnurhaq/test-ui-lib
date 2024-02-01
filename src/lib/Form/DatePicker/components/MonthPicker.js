import React from 'react';
import PropTypes from 'prop-types';

function MonthPicker({
  showedMonthIndex,
  showedYear,
  customMonthCW,
  onYearButtonClicked,
  onMonthItemClicked,
}) {
  const monthArray =
    customMonthCW.length === 12
      ? customMonthCW
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="psui-datepicker__month-picker">
      <button
        type="button"
        className="psui-datepicker__month-picker__year-button psui-type-label"
        onClick={onYearButtonClicked}
      >
        {showedYear}
      </button>
      <div className="psui-datepicker__month-picker__item-container">
        {monthArray.map((item, index) => {
          const isSelected = showedMonthIndex === index;

          return (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              className={`psui-datepicker__month-picker__item${
                isSelected ? ' psui-datepicker__month-picker__item--selected' : ''
              } psui-type-label`}
              onClick={() => onMonthItemClicked(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

MonthPicker.propTypes = {
  showedMonthIndex: PropTypes.number.isRequired,
  showedYear: PropTypes.number.isRequired,
  customMonthCW: PropTypes.arrayOf(PropTypes.string),
  onYearButtonClicked: PropTypes.func.isRequired,
  onMonthItemClicked: PropTypes.func.isRequired,
};

MonthPicker.defaultProps = {
  customMonthCW: [],
};

export default MonthPicker;
