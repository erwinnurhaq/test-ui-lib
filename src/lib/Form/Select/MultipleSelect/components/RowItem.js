import React from 'react';
import PropTypes from 'prop-types';

function RowItem({ testId, onClick = () => {}, children }) {
  return (
    <div data-testid={testId} className="psui-select-multiple-options__row" onClick={onClick}>
      <div className="psui-select-multiple-options__row-label">{children}</div>
    </div>
  );
}

RowItem.propTypes = {
  testId: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

RowItem.defaultProps = {
  testId: null,
  onClick: () => {},
  children: '',
};

export default RowItem;
