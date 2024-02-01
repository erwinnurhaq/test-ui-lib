import React from 'react';
import PropTypes from 'prop-types';

function LinkGroup({ testId, className, isVertical, children }) {
  return (
    <div
      data-testid={testId}
      className={`psui-link-group${isVertical ? ' psui-link-group--vertical' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}

LinkGroup.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  isVertical: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

LinkGroup.defaultProps = {
  testId: null,
  className: null,
  isVertical: false,
};

export default LinkGroup;
