import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ testId, type, value, placeholder, className, isFluid, isDisabled, onChange }) {
  return (
    <div
      className={`text-input-container ${isFluid ? 'fluid-text-input' : ''} ${
        isDisabled ? 'disabled-text-input' : ''
      } ${className}`}
    >
      <input
        data-testid={testId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        disabled={isDisabled}
      />
    </div>
  );
}

TextInput.propTypes = {
  testId: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  isFluid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  testId: null,
  type: 'text',
  placeholder: '',
  className: '',
  isFluid: false,
  isDisabled: false,
  onChange: () => {},
};

export default TextInput;
