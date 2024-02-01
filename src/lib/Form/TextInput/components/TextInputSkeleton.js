import React from 'react';
import PropTypes from 'prop-types';

import checkFluid from '../../../helpers/checkFluid';
import checkClassName from '../../../helpers/checkClassName';

function TextInputSkeleton({ testId, className, fluid, withLabel, withMargin, hideLabel, size }) {
  function inputSkeletonSize() {
    switch (size) {
      case 'small':
        return ' psui-text-input-skeleton-small';
      case 'regular':
        return ' psui-text-input-skeleton-regular';
      case 'large':
        return ' psui-text-input-skeleton-large';
      default:
        return '';
    }
  }
  return (
    <div
      data-testid={testId ? `${testId}-skeleton` : null}
      className={`psui-text-input-container${checkFluid(fluid)}${checkClassName(className)}`}
    >
      {!hideLabel && (
        <div
          className={`psui-text-input-skeleton-label${withLabel ? '' : ' psui-bg-transparent'}`}
        />
      )}
      <div
        className={`psui-text-input-skeleton${inputSkeletonSize()}${checkFluid(fluid)}${
          withMargin ? '' : ' psui-mb-0'
        }`}
      />
    </div>
  );
}

TextInputSkeleton.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  withMargin: PropTypes.bool,
  withLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  hideLabel: PropTypes.bool,
};

TextInputSkeleton.defaultProps = {
  testId: null,
  className: '',
  fluid: false,
  withMargin: true,
  withLabel: '',
  size: 'regular',
  hideLabel: false,
};

export default TextInputSkeleton;
