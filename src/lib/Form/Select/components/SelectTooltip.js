import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';

import { TooltipContainer, TooltipContent } from '../../../Overlay/Tooltip';

/**
 * @type React.FC<SelectTooltipProps>
 */
const SelectTooltip = React.forwardRef((props, ref) => {
  const { position, testId, className, children, ...omittedArgs } = props;

  return (
    <TooltipContainer
      ref={ref}
      testId={testId ? `${testId}-tooltip` : null}
      className="psui-select-tooltip-container"
      tooltipPosition={position}
      {...omittedArgs}
    >
      <FaInfoCircle className="psui-select-tooltip-icon" />
      <TooltipContent testId={testId ? `${testId}-tooltip-content` : null} className={className}>
        {children}
      </TooltipContent>
    </TooltipContainer>
  );
});

const SelectTooltipProps = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  className: PropTypes.string,
  testId: PropTypes.string,
};

SelectTooltip.propTypes = SelectTooltipProps;

SelectTooltip.defaultProps = {
  children: '',
  position: 'top',
  className: '',
  testId: null,
};

export default SelectTooltip;
