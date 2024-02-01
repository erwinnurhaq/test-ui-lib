import React from 'react';
import PropTypes from 'prop-types';

function ContentSwitcher({ testId, className, selectedId, data, isDisabled, isSkeleton }) {
  function getDisabledClassName(isSelected) {
    if (!isDisabled) {
      return '';
    }

    if (isSelected) {
      return 'psui-content-switcher-item--active--disabled';
    }

    return 'psui-content-switcher-item--disabled';
  }

  if (isSkeleton) {
    return <div data-testid={testId} className={`psui-content-switcher-skeleton ${className}`} />;
  }

  return (
    <div data-testid={testId} className={`psui-content-switcher ${className}`}>
      {data.map(item => {
        const isSelected = item.id === selectedId;

        return (
          <div
            key={item.id}
            className={`${
              isSelected ? 'psui-content-switcher-item--active' : 'psui-content-switcher-item'
            } ${getDisabledClassName(isSelected)}`}
            onClick={() => {
              if (isDisabled) {
                return;
              }

              item.onClick(item.id);
            }}
            tabIndex={isDisabled ? null : item.tabIndex || '-1'}
          >
            <div className="psui-type-label psui-p-2">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

ContentSwitcher.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  selectedId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool,
  isSkeleton: PropTypes.bool,
};

ContentSwitcher.defaultProps = {
  testId: '',
  className: '',
  isDisabled: false,
  isSkeleton: false,
};

export default ContentSwitcher;
