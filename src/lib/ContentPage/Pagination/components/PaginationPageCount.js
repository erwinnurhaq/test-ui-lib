import React from 'react';
import PropTypes from 'prop-types';

function PaginationPageCount({ testId, currentPage, totalPages, formatPageCountInfo }) {
  const renderPageCountInfo = () => {
    if (formatPageCountInfo) {
      return typeof formatPageCountInfo === 'function'
        ? formatPageCountInfo(currentPage, totalPages)
        : formatPageCountInfo;
    }
    if (totalPages !== null) {
      return `${currentPage} of ${totalPages} pages`;
    }
    return `Page ${currentPage}`;
  };

  return (
    <div data-testid={testId} className="psui-type-label psui-pagination-page-count">
      {renderPageCountInfo()}
    </div>
  );
}

PaginationPageCount.propTypes = {
  testId: PropTypes.string,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  formatPageCountInfo: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
};

PaginationPageCount.defaultProps = {
  testId: null,
  currentPage: 1,
  totalPages: null,
  formatPageCountInfo: null,
};

export default PaginationPageCount;
