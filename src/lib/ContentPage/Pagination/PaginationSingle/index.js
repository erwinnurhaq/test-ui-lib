import React from 'react';
import PropTypes from 'prop-types';
import checkClassName from '../../../helpers/checkClassName';
import PaginationNavButton from '../components/PaginationNavButton';
import PaginationPageCount from '../components/PaginationPageCount';

function PaginationSingle({
  testId,
  className,
  totalPages,
  currentPage,
  onChangePage,
  options = {},
}) {
  const {
    disabled = false,
    standalone = false,
    showStartButton = false,
    showEndButton = false,
    onStartButtonClick = null,
    onEndButtonClick = null,
    formatPageCountInfo = null,
  } = options;

  const onStartClick = () => {
    if (onStartButtonClick) return onStartButtonClick();
    return onChangePage(1);
  };
  const onEndClick = () => {
    if (onEndButtonClick) return onEndButtonClick();
    return totalPages !== null ? onChangePage(totalPages) : null;
  };

  return (
    <div
      data-testid={testId}
      className={`psui-pagination-container psui-pagination-single${
        disabled ? ' psui-pagination-disabled' : ''
      }${checkClassName(className)}`}
    >
      <div className={`psui-pagination-wrapper${standalone ? ' psui-pagination-standalone' : ''}`}>
        <div className="psui-pagination-wrapper-col">
          <PaginationPageCount
            testId={testId ? `${testId}-page-count` : null}
            currentPage={currentPage}
            totalPages={totalPages}
            formatPageCountInfo={formatPageCountInfo}
          />
          {showStartButton && (
            <PaginationNavButton
              type="start"
              testId={testId ? `${testId}-start-button` : null}
              isDisabled={disabled || currentPage === 1}
              onClick={onStartClick}
            />
          )}
          <PaginationNavButton
            type="previous"
            testId={testId ? `${testId}-prev-button` : null}
            isDisabled={disabled || currentPage === 1}
            onClick={() => onChangePage(currentPage - 1)}
          />
          <PaginationNavButton
            type="next"
            testId={testId ? `${testId}-next-button` : null}
            isDisabled={disabled || currentPage === totalPages}
            onClick={() => onChangePage(currentPage + 1)}
          />
          {showEndButton && (
            <PaginationNavButton
              type="end"
              testId={testId ? `${testId}-end-button` : null}
              isDisabled={disabled || currentPage === totalPages}
              onClick={onEndClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

PaginationSingle.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  options: PropTypes.shape({
    disabled: PropTypes.bool,
    standalone: PropTypes.bool,
    showStartButton: PropTypes.bool,
    showEndButton: PropTypes.bool,
    onStartButtonClick: PropTypes.func,
    onEndButtonClick: PropTypes.func,
    formatPageCountInfo: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
  }),
};

PaginationSingle.defaultProps = {
  testId: null,
  className: '',
  totalPages: null,
  currentPage: 1,
  onChangePage: () => {},
  options: {
    disabled: false,
    standalone: false,
    showStartButton: false,
    showEndButton: false,
    onStartButtonClick: null,
    onEndButtonClick: null,
    formatPageCountInfo: null,
  },
};

export default PaginationSingle;
