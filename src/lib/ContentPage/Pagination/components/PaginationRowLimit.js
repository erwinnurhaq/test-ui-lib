import React from 'react';
import PropTypes from 'prop-types';
import GhostSmallSelect from '../../../Form/Select/GhostSmallSelect';

function PaginationRowLimit({
  testId,
  isDisabled,
  rowSizes,
  rowSizesLabel,
  currentRowSize,
  onChangeRowSize,
}) {
  return (
    <div className="psui-pagination-row-limit">
      <p className="psui-type-label">{rowSizesLabel}:</p>
      <GhostSmallSelect
        testId={testId}
        value={currentRowSize}
        onChange={e => onChangeRowSize(parseInt(e.target.value, 10))}
        options={{ disabled: isDisabled, autoWidth: true }}
      >
        {rowSizes.map(size => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </GhostSmallSelect>
    </div>
  );
}

PaginationRowLimit.propTypes = {
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
  rowSizes: PropTypes.arrayOf(PropTypes.number),
  rowSizesLabel: PropTypes.string,
  currentRowSize: PropTypes.number,
  onChangeRowSize: PropTypes.func,
};

PaginationRowLimit.defaultProps = {
  testId: null,
  isDisabled: false,
  rowSizes: [5, 10, 20, 50, 100],
  rowSizesLabel: 'Items per page',
  currentRowSize: 10,
  onChangeRowSize: () => {},
};

export default PaginationRowLimit;
