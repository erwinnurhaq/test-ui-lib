import React from 'react';
import PropTypes from 'prop-types';

import TextInputSkeleton from '../components/TextInputSkeleton';
import TextInputContainer from '../components/TextInputContainer';

/**
 * @type React.FC<TextAreaInputProps>
 */
const TextAreaInput = React.forwardRef((props, ref) => {
  const {
    label,
    testId,
    className,
    id,
    rows,
    maxLength,
    onChange,
    options = {},
    ...omittedArgs
  } = props;

  const {
    fluid = false,
    disabled = false,
    required = false,
    skeleton = false,
    ghost = false,
    hideLabel = false,
    hideInfo = false,
  } = options;

  if (skeleton) {
    return (
      <TextInputSkeleton
        testId={testId}
        className={className}
        fluid={fluid}
        withLabel={label}
        withMargin={!hideInfo}
        hideLabel={hideLabel}
        size="large"
      />
    );
  }

  return (
    <TextInputContainer
      testId={testId}
      label={label}
      className={className}
      id={id}
      options={options}
    >
      <textarea
        data-testid={testId}
        className={`psui-type-label psui-text-input-common ${
          ghost ? 'psui-text-input-ghost' : 'psui-text-input-regular'
        } psui-text-input-area`}
        ref={ref}
        id={id}
        rows={rows}
        maxLength={maxLength}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...omittedArgs}
      />
    </TextInputContainer>
  );
});

const TextAreaInputProps = {
  label: PropTypes.string,
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  options: PropTypes.shape({
    tooltipContent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tooltipClassName: PropTypes.string,
    hideLabel: PropTypes.bool,
    hideInfo: PropTypes.bool,
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    skeleton: PropTypes.bool,
    ghost: PropTypes.bool,
    requiredText: PropTypes.string,
    addonLeft: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    addonRight: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
};

TextAreaInput.propTypes = TextAreaInputProps;

TextAreaInput.defaultProps = {
  label: '',
  testId: null,
  className: '',
  id: null,
  rows: 5,
  maxLength: null,
  onChange: () => {},
  options: {
    tooltipContent: '',
    tooltipPosition: 'top',
    tooltipClassName: '',
    hideLabel: false,
    hideInfo: false,
    fluid: false,
    disabled: false,
    required: false,
    skeleton: false,
    ghost: false,
    requiredText: 'Required field',
    addonLeft: '',
    addonRight: '',
  },
};

export default TextAreaInput;
