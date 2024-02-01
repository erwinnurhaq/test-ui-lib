import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isShow, errorMessage }) => {
  if (!isShow) return null;

  return (
    <div className="loader-container">
      <div className="loader__dimmer" />
      <div className="loader__content">
        <div className="loader__content__loader-icon">
          <div className="loader__content__loader-icon__inner-circle" />
          <div className="loader__content__loader-icon__outer-circle" />
        </div>
        {errorMessage ? <span>{errorMessage}</span> : 'Loading'}
      </div>
    </div>
  );
};

Loader.defaultProps = {
  errorMessage: '',
};

Loader.propTypes = {
  isShow: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
};

export default Loader;
