import React from 'react';
import PropTypes from 'prop-types';

import checkFluid from '../../../helpers/checkFluid';
import combineClassNames from '../../../helpers/combineClassNames';

/**
 * @type React.FC<SelectSkeletonProps>
 */
const SelectSkeleton = React.forwardRef((props, ref) => {
  const { testId, className, fluid, withLabel, hideLabel, hideInfo, small, ...omittedArgs } = props;

  return (
    <div
      ref={ref}
      data-testid={testId ? `${testId}-skeleton` : null}
      className={combineClassNames(
        'psui-select-container',
        small ? 'psui-select-container-small' : 'psui-select-container-regular',
        checkFluid(fluid),
        className
      )}
      {...omittedArgs}
    >
      {!small && !hideLabel && (
        <div
          className={combineClassNames(
            'psui-select-skeleton-regular-label',
            withLabel ? '' : ' psui-bg-transparent'
          )}
        />
      )}
      <div
        className={combineClassNames(
          small ? 'psui-select-skeleton-small' : 'psui-select-skeleton-regular',
          !hideInfo ? '' : 'psui-mb-0',
          checkFluid(fluid)
        )}
      />
    </div>
  );
});

const SelectSkeletonProps = {
  testId: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  withLabel: PropTypes.string,
  small: PropTypes.bool,
  hideLabel: PropTypes.bool,
  hideInfo: PropTypes.bool,
};

SelectSkeleton.propTypes = SelectSkeletonProps;

SelectSkeleton.defaultProps = {
  testId: null,
  className: '',
  fluid: false,
  withLabel: '',
  small: false,
  hideLabel: false,
  hideInfo: false,
};

export default SelectSkeleton;
