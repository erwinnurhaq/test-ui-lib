import React from 'react';
import PropTypes from 'prop-types';

import checkFluid from '../../../helpers/checkFluid';
import combineClassNames from '../../../helpers/combineClassNames';
import TextInputTooltip from './TextInputTooltip';

/**
 * @type React.FC<TextInputContainerProps>
 */
const TextInputContainer = React.forwardRef((props, ref) => {
  const { label, testId, className, id, options = {}, children, ...omittedArgs } = props;
  const {
    tooltipContent = '',
    tooltipPosition = 'top',
    tooltipClassName = '',
    hideLabel = false,
    hideInfo = false,
    fluid = false,
    disabled = false,
    required = false,
    ghost = false,
    requiredText = 'Required field',
    addonLeft = '',
    addonRight = '',
  } = options;

  const isWithTooltipRightSide = !fluid && !label && tooltipContent;
  const isAddonString = addon => (typeof addon === 'string' ? ' psui-px-2 psui-type-label' : '');
  const isAddonLeft = isLeft => {
    if (ghost) return ' psui-border-none';
    if (isLeft) return ' psui-border-r-0';
    return ' psui-border-l-0';
  };

  return (
    <div
      data-testid={testId ? `${testId}-wrapper` : null}
      className={combineClassNames(
        'psui-text-input-container',
        isWithTooltipRightSide ? ' psui-text-input-container__with-tooltip' : '',
        disabled ? ' psui-text-input-disabled' : '',
        checkFluid(fluid),
        className
      )}
      ref={ref}
      {...omittedArgs}
    >
      {!hideLabel && (
        <div className="psui-text-input-label-container">
          <label htmlFor={id} className="psui-type-label psui-text-input-label">
            {label}
          </label>
          {label && tooltipContent && (
            <TextInputTooltip
              testId={testId}
              position={tooltipPosition}
              className={tooltipClassName}
            >
              {tooltipContent}
            </TextInputTooltip>
          )}
        </div>
      )}
      <div className="psui-text-input-wrapper-container">
        {addonLeft && (
          <div className={`psui-text-input-addon${isAddonLeft(true)}${isAddonString(addonLeft)}`}>
            {addonLeft}
          </div>
        )}
        <div className="psui-text-input-wrapper">{children}</div>
        {addonRight && (
          <div className={`psui-text-input-addon${isAddonLeft(false)}${isAddonString(addonRight)}`}>
            {addonRight}
          </div>
        )}
        {!label && tooltipContent && (
          <TextInputTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
            {tooltipContent}
          </TextInputTooltip>
        )}
      </div>
      {!hideInfo && (
        <div className="psui-text-input-required">
          {required && requiredText && !ghost && (
            <div data-testid={testId ? `${testId}-required-text` : null}>* {requiredText}</div>
          )}
        </div>
      )}
    </div>
  );
});

const TextInputContainerProps = {
  label: PropTypes.string,
  className: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.shape({
    tooltipContent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tooltipClassName: PropTypes.string,
    hideLabel: PropTypes.bool,
    hideInfo: PropTypes.bool,
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    ghost: PropTypes.bool,
    requiredText: PropTypes.string,
    addonLeft: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    addonRight: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TextInputContainer.propTypes = TextInputContainerProps;

TextInputContainer.defaultProps = {
  label: '',
  className: '',
  testId: null,
  id: null,
  options: {
    tooltipContent: '',
    tooltipPosition: 'top',
    tooltipClassName: '',
    hideLabel: false,
    hideInfo: false,
    fluid: false,
    disabled: false,
    required: false,
    ghost: false,
    requiredText: 'Required field',
    addonLeft: '',
    addonRight: '',
  },
  children: '',
};

export default TextInputContainer;
