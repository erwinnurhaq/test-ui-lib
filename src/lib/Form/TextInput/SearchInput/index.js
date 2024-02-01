import React from 'react';
import PropTypes from 'prop-types';
import { RiSearch2Line, RiCloseCircleFill, RiLoader4Fill } from 'react-icons/ri';
import { GiSettingsKnobs } from 'react-icons/gi';

import checkFluid from '../../../helpers/checkFluid';
import combineClassNames from '../../../helpers/combineClassNames';
import TextInputSkeleton from '../components/TextInputSkeleton';

/**
 * @type React.FC<SearchInputProps>
 */
const SearchInput = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    placeholder,
    id,
    name,
    value,
    onChange,
    options = {},
    ...omittedArgs
  } = props;

  const {
    loading = false,
    fluid = false,
    disabled = false,
    skeleton = false,
    ghost = false,
    small = false,
    withActButton = false,
    onActButtonClick = null,
    onClearValue = null,
  } = options;

  const onClearValueClick = () => {
    if (disabled) return;
    if (typeof onClearValue === 'function') {
      onClearValue();
    } else {
      onChange({ target: { value: '' } });
    }
  };

  if (skeleton) {
    return (
      <TextInputSkeleton
        testId={testId}
        className={className}
        fluid={fluid}
        size={small ? 'small' : 'regular'}
        hideLabel
        withMargin={false}
      />
    );
  }

  return (
    <div
      data-testid={testId ? `${testId}-wrapper` : null}
      className={combineClassNames(
        'psui-text-input-search-container psui-flex-row',
        checkFluid(fluid),
        className
      )}
    >
      <div className="psui-text-input-wrapper">
        <input
          type="text"
          data-testid={testId}
          className={combineClassNames(
            'psui-type-label psui-text-input-common',
            ghost ? 'psui-text-input-search-ghost' : 'psui-text-input-search',
            small ? ' psui-py-1' : ''
          )}
          ref={ref}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...omittedArgs}
        />
        <div className="psui-text-input-icon psui-left-3">
          <RiSearch2Line />
        </div>
        <div className="psui-text-input-icon psui-right-3">
          {loading && (
            <RiLoader4Fill
              data-testid={testId ? `${testId}-loader` : null}
              className="psui-text-lg psui-animate-spin"
            />
          )}
          {!loading && value.length > 0 && (
            <RiCloseCircleFill
              data-testid={testId ? `${testId}-clear-button` : null}
              onClick={onClearValueClick}
              className="psui-text-lg psui-cursor-pointer"
            />
          )}
        </div>
      </div>
      {withActButton && (
        <button
          type="button"
          data-testid={testId ? `${testId}-act-button` : null}
          className={`psui-text-input-search-actbutton${
            ghost ? ' psui-text-input-search-actbutton-ghost' : ''
          }`}
          onClick={onActButtonClick}
          disabled={disabled}
        >
          <GiSettingsKnobs className="psui-text-input-search-actbutton-icon" />
        </button>
      )}
    </div>
  );
});

const SearchInputProps = {
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    loading: PropTypes.bool,
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    skeleton: PropTypes.bool,
    ghost: PropTypes.bool,
    small: PropTypes.bool,
    withActButton: PropTypes.bool,
    onActButtonClick: PropTypes.func,
    onClearValue: PropTypes.func,
  }),
};

SearchInput.propTypes = SearchInputProps;

SearchInput.defaultProps = {
  testId: null,
  className: '',
  id: null,
  name: null,
  placeholder: '',
  options: {
    loading: false,
    fluid: false,
    disabled: false,
    skeleton: false,
    ghost: false,
    small: false,
    withActButton: false,
    onActButtonClick: null,
    onClearValue: null,
  },
};

export default SearchInput;
