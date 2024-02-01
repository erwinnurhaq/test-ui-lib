import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

function Accordion({ testId, className, isSkeleton, items, openedItemIds, openLabel, closeLabel }) {
  function onHeaderClicked(itemId, isItemOpen) {
    if (isItemOpen) {
      closeLabel(itemId);
    } else {
      openLabel(itemId);
    }
  }

  if (isSkeleton) {
    return (
      <div
        data-testid={testId}
        className={`psui-accordion-container psui-accordion-skeleton ${className}`}
      >
        <div className="psui-w-full psui-h-6 psui-bg-ps-black-30 psui-accordion-skeleton-item" />
        <div className="psui-w-full psui-h-6 psui-bg-ps-black-30 psui-accordion-skeleton-item" />
        <div className="psui-w-full psui-h-6 psui-bg-ps-black-30 psui-accordion-skeleton-item" />
        <div className="psui-w-full psui-h-6 psui-bg-ps-black-30 psui-accordion-skeleton-item" />
      </div>
    );
  }

  return (
    <div data-testid={testId} className={`psui-accordion-container ${className}`}>
      {items.map(item => {
        const isOpened = openedItemIds.includes(item.id);

        return (
          <div key={item.id} data-testid={`${testId}-${item.id}`} className="psui-accordion-item">
            <div
              className="psui-accordion-item-header__icon"
              onClick={() => onHeaderClicked(item.id, isOpened)}
            >
              {isOpened ? (
                <MdKeyboardArrowDown className="psui-text-xl psui-text-ps-black-40" />
              ) : (
                <MdKeyboardArrowRight className="psui-text-xl psui-text-ps-black-40" />
              )}
            </div>
            <div
              className="psui-type-subtitle-1 psui-accordion-item-header__label"
              onClick={() => onHeaderClicked(item.id, isOpened)}
            >
              Label
            </div>
            <div className="psui-accordion-item-content-empty-placeholder" />
            {isOpened ? <div className="psui-accordion-item-content">{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

Accordion.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  isSkeleton: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  openedItemIds: PropTypes.arrayOf(PropTypes.number),
  openLabel: PropTypes.func,
  closeLabel: PropTypes.func,
};

Accordion.defaultProps = {
  testId: '',
  className: '',
  isSkeleton: false,
  items: [],
  openedItemIds: [],
  openLabel: () => {},
  closeLabel: () => {},
};

export default Accordion;
