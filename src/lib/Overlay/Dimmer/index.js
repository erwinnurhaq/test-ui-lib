import React from 'react';
import PropTypes from 'prop-types';

function Dimmer({ testId, className, isBlurred, onClick }) {
  return (
    <div
      data-testid={testId}
      className={`${className} ${isBlurred ? 'psui-dimmer-blur' : 'psui-dimmer'}`}
      onClick={onClick}
    />
  );
}

Dimmer.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  isBlurred: PropTypes.bool,
  onClick: PropTypes.func,
};

Dimmer.defaultProps = {
  testId: null,
  className: '',
  isBlurred: false,
  onClick: () => {},
};

export default Dimmer;
