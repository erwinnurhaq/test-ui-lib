import React from 'react';
import PropTypes from 'prop-types';

import checkNullishObj from '../../../helpers/checkNullishObj';
import TextInputSkeleton from '../components/TextInputSkeleton';
import TextInputContainer from '../components/TextInputContainer';
import NumberInputArrows from '../components/NumberInputArrows';
import PasswordInputEye from '../components/PasswordInputEye';
import usePrefixSuffixWidth from '../components/usePrefixSuffixWidth';

/**
 * @type React.FC<TextInputProps>
 */
const TextInput = React.forwardRef((props, ref) => {
  const { label, testId, className, id, type, onChange, options = {}, ...omittedArgs } = props;
  const {
    hideNumberArrowStep = false,
    hideLabel = false,
    hideInfo = false,
    fluid = false,
    disabled = false,
    required = false,
    skeleton = false,
    ghost = false,
    prefix = '',
    suffix = '',
  } = options;

  const mainRef = React.useRef(null);
  const prefixRef = React.useRef(null);
  const suffixRef = React.useRef(null);

  const { prefixWidth, suffixWidth } = usePrefixSuffixWidth({
    type,
    prefix,
    suffix,
    prefixRef,
    suffixRef,
  });

  const onIncrement = () => {
    const element = mainRef.current.querySelector('input');
    element.stepUp();
    onChange({ target: { value: element.value } });
  };
  const onDecrement = () => {
    const element = mainRef.current.querySelector('input');
    element.stepDown();
    onChange({ target: { value: element.value } });
  };
  const onToggleEye = () => {
    const element = mainRef.current.querySelector('input');
    element.type = element.type === 'password' ? 'text' : 'password';
  };

  function handleSuffix() {
    if (!suffix && type !== 'number' && type !== 'password') return null;
    return (
      <div ref={suffixRef} className="psui-text-input-icon psui-right-3">
        {suffix}
        {type === 'password' && (
          <PasswordInputEye testId={testId} onToggleEye={onToggleEye} disabled={disabled} />
        )}
        {type === 'number' && !hideNumberArrowStep && (
          <NumberInputArrows
            testId={testId}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            disabled={disabled}
          />
        )}
      </div>
    );
  }

  if (skeleton) {
    return (
      <TextInputSkeleton
        testId={testId}
        className={className}
        fluid={fluid}
        withLabel={label}
        withMargin={!hideInfo}
        hideLabel={hideLabel}
        size="regular"
      />
    );
  }

  return (
    <TextInputContainer
      testId={testId}
      ref={mainRef}
      label={label}
      className={className}
      id={id}
      options={options}
    >
      <input
        data-testid={testId}
        className={`psui-type-label psui-text-input-common ${
          ghost ? 'psui-text-input-ghost' : 'psui-text-input-regular'
        }`}
        style={checkNullishObj({
          paddingLeft: prefixWidth,
          paddingRight: type === 'number' && hideNumberArrowStep ? null : suffixWidth,
        })}
        ref={ref}
        type={type}
        id={id}
        onChange={onChange}
        required={required}
        disabled={disabled}
        {...omittedArgs}
      />
      {prefix && (
        <div ref={prefixRef} className="psui-text-input-icon psui-left-3">
          {prefix}
        </div>
      )}
      {handleSuffix()}
    </TextInputContainer>
  );
});

const TextInputProps = {
  label: PropTypes.string,
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'tel', 'number']),
  onChange: PropTypes.func,
  options: PropTypes.shape({
    hideNumberArrowStep: PropTypes.bool,
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
    prefix: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    suffix: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    addonLeft: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    addonRight: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
};

TextInput.propTypes = TextInputProps;

TextInput.defaultProps = {
  label: '',
  testId: null,
  id: null,
  className: '',
  type: 'text',
  onChange: () => {},
  options: {
    hideNumberArrowStep: false,
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
    prefix: '',
    suffix: '',
    addonLeft: '',
    addonRight: '',
  },
};

export default TextInput;
