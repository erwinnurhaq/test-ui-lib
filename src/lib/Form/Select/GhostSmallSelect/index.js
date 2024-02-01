import React from 'react';
import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

import checkFluid from '../../../helpers/checkFluid';
import SelectSkeleton from '../components/SelectSkeleton';
import SelectTooltip from '../components/SelectTooltip';
import combineClassNames from '../../../helpers/combineClassNames';

/**
 * @type React.FC<GhostSmallSelectProps>
 */
const GhostSmallSelect = React.forwardRef((props, ref) => {
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
    fluid = false,
    disabled = false,
    required = false,
    skeleton = false,
  } = options;

  if (skeleton) {
    return (
      <SelectSkeleton small testId={testId} className={className} fluid={fluid} withLabel={label} />
    );
  }

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-select-container psui-select-container-ghost-small',
        disabled ? ' psui-select-disabled' : '',
        checkFluid(fluid),
        className
      )}
    >
      {label && tooltipContent && (
        <SelectTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
          {tooltipContent}
        </SelectTooltip>
      )}
      {label && (
        <label
          htmlFor={id}
          className={`psui-type-label psui-select-label${
            required && !value ? ' psui-text-red-500' : ''
          }`}
        >
          {label}
        </label>
      )}
      <div
        className={`psui-select-wrapper psui-select-wrapper-ghost-small${
          autoWidth ? ' psui-w-auto' : ''
        }${checkFluid(fluid)}`}
      >
        <select
          ref={ref}
          data-testid={testId}
          className="psui-type-label psui-select-common psui-select-ghost-small"
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={e => {
            e.currentTarget.blur();
            onChange(e);
          }}
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
  );
});

const GhostSmallSelectProps = {
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
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    skeleton: PropTypes.bool,
  }),
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

GhostSmallSelect.propTypes = GhostSmallSelectProps;

GhostSmallSelect.defaultProps = {
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
    fluid: false,
    disabled: false,
    required: false,
    skeleton: false,
  },
  onChange: () => {},
  children: [],
};

export default GhostSmallSelect;
