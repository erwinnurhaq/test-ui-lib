import React from 'react';
import PropTypes from 'prop-types';
import { BiCaretDown } from 'react-icons/bi';

import checkFluid from '../../../helpers/checkFluid';
import SelectSkeleton from '../components/SelectSkeleton';
import SelectTooltip from '../components/SelectTooltip';
import OptionSection from './components/OptionSection';
import combineClassNames from '../../../helpers/combineClassNames';

/**
 * @type React.FC<MultipleSelectProps>
 */
const MultipleSelect = React.forwardRef((props, ref) => {
  const {
    label,
    testId,
    className,
    id,
    name,
    data,
    value,
    options = {},
    onChange,
    ...omittedArgs
  } = props;

  const {
    tooltipContent = '',
    tooltipPosition = 'top',
    tooltipClassName = '',
    autoWidth = false,
    hideLabel = false,
    hideInfo = false,
    fluid = false,
    disabled = false,
    required = false,
    skeleton = false,
    placeholder = 'Pick options',
    searchPlaceholder = 'Search items',
    requiredText = 'Required field',
    noDataText = 'No Data',
    noItemMatchText = 'No Item Match',
  } = options;

  const [isShowOptions, setIsShowOptions] = React.useState(false);
  const isValueChecked = React.useCallback(val => value.includes(val), [value]);

  const selectedValueInfo = React.useMemo(() => {
    if (value?.length > 0 && data?.length > 0) {
      return data
        .filter(item => isValueChecked(item?.value))
        .map(item => item.name)
        .join(', ');
    }
    return '';
  }, [value, data, isValueChecked]);

  const onSelectOption = option => {
    if (isValueChecked(option.value)) {
      return onChange(value.filter(val => val !== option.value));
    }
    return onChange([...value, option.value]);
  };

  if (skeleton) {
    return (
      <SelectSkeleton
        testId={testId}
        className={className}
        fluid={fluid}
        withLabel={label}
        hideLabel={hideLabel}
        hideInfo={hideInfo}
      />
    );
  }

  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={combineClassNames(
        'psui-select-container psui-select-container-multiple',
        disabled ? ' psui-select-disabled' : '',
        checkFluid(fluid),
        className
      )}
    >
      {!hideLabel && (
        <div className="psui-select-label-container">
          <label htmlFor={id} className="psui-type-label psui-select-label">
            {label}
          </label>
          {label && tooltipContent && (
            <SelectTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
              {tooltipContent}
            </SelectTooltip>
          )}
        </div>
      )}
      <div className="psui-flex psui-items-center">
        <div
          className={combineClassNames(
            'psui-select-wrapper psui-select-wrapper-multiple',
            isShowOptions ? ' psui-select-wrapper-multiple__active' : '',
            autoWidth ? ' psui-w-auto' : '',
            checkFluid(fluid)
          )}
        >
          {/* ======================= INPUT ELEMENT ======================= */}
          <input
            type="text"
            ref={ref}
            id={id}
            name={name}
            data-testid={testId}
            className="psui-type-label psui-select-common psui-select-multiple"
            placeholder={placeholder}
            value={selectedValueInfo}
            onClick={() => setIsShowOptions(!isShowOptions)}
            onChange={() => {}}
            disabled={disabled}
            required={required}
            {...omittedArgs}
          />
          <div className="psui-select-caret-container">
            <BiCaretDown className="psui-select-caret" />
          </div>
          {/* ========================== OVERLAY ========================== */}
          <div
            data-testid={testId ? `${testId}-overlay` : null}
            className={`psui-select-multiple-overlay ${
              isShowOptions ? 'psui-block' : 'psui-hidden'
            }`}
            tabIndex={0}
            onClick={() => setIsShowOptions(false)}
          />
          {/* ========================= OPTIONS ========================= */}
          <OptionSection
            isShow={isShowOptions}
            testId={testId}
            data={data}
            isValueChecked={isValueChecked}
            onSelectOption={onSelectOption}
            searchPlaceholder={searchPlaceholder}
            noDataText={noDataText}
            noItemMatchText={noItemMatchText}
          />
        </div>
        {!label && tooltipContent && (
          <SelectTooltip testId={testId} position={tooltipPosition} className={tooltipClassName}>
            {tooltipContent}
          </SelectTooltip>
        )}
      </div>
      {!hideInfo && (
        <div className="psui-select-required">
          {required && !selectedValueInfo && (
            <div
              data-testid={testId ? `${testId}-required-text` : null}
              className="psui-select-required-text"
            >
              <span>*</span> {requiredText}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

const MultipleSelectProps = {
  label: PropTypes.string,
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.shape({
    tooltipContent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    tooltipClassName: PropTypes.string,
    autoWidth: PropTypes.bool,
    hideLabel: PropTypes.bool,
    hideInfo: PropTypes.bool,
    fluid: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    skeleton: PropTypes.bool,
    placeholder: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    requiredText: PropTypes.string,
    noDataText: PropTypes.string,
    noItemMatchText: PropTypes.string,
  }),
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
    })
  ),
};

MultipleSelect.propTypes = MultipleSelectProps;

MultipleSelect.defaultProps = {
  label: '',
  testId: null,
  className: '',
  id: null,
  name: null,
  options: {
    tooltipContent: '',
    tooltipPosition: 'top',
    tooltipClassName: '',
    autoWidth: false,
    hideLabel: false,
    hideInfo: false,
    fluid: false,
    disabled: false,
    required: false,
    skeleton: false,
    placeholder: 'Pick options',
    searchPlaceholder: 'Search items',
    requiredText: 'Required field',
    noDataText: 'No Data',
    noItemMatchText: 'No Item Match',
  },
  onChange: () => {},
  value: [],
  data: [],
};

export default MultipleSelect;
