import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

function getClassNameFromColorType(colorType) {
  switch (colorType) {
    case 'danger':
      return 'psui-button-secondary--danger';
    case 'yellow':
      return 'psui-button-secondary--yellow';
    default:
      return 'psui-button-secondary';
  }
}

/**
 * @type React.FC<SecondaryButtonPropTypes>
 */
const SecondaryButton = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    type,
    colorType,
    isFluid,
    isSmall,
    isDisabled,
    onClick,
    children,
    ...omittedArgs
  } = props;

  return (
    <button
      ref={ref}
      data-testid={testId}
      className={combineClassNames(
        'psui-type-button',
        !isDisabled ? 'psui-button-common' : 'psui-button-common-disabled',
        getClassNameFromColorType(colorType),
        !isFluid ? '' : 'psui-w-full',
        !isSmall ? 'psui-button-size-normal' : 'psui-button-size-small',
        !isDisabled ? 'psui-button-text-secondary' : 'psui-button-text-secondary-disabled',
        !isDisabled ? 'psui-button-bg-secondary' : 'psui-button-bg-secondary-disabled',
        !isDisabled ? 'psui-button-border-secondary' : 'psui-button-border-secondary-disabled',
        className
      )}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...omittedArgs}
    >
      {children}
    </button>
  );
});

const SecondaryButtonPropTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  colorType: PropTypes.oneOf(['default', 'danger', 'yellow']),
  isFluid: PropTypes.bool,
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

SecondaryButton.propTypes = SecondaryButtonPropTypes;

SecondaryButton.defaultProps = {
  testId: null,
  className: '',
  type: 'button',
  colorType: 'default',
  isFluid: false,
  isSmall: false,
  isDisabled: false,
  onClick: () => {},
  children: 'Button',
};

export default SecondaryButton;
