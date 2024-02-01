import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';

import { TooltipContainer, TooltipContent } from '../../../Overlay/Tooltip';

function TextInputTooltip({ position, testId, className, children }) {
  return (
    <TooltipContainer
      testId={testId ? `${testId}-tooltip` : null}
      className="psui-text-input-tooltip-container"
      tooltipPosition={position}
    >
      <FaInfoCircle className="psui-text-input-tooltip-icon" />
      <TooltipContent testId={testId ? `${testId}-tooltip-content` : null} className={className}>
        {children}
      </TooltipContent>
    </TooltipContainer>
  );
}

TextInputTooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  className: PropTypes.string,
  testId: PropTypes.string,
};

TextInputTooltip.defaultProps = {
  children: '',
  position: 'top',
  className: '',
  testId: null,
};

export default TextInputTooltip;
