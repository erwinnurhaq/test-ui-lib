import React from 'react';
import PropTypes from 'prop-types';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

function YearPicker({ showedYear, onYearItemClicked }) {
  const [currentStartYearIndex, setCurrentStartYearIndex] = React.useState(0);

  const currentStartYear = Math.floor(showedYear / 10) * 10 + 10 * currentStartYearIndex;

  return (
    <div className="psui-datepicker__year-picker">
      <div className="psui-datepicker__year-picker__header">
        <button
          type="button"
          className="psui-datepicker__year-picker__header__prev-button"
          onClick={() => setCurrentStartYearIndex(value => value - 1)}
        >
          <GrFormPrevious />
        </button>
        <div className="psui-type-label psui-datepicker__year-picker__header__year-list-button">
          {currentStartYear} - {currentStartYear + 9}
        </div>
        <button
          type="button"
          className="psui-datepicker__year-picker__header__next-button"
          onClick={() => setCurrentStartYearIndex(value => value + 1)}
        >
          <GrFormNext />
        </button>
      </div>
      <div className="psui-datepicker__year-picker__item-container">
        {Array(10)
          .fill(0)
          .map((item, index) => index + currentStartYear)
          .map((item, index) => {
            const isActive = showedYear === item;

            return (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                type="button"
                className={`psui-type-label psui-datepicker__year-picker__item${
                  isActive ? ' psui-datepicker__year-picker__item--selected' : ''
                }`}
                onClick={() => onYearItemClicked(item)}
              >
                {item}
              </button>
            );
          })}
      </div>
    </div>
  );
}

YearPicker.propTypes = {
  showedYear: PropTypes.number.isRequired,
  onYearItemClicked: PropTypes.func.isRequired,
};

export default YearPicker;
