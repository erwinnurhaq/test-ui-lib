import React from 'react';
import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

import checkFluid from '../../../helpers/checkFluid';
import combineClassNames from '../../../helpers/combineClassNames';
import SelectSkeleton from '../components/SelectSkeleton';
import SelectTooltip from '../components/SelectTooltip';

/**
 * @type React.FC<SelectProps>
 */
const Select = React.forwardRef((props, ref) => {
  const {
    label,
    testId,
    className,
    id,
    name,
    value,
    options = {},
    onChange,
    children,
    ...omittedArgs
  } = props;

  const {
    tooltipContent = '',
    tooltipPosition = 'top',
    tooltipClassName = '',
    autoWidth = false,
    hideLabel = false,
    hideInfo = false,
    fluid = false,
    disabled = false,
    required = false,
    skeleton = false,
    requiredText = 'Required field',
  } = options;

  if (skeleton) {
    return (
      <SelectSkeleton
        testId={testId}
        className={className}
        fluid={fluid}
        withLabel={label}
        hideLabel={hideLabel}
        hideInfo={hideInfo}
      />
    );
  }

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-select-container psui-select-container-regular',
        disabled ? ' psui-select-disabled' : '',
        checkFluid(fluid),
        className
      )}
    >
      {!hideLabel && (
        <div className="psui-select-label-container">
          <label htmlFor={id} className="psui-type-label psui-select-label">
            {label}
          </label>
          {label && tooltipContent && (
            <SelectTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
              {tooltipContent}
            </SelectTooltip>
          )}
        </div>
      )}
      <div className="psui-flex psui-items-center">
        <div
          className={combineClassNames(
            'psui-select-wrapper psui-select-wrapper-regular',
            autoWidth ? ' psui-w-auto' : '',
            checkFluid(fluid)
          )}
        >
          <select
            ref={ref}
            data-testid={testId}
            id={id}
            name={name}
            className="psui-type-label psui-select-common psui-select-regular"
            value={value}
            disabled={disabled}
            onChange={e => {
              e.currentTarget.blur();
              onChange(e);
            }}
            required={required}
            {...omittedArgs}
          >
            {children}
          </select>
          <div className="psui-select-caret-container">
            <BiCaretDown className="psui-select-caret" />
          </div>
        </div>
        {!label && tooltipContent && (
          <SelectTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
            {tooltipContent}
          </SelectTooltip>
        )}
      </div>
      {!hideInfo && (
        <div className="psui-select-required">
          {required && (
            <div
              data-testid={testId ? `${testId}-required-text` : null}
              className="psui-select-required-text"
            >
              <span>*</span> {requiredText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

const SelectProps = {
  label: PropTypes.string,
  testId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  options: PropTypes.shape({
    tooltipContent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tooltipClassName: PropTypes.string,
    autoWidth: PropTypes.bool,
    hideLabel: PropTypes.bool,
    hideInfo: PropTypes.bool,
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    skeleton: PropTypes.bool,
    requiredText: PropTypes.string,
  }),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Select.propTypes = SelectProps;

Select.defaultProps = {
  label: '',
  testId: null,
  id: null,
  name: null,
  value: '',
  className: '',
  options: {
    tooltipContent: '',
    tooltipPosition: 'top',
    tooltipClassName: '',
    autoWidth: false,
    hideLabel: false,
    hideInfo: false,
    fluid: false,
    disabled: false,
    required: false,
    skeleton: false,
    requiredText: 'Required field',
  },
  onChange: () => {},
  children: [],
};

export default Select;
