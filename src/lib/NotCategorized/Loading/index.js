import React from 'react';
import PropTypes from 'prop-types';
import { RiLoader4Fill } from 'react-icons/ri';

function Loading({ testId, className, type, isShow, isError, text }) {
  if (!isShow) return null;

  return (
    <div data-testid={testId} className={`${className} psui-inline-block`}>
      <div className="psui-py-1">
        <RiLoader4Fill
          className={`psui-block ${
            type === 'normal' ? 'psui-text-5xl' : 'psui-text-xl'
          } psui-text-ps-yellow-50 psui-w-auto psui-mx-auto psui-animate-spin`}
        />
      </div>
      <div
        className={`psui-text-center psui-type-label ${
          isError ? 'psui-text-ps-red-50' : 'psui-text-ps-black-100'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

Loading.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'small']),
  isShow: PropTypes.bool,
  isError: PropTypes.bool,
  text: PropTypes.string,
};

Loading.defaultProps = {
  testId: null,
  className: '',
  type: 'normal',
  isShow: true,
  isError: false,
  text: '',
};

export default Loading;
