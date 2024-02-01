import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ testId, value, className, isFluid, isDisabled, onChange, children }) {
  return (
    <div className={`dropdown-select-container ${isFluid ? 'fluid-dropdown' : ''} ${className}`}>
      <select
        data-testid={testId}
        className={`dropdown-select ${isDisabled ? 'disabled-dropdown' : ''}`}
        value={value}
        disabled={isDisabled}
        onChange={onChange}
      >
        {children}
      </select>
      <i>
        <FontAwesomeIcon icon={faChevronDown} />
      </i>
    </div>
  );
}

Dropdown.propTypes = {
  testId: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  isFluid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
};

Dropdown.defaultProps = {
  testId: null,
  className: '',
  isFluid: false,
  isDisabled: false,
  onChange: () => {},
  children: [],
};

export default Dropdown;
