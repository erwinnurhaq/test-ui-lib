import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

/**
 * @type React.FC<SkeletonButtonProps>
 */
const SkeletonButton = React.forwardRef((props, ref) => {
  const { testId, className, isFluid, ...omittedArgs } = props;
  return (
    <button
      ref={ref}
      data-testid={testId}
      className={combineClassNames(
        className,
        'psui-button-skeleton',
        !isFluid ? '' : 'psui-w-full'
      )}
      type="button"
      onClick={() => {}}
      disabled
      {...omittedArgs}
    />
  );
});

const SkeletonButtonProps = {
  testId: PropTypes.string,
  className: PropTypes.string,
  isFluid: PropTypes.bool,
};

SkeletonButton.propTypes = SkeletonButtonProps;

SkeletonButton.defaultProps = {
  testId: null,
  className: '',
  isFluid: false,
};

export default SkeletonButton;
