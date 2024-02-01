import React from 'react';
import PropTypes from 'prop-types';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronRight,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi';

function PaginationNavButton({ type, testId, isDisabled, onClick }) {
  return (
    <button
      type="button"
      data-testid={testId}
      onClick={onClick}
      className="psui-pagination-nav-button"
      disabled={isDisabled}
    >
      {type === 'end' && <HiOutlineChevronDoubleRight />}
      {type === 'next' && <HiOutlineChevronRight />}
      {type === 'previous' && <HiOutlineChevronLeft />}
      {type === 'start' && <HiOutlineChevronDoubleLeft />}
    </button>
  );
}

PaginationNavButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['end', 'start', 'next', 'previous']),
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
};

PaginationNavButton.defaultProps = {
  onClick: () => {},
  type: 'next',
  testId: null,
  isDisabled: false,
};

export default PaginationNavButton;
