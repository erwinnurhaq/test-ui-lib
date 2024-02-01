import React from 'react';
import PropTypes from 'prop-types';

function Link({ testId, className, href, target, isDisabled, children }) {
  if (isDisabled) {
    return (
      <button
        type="button"
        data-testid={testId}
        className={`psui-type-button psui-link${isDisabled ? ' psui-link--disabled' : ''}${
          className ? ` ${className}` : ''
        }`}
        onClick={() => {}}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      data-testid={testId}
      className={`psui-type-button psui-link${className ? ` ${className}` : ''}`}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Link.defaultProps = {
  testId: null,
  className: null,
  href: '#',
  target: null,
  isDisabled: false,
  children: 'Link',
};

function ControlledLink({ testId, className, onClick, isDisabled, children }) {
  return (
    <button
      type="button"
      data-testid={testId}
      className={`psui-type-button psui-link${isDisabled ? ' psui-link--disabled' : ''}${
        className ? ` ${className}` : ''
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

ControlledLink.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ControlledLink.defaultProps = {
  testId: null,
  className: null,
  onClick: () => {},
  isDisabled: false,
  children: 'Link',
};

export { Link, ControlledLink };
