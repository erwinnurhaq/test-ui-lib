import React from 'react';
import PropTypes from 'prop-types';

function Tab({ testId, className, selectedId, data, isDisabled }) {
  function getDisabledClassName(isSelected) {
    if (!isDisabled) {
      return '';
    }

    if (isSelected) {
      return 'psui-tab-item--active--disabled';
    }

    return 'psui-tab-item--disabled';
  }

  return (
    <div data-testid={testId} className={`psui-tab ${className}`}>
      {data.map(item => {
        const isSelected = item.id === selectedId;

        return (
          <div
            key={item.id}
            className={`${
              isSelected ? 'psui-tab-item--active ' : 'psui-tab-item'
            } ${getDisabledClassName(isSelected)}`}
            onClick={() => {
              if (isDisabled) {
                return;
              }

              item.onClick(item.id);
            }}
          >
            <div className="psui-type-label psui-p-1">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

Tab.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  selectedId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDisabled: PropTypes.bool,
};

Tab.defaultProps = {
  testId: null,
  className: '',
  isDisabled: false,
};

export default Tab;
