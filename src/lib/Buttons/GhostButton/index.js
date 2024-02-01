import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

function getClassNameFromColorType(colorType) {
  switch (colorType) {
    case 'danger':
      return 'psui-button-ghost--danger';
    case 'yellow':
      return 'psui-button-ghost--yellow';
    default:
      return 'psui-button-ghost';
  }
}

/**
 * @type React.FC<GhostButtonPropTypes>
 */
const GhostButton = React.forwardRef((props, ref) => {
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
        !isDisabled ? 'psui-button-text-ghost' : 'psui-button-text-ghost-disabled',
        !isDisabled ? 'psui-button-bg-ghost' : 'psui-button-bg-ghost-disabled',
        !isDisabled ? 'psui-button-border-ghost' : 'psui-button-border-ghost-disabled',
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

const GhostButtonPropTypes = {
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

GhostButton.propTypes = GhostButtonPropTypes;

GhostButton.defaultProps = {
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

export default GhostButton;
