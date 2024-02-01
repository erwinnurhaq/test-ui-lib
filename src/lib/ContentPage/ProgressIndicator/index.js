import React from 'react';
import PropTypes from 'prop-types';
import { BiCheck } from 'react-icons/bi';

function ProgressIndicator({ testId, className, currentStepIndex, stepsData }) {
  return (
    <div data-testid={testId} className={`psui-progress-indicator-container ${className}`}>
      {stepsData.map((item, index) => {
        const isShouldShowLine = index < stepsData.length - 1;
        const isStepCompleted = currentStepIndex > index;
        const isCurrentlyWorkedOnStep = currentStepIndex === index;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <div className="psui-progress-indicator__circle-line-container">
              <div
                className={`psui-progress-indicator__circle ${
                  isStepCompleted ? 'psui-progress-indicator__circle--completed' : ''
                } ${isCurrentlyWorkedOnStep ? 'psui-progress-indicator__circle--current' : ''} `}
              >
                {isStepCompleted ? <BiCheck /> : null}
                {isCurrentlyWorkedOnStep ? (
                  <div className="psui-progress-indicator__circle--current--inner-circle" />
                ) : null}
              </div>
              {isShouldShowLine ? (
                <div
                  className={`psui-progress-indicator__line ${
                    isStepCompleted ? 'psui-progress-indicator__line--completed' : ''
                  }`}
                />
              ) : null}
            </div>
            <div className="psui-progress-indicator__text psui-type-label">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}

ProgressIndicator.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  currentStepIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  stepsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProgressIndicator.defaultProps = {
  testId: '',
  className: '',
};

export default ProgressIndicator;
