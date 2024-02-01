import React from 'react';
import PropTypes from 'prop-types';

function AvatarImage({ testId, className, sourceImg, type, size }) {
  return (
    <div
      data-testid={testId}
      className={`psui-avatar psui-avatar-${size} psui-avatar-${type} psui-type-label ${className}`}
    >
      <img src={sourceImg} alt="Avatar" />
    </div>
  );
}

AvatarImage.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  sourceImg: PropTypes.string,
  type: PropTypes.oneOf(['fill', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'very-large']),
};

AvatarImage.defaultProps = {
  testId: null,
  className: '',
  sourceImg: '',
  type: 'fill',
  size: 'medium',
};

export default AvatarImage;
