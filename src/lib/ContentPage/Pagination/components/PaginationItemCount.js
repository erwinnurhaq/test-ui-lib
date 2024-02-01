import React from 'react';
import PropTypes from 'prop-types';

function PaginationItemCount({
  testId,
  currentRowSize,
  currentPage,
  totalItemCountInfo,
  formatItemCountInfo,
}) {
  const renderItemCountInfo = () => {
    const offset = (currentPage - 1) * currentRowSize;
    const lowerLimit = offset + 1;
    const upperLimit = offset + currentRowSize;
    const start = totalItemCountInfo > 0 ? lowerLimit : 0;
    const end = upperLimit > totalItemCountInfo ? totalItemCountInfo : upperLimit;

    if (formatItemCountInfo) {
      return typeof formatItemCountInfo === 'function'
        ? formatItemCountInfo(start, end, totalItemCountInfo)
        : formatItemCountInfo;
    }
    return `${start} - ${end} of ${totalItemCountInfo} items`;
  };

  if (totalItemCountInfo === null && formatItemCountInfo === null) return null;

  return (
    <React.Fragment>
      <div className="psui-pagination-wrapper-divider" />
      <div data-testid={testId} className="psui-type-label psui-pagination-item-count">
        {renderItemCountInfo()}
      </div>
    </React.Fragment>
  );
}

PaginationItemCount.propTypes = {
  testId: PropTypes.string,
  currentRowSize: PropTypes.number,
  currentPage: PropTypes.number,
  totalItemCountInfo: PropTypes.number,
  formatItemCountInfo: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
};

PaginationItemCount.defaultProps = {
  testId: null,
  currentRowSize: 10,
  currentPage: 1,
  totalItemCountInfo: null,
  formatItemCountInfo: null,
};

export default PaginationItemCount;
