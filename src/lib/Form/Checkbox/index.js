import React from 'react';
import PropTypes from 'prop-types';

import combineClassNames from '../../helpers/combineClassNames';

/**
 * @type React.FC<CheckboxPropTypes>
 */
const Checkbox = React.forwardRef((props, ref) => {
  const {
    testId,
    testIdLabel,
    colorType,
    className,
    isDisabled,
    id,
    name,
    label,
    isIndeterminate,
    ...omittedArgs
  } = props;

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-checkbox-parent',
        colorType === 'yellow' && 'psui-checkbox-parent--yellow',
        isIndeterminate && 'psui-checkbox-parent--indeterminate',
        className
      )}
    >
      <input
        ref={ref}
        data-testid={testId}
        type="checkbox"
        id={id}
        name={name}
        className={combineClassNames('psui-checkbox-input', isIndeterminate && 'indeterminate')}
        disabled={isDisabled}
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

const CheckboxPropTypes = {
  testId: PropTypes.string,
  testIdLabel: PropTypes.string,
  colorType: PropTypes.oneOf(['yellow', 'default']),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  isIndeterminate: PropTypes.bool,
  label: PropTypes.string,
};

Checkbox.propTypes = CheckboxPropTypes;

Checkbox.defaultProps = {
  testId: null,
  testIdLabel: null,
  colorType: 'default',
  className: '',
  isDisabled: false,
  id: '',
  name: '',
  isIndeterminate: false,
  label: '',
};

export default Checkbox;
