import React from 'react';
import PropTypes from 'prop-types';

import RowItem from './RowItem';
import Checkbox from '../../../Checkbox';

function OptionRows({ testId, data, isChecked, onClick }) {
  return (
    <div className="psui-select-multiple-option__row-wrapper">
      {data.map(option => (
        <RowItem
          key={option.value}
          testId={testId ? `${testId}-option-${option.value}` : null}
          onClick={() => onClick(option)}
        >
          <div className="psui--ml-3 psui-flex psui-items-center">
            <Checkbox
              testId={testId ? `${testId}-option-${option.value}-checkbox` : null}
              checked={isChecked(option.value)}
              onClick={() => onClick(option)}
            />
            <div className="psui-pl-3">{option.name}</div>
          </div>
        </RowItem>
      ))}
    </div>
  );
}

OptionRows.propTypes = {
  testId: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ).isRequired,
  isChecked: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

OptionRows.defaultProps = {
  testId: null,
};

export default OptionRows;
