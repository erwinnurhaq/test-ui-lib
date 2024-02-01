/* eslint-disable no-continue */
import React from 'react';
import PropTypes from 'prop-types';
import checkClassName from '../../../helpers/checkClassName';
import PaginationNavButton from '../components/PaginationNavButton';
import PaginationNumberButton from '../components/PaginationNumberButton';
import { OverflowMenu, OverflowMenuItem } from '../../OverflowMenu';

function PaginationMultiple({
  testId,
  className,
  totalPages,
  currentPage,
  onChangePage,
  options = {},
}) {
  const { disabled = false, disabledPages = [], standalone = false } = options;

  const pageChange = page => {
    if (disabledPages.includes(page)) return;
    onChangePage(page);
  };

  const checkRightOverflow = (page, diff) =>
    totalPages > 7 && diff - 2 >= 2 && page < totalPages && page > currentPage + 1 && page > 5;

  const checkLeftOverflow = (page, diff) =>
    totalPages > 7 && diff - 2 >= 2 && page > 1 && page < currentPage - 1 && page < totalPages - 4;

  /*
    this will create max length array 7:
    [1,2,3,4,5,[6,7,8],9] or [1,[2,3,4],5,6,7,8,9] or [1,[2,3],4,5,6,[7,8],9]
  */
  const pages = React.useMemo(() => {
    const diffStart = Math.abs(1 - currentPage);
    const diffEnd = Math.abs(totalPages - currentPage);
    const result = [];
    for (let page = 1; page <= totalPages; page += 1) {
      if (checkRightOverflow(page, diffEnd)) {
        (result[5] = result[5] || []).push(page);
        continue;
      }
      if (checkLeftOverflow(page, diffStart)) {
        (result[1] = result[1] || []).push(page);
        continue;
      }
      result.push(page);
    }
    return result;
  }, [currentPage, totalPages]); // eslint-disable-line

  return (
    <div
      data-testid={testId}
      className={`psui-pagination-container psui-pagination-multiple${
        disabled ? ' psui-pagination-disabled' : ''
      }${checkClassName(className)}`}
    >
      <div className={`psui-pagination-wrapper${standalone ? ' psui-pagination-standalone' : ''}`}>
        <PaginationNavButton
          type="previous"
          testId={testId ? `${testId}-prev-button` : null}
          isDisabled={disabled || currentPage === 1}
          onClick={() => pageChange(currentPage - 1)}
        />
        {pages.map(item => {
          // OVERFLOW IF ITEM IS ARRAY > 1
          if (Array.isArray(item) && item.length > 1) {
            return (
              <OverflowMenu
                key={item[0]}
                testId={testId ? `${testId}-overflow` : null}
                isDisabled={disabled}
              >
                {item.map(page => (
                  <OverflowMenuItem
                    key={page}
                    testId={testId ? `${testId}-overflow-item-${page}` : null}
                    isDisabled={disabled || disabledPages.includes(page)}
                    onClick={() => pageChange(page)}
                  >
                    {page}
                  </OverflowMenuItem>
                ))}
              </OverflowMenu>
            );
          }
          // BUTTON IF ITEM IS NOT ARRAY OR ARRAY === 1
          const page = item[0] || item;
          return (
            <PaginationNumberButton
              key={page}
              testId={testId ? `${testId}-page-${page}` : null}
              isDisabled={disabled || disabledPages.includes(page)}
              isActive={currentPage === page}
              onClick={() => pageChange(page)}
            >
              {page}
            </PaginationNumberButton>
          );
        })}
        <PaginationNavButton
          type="next"
          testId={testId ? `${testId}-next-button` : null}
          isDisabled={disabled || currentPage === totalPages}
          onClick={() => pageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
}

PaginationMultiple.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
  options: PropTypes.shape({
    disabled: PropTypes.bool,
    disabledPages: PropTypes.arrayOf(PropTypes.number),
    standalone: PropTypes.bool,
  }),
};

PaginationMultiple.defaultProps = {
  testId: null,
  className: '',
  totalPages: null,
  currentPage: 1,
  onChangePage: () => {},
  options: {
    disabled: false,
    disabledPages: [],
    standalone: false,
  },
};

export default PaginationMultiple;
