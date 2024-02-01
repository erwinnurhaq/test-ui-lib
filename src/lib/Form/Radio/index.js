import React from 'react';
import PropTypes from 'prop-types';
import combineClassNames from '../../helpers/combineClassNames';

/**
 * @type React.FC<RadioProps>
 */
const Radio = React.forwardRef((props, ref) => {
  const {
    testId,
    testIdLabel,
    colorType,
    className,
    isDisabled,
    id,
    name,
    label,
    ...omittedArgs
  } = props;

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-radio-parent',
        colorType === 'yellow' && 'psui-radio-parent--yellow',
        className
      )}
    >
      <input
        ref={ref}
        data-testid={testId}
        type="radio"
        id={id}
        name={name}
        className="psui-radio-input"
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

const RadioProps = {
  testId: PropTypes.string,
  testIdLabel: PropTypes.string,
  colorType: PropTypes.oneOf(['yellow', 'default']),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

Radio.propTypes = RadioProps;

Radio.defaultProps = {
  testId: null,
  testIdLabel: null,
  colorType: 'default',
  className: '',
  isDisabled: false,
  id: '',
  name: '',
  label: '',
};

export default Radio;
