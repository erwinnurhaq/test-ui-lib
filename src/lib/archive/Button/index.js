import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children,
  testId,
  className,
  type,
  isSubmitBtn,
  isFluid,
  disabledStyleCondition,
  disabledFuncCondition,
  onClick,
}) {
  let defaultClassname = 'btn';
  if (type === 'primary') {
    defaultClassname = 'btn primary-btn';
  }
  if (type === 'secondary') {
    defaultClassname = 'btn secondary-btn';
  }
  if (type === 'tertiary') {
    defaultClassname = 'btn tertiary-btn';
  }

  if (isSubmitBtn) {
    return (
      <button
        data-testid={testId}
        type="submit"
        className={`${defaultClassname} ${disabledStyleCondition ? 'disabled-btn' : ''} ${
          isFluid ? 'fluid-btn' : ''
        } ${className}`}
        disabled={disabledFuncCondition}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      data-testid={testId}
      type={'button'}
      className={`${defaultClassname} ${disabledStyleCondition ? 'disabled-btn' : ''} ${
        isFluid ? 'fluid-btn' : ''
      } ${className}`}
      onClick={() => onClick()}
      disabled={disabledFuncCondition}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  isSubmitBtn: PropTypes.bool,
  isFluid: PropTypes.bool,
  disabledStyleCondition: PropTypes.bool,
  disabledFuncCondition: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  testId: null,
  type: 'primary',
  isSubmitBtn: false,
  isFluid: false,
  disabledStyleCondition: false,
  disabledFuncCondition: false,
  onClick: () => {},
};

export default Button;
