import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function PasswordInputEye({ testId, onToggleEye, disabled }) {
  const [show, setShow] = React.useState(false);
  return (
    <button
      type="button"
      data-testid={testId ? `${testId}-eye-button` : null}
      className="psui-text-input-password-eye"
      onClick={() => {
        setShow(!show);
        onToggleEye();
      }}
      disabled={disabled}
    >
      {!show ? (
        <FaEye className="psui-text-input-password-eye-icon" />
      ) : (
        <FaEyeSlash className="psui-text-input-password-eye-icon" />
      )}
    </button>
  );
}

PasswordInputEye.propTypes = {
  testId: PropTypes.string,
  onToggleEye: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

PasswordInputEye.defaultProps = {
  testId: null,
};

export default PasswordInputEye;
