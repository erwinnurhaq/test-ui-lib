import React from 'react';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

function NumberInputArrows({ testId, onIncrement, onDecrement, disabled }) {
  return (
    <div className="psui-text-input-number-arrow-container">
      <button
        type="button"
        data-testid={testId ? `${testId}-increment-button` : null}
        className="psui-text-input-number-arrow"
        onClick={onIncrement}
        disabled={disabled}
      >
        <FaCaretUp className="psui-text-input-number-arrow-icon psui--mb-1" />
      </button>
      <button
        type="button"
        data-testid={testId ? `${testId}-decrement-button` : null}
        className="psui-text-input-number-arrow"
        onClick={onDecrement}
        disabled={disabled}
      >
        <FaCaretDown className="psui-text-input-number-arrow-icon psui--mt-1" />
      </button>
    </div>
  );
}

NumberInputArrows.propTypes = {
  testId: PropTypes.string,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

NumberInputArrows.defaultProps = {
  testId: null,
};

export default NumberInputArrows;
