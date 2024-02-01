import React from 'react';
import PropTypes from 'prop-types';
import { IoPerson } from 'react-icons/io5';

function Avatar({ testId, className, type, size }) {
  return (
    <div
      data-testid={testId}
      className={`psui-avatar psui-avatar-${size} psui-avatar-${type} psui-type-label ${className}`}
    >
      <IoPerson className="psui-avatar-icon" />
    </div>
  );
}

Avatar.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['fill', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'very-large']),
};

Avatar.defaultProps = {
  testId: null,
  className: '',
  type: 'fill',
  size: 'medium',
};

export default Avatar;
