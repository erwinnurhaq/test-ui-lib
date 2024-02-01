import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput/TextInput';

function getPercentageOfValueBetweenMinAndMax(min, max, value) {
  const range = max - min;
  const correctedStartValue = value - min;
  const percentageValueForProgressElement = (correctedStartValue * 100) / range;

  return percentageValueForProgressElement;
}

function Slider({ testId, className, label, isDisabled, min, max, step, value, setValue }) {
  return (
    <div
      data-testid={testId ? `${testId}-container` : null}
      className={`psui-slider-wrapper ${
        isDisabled ? 'psui-slider-wrapper--disabled' : ''
      } ${className}`}
    >
      <label className="psui-type-label psui-my-2">{label}</label>
      <div className="psui-flex psui-w-full psui-justify-start psui-items-center">
        <span className="psui-pr-3 psui-type-label">{min}</span>
        <div className="psui-slider-input-container">
          <input
            data-testid={testId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={ev => setValue(parseFloat(ev.target.value, 10))}
            disabled={isDisabled}
          />
          <progress
            className="psui-slider-progress-bar"
            value={getPercentageOfValueBetweenMinAndMax(min, max, value)}
            max="100"
          />
        </div>
        <span className="psui-px-3 psui-type-label">{max}</span>
        <TextInput
          className="psui-slider-number-input"
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={ev => {
            const thisVal = parseFloat(ev.target.value, 10);

            if (Number.isNaN(thisVal)) {
              return;
            }

            setValue(thisVal);
          }}
          options={{
            disabled: isDisabled,
          }}
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  testId: '',
  className: '',
  label: '',
  isDisabled: false,
  min: 0,
  max: 100,
  step: 1,
};

export default Slider;
