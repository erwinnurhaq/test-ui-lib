import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

/**
 * @type React.FC<IconButtonProps>
 */
const IconButton = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    type,
    isSmall,
    isDisabled,
    onClick,
    tooltipPosition,
    tooltipText,
    children,
    ...omittedArgs
  } = props;

  function getTooltipPosition() {
    switch (tooltipPosition) {
      case 'top': {
        return 'psui-button-iconbtn__tooltip--top';
      }
      case 'left': {
        return 'psui-button-iconbtn__tooltip--left';
      }
      case 'right': {
        return 'psui-button-iconbtn__tooltip--right';
      }
      default: {
        return 'psui-button-iconbtn__tooltip--bottom';
      }
    }
  }

  return (
    <div className="psui-button-iconbtn__tooltip-container">
      <button
        ref={ref}
        data-testid={testId}
        className={combineClassNames(
          className,
          'psui-button-iconbtn',
          'psui-type-button',
          !isDisabled ? 'psui-button-common' : 'psui-button-common-disabled',
          !isSmall ? 'psui-button-size-normal' : 'psui-button-size-small',
          !isDisabled ? 'psui-button-text-iconbtn' : 'psui-button-text-iconbtn-disabled',
          !isDisabled ? 'psui-button-bg-iconbtn' : 'psui-button-bg-iconbtn-disabled',
          !isDisabled ? 'psui-button-border-iconbtn' : 'psui-button-border-iconbtn-disabled'
        )}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        {...omittedArgs}
      >
        {children}
      </button>
      <div className={combineClassNames('psui-button-iconbtn__tooltip', getTooltipPosition())}>
        {tooltipText}
      </div>
    </div>
  );
});

const IconButtonProps = {
  testId: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  tooltipText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

IconButton.propTypes = IconButtonProps;

IconButton.defaultProps = {
  testId: null,
  className: '',
  type: 'button',
  isSmall: false,
  tooltipPosition: 'bottom',
  tooltipText: 'Tooltip',
  isDisabled: false,
  onClick: () => {},
  children: 'Button',
};

export default IconButton;
