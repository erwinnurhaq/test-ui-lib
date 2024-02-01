/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../../helpers/combineClassNames';
import GhostSmallSelect from '../../../Form/Select/GhostSmallSelect';
import PaginationItemCount from '../components/PaginationItemCount';
import PaginationNavButton from '../components/PaginationNavButton';
import PaginationPageCount from '../components/PaginationPageCount';
import PaginationRowLimit from '../components/PaginationRowLimit';

const PaginationBar = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    totalPages,
    currentPage,
    currentRowSize,
    onChangePage,
    onChangeRowSize,
    options = {},
    ...omittedArgs
  } = props;

  const {
    disabled = false,
    rowSizes = [5, 10, 20, 50, 100],
    rowSizesLabel = 'Items per page',
    totalItemCountInfo = null,
    formatItemCountInfo = null,
    formatPageCountInfo = null,
    hideBarBorder = false,
  } = options;

  return (
    <div
      ref={ref}
      data-testid={testId}
      className={combineClassNames(
        'psui-pagination-container psui-pagination-bar',
        disabled ? 'psui-pagination-disabled' : '',
        hideBarBorder ? 'psui-pagination-no-bar-border' : '',
        className
      )}
      {...omittedArgs}
    >
      <div className="psui-pagination-wrapper">
        <div className="psui-pagination-wrapper-col">
          <PaginationRowLimit
            testId={testId ? `${testId}-row-size-select` : null}
            isDisabled={disabled}
            rowSizes={rowSizes}
            rowSizesLabel={rowSizesLabel}
            currentRowSize={currentRowSize}
            onChangeRowSize={onChangeRowSize}
          />
          {(totalItemCountInfo !== null || formatItemCountInfo !== null) && (
            <PaginationItemCount
              testId={testId ? `${testId}-item-count` : null}
              currentRowSize={currentRowSize}
              currentPage={currentPage}
              totalItemCountInfo={totalItemCountInfo}
              formatItemCountInfo={formatItemCountInfo}
            />
          )}
        </div>
        <div className="psui-pagination-wrapper-col">
          <PaginationPageCount
            testId={testId ? `${testId}-page-count` : null}
            currentPage={currentPage}
            totalPages={totalPages}
            formatPageCountInfo={formatPageCountInfo}
          />
          <PaginationNavButton
            type="previous"
            testId={testId ? `${testId}-prev-button` : null}
            isDisabled={disabled || currentPage === 1}
            onClick={() => onChangePage(currentPage - 1)}
          />
          {totalPages > 0 && (
            <div className="psui-pagination-bar-page-select-wrapper">
              <GhostSmallSelect
                className="psui-pagination-bar-page-select"
                testId={testId ? `${testId}-page-select` : null}
                value={currentPage}
                onChange={e => onChangePage(parseInt(e.target.value, 10))}
                options={{ disabled, autoWidth: true }}
              >
                {new Array(totalPages).fill().map((i, idx) => (
                  <option key={idx} value={idx + 1}>
                    {idx + 1}
                  </option>
                ))}
              </GhostSmallSelect>
            </div>
          )}
          <PaginationNavButton
            type="next"
            testId={testId ? `${testId}-next-button` : null}
            isDisabled={disabled || currentPage === totalPages}
            onClick={() => onChangePage(currentPage + 1)}
          />
        </div>
      </div>
    </div>
  );
});

PaginationBar.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  totalPages: PropTypes.number,
  currentRowSize: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowSize: PropTypes.func,
  options: PropTypes.shape({
    disabled: PropTypes.bool,
    rowSizes: PropTypes.arrayOf(PropTypes.number),
    rowSizesLabel: PropTypes.string,
    totalItemCountInfo: PropTypes.number,
    formatItemCountInfo: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
    formatPageCountInfo: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
    hideBarBorder: PropTypes.bool,
  }),
};

PaginationBar.defaultProps = {
  testId: null,
  className: '',
  totalPages: null,
  currentPage: 1,
  currentRowSize: 10,
  onChangePage: () => {},
  onChangeRowSize: () => {},
  options: {
    disabled: false,
    rowSizes: [5, 10, 20, 50, 100],
    rowSizesLabel: 'Items per page',
    totalItemCountInfo: null,
    formatItemCountInfo: null,
    formatPageCountInfo: null,
    hideBarBorder: false,
  },
};

export default PaginationBar;
