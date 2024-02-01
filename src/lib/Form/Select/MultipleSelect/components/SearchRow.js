import React from 'react';
import PropTypes from 'prop-types';
import { RiSearch2Line, RiCloseCircleFill } from 'react-icons/ri';

function SearchRow({ testId, value, placeholder, onChange }) {
  return (
    <div className="psui-relative">
      <RiSearch2Line className="psui-select-multiple-options__search-icon" />
      <input
        type="text"
        data-testid={testId ? `${testId}-search` : null}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="psui-select-multiple-options__search-input"
      />
      <hr className="psui-select-multiple-options__divider" />
      {value && (
        <RiCloseCircleFill
          data-testid={testId ? `${testId}-clear-button` : null}
          className="psui-select-multiple-options__clear-icon"
          onClick={() => onChange('')}
        />
      )}
    </div>
  );
}

SearchRow.propTypes = {
  testId: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SearchRow.defaultProps = {
  testId: null,
};

export default SearchRow;
