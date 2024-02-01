import React from 'react';
import PropTypes from 'prop-types';

function PaginationNumberButton({ testId, isDisabled, isActive, onClick, children }) {
  return (
    <button
      type="button"
      data-testid={testId}
      onClick={onClick}
      className={`psui-pagination-number-button${
        isActive ? ' psui-pagination-number-button-active' : ''
      }`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

PaginationNumberButton.propTypes = {
  onClick: PropTypes.func,
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

PaginationNumberButton.defaultProps = {
  onClick: () => {},
  testId: null,
  isDisabled: false,
  isActive: false,
  children: '',
};

export default PaginationNumberButton;
