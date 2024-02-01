import React from 'react';
import PropTypes from 'prop-types';

function AvatarInitial({ testId, className, initial, type, size, customInitial }) {
  const handleGetInitial = name => {
    let initials = name.split(' ');

    if (initials.length > 1) {
      initials = initials.shift().charAt(0) + initials.pop().charAt(0);
      if (initials.length > 2) {
        initials.substring(0, 2);
      }
    } else {
      initials = name.substring(0, 2);
    }

    return initials.toUpperCase();
  };

  return (
    <div
      data-testid={testId}
      className={`psui-avatar psui-avatar-${size} psui-avatar-${type} psui-type-label ${className}`}
    >
      {customInitial || handleGetInitial(initial)}
    </div>
  );
}

AvatarInitial.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  initial: PropTypes.string,
  type: PropTypes.oneOf(['fill', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'very-large']),
  customInitial: PropTypes.string,
};

AvatarInitial.defaultProps = {
  testId: null,
  className: '',
  initial: '',
  type: 'fill',
  size: 'medium',
  customInitial: '',
};

export default AvatarInitial;
