import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

function getClassNameFromColorType(colorType) {
  switch (colorType) {
    case 'yellow':
      return 'psui-toggle-parent--yellow';
    default:
      return '';
  }
}

/**
 * @type React.FC<TogglePropTypes>
 */
const Toggle = React.forwardRef((props, ref) => {
  const {
    testId,
    testIdLabel,
    colorType,
    className,
    isDisabled,
    isLabelInside,
    id,
    checked,
    label,
    ...omittedArgs
  } = props;

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-toggle-parent',
        !isLabelInside ? '' : 'psui-toggle-parent--label-inside',
        getClassNameFromColorType(colorType),
        !checked ? '' : 'psui-toggle-parent--checked',
        className
      )}
    >
      <input
        ref={ref}
        data-testid={testId}
        type="checkbox"
        id={id}
        className="psui-toggle-input"
        disabled={isDisabled}
        checked={checked}
        {...omittedArgs}
      />
      {label && (
        <label data-testid={testIdLabel} htmlFor={id} className="psui-type-label">
          {label}
        </label>
      )}
    </div>
  );
});

const TogglePropTypes = {
  testId: PropTypes.string,
  testIdLabel: PropTypes.string,
  colorType: PropTypes.oneOf(['default', 'yellow']),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLabelInside: PropTypes.bool,
  id: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Toggle.propTypes = TogglePropTypes;

Toggle.defaultProps = {
  testId: null,
  testIdLabel: null,
  colorType: 'default',
  className: '',
  isDisabled: false,
  isLabelInside: false,
  id: '',
  checked: false,
  label: '',
};

export default Toggle;
