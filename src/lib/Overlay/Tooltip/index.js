import React from 'react';
import PropTypes from 'prop-types';

const TooltipContext = React.createContext();

function useTooltipContext() {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error(
      `Tooltip compound components cannot be rendered outside the TooltipContainer component`
    );
  }
  return context;
}

function TooltipContainer({ testId, className, children, tooltipPosition }) {
  return (
    <TooltipContext.Provider value={{ tooltipPosition }}>
      <div data-testid={testId} className={`psui-tooltip-container ${className}`}>
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

TooltipContainer.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

TooltipContainer.defaultProps = {
  testId: null,
  className: '',
  children: null,
  tooltipPosition: 'bottom',
};

function TooltipContent({ testId, className, children }) {
  const { tooltipPosition } = useTooltipContext();

  function getTooltipPosition() {
    switch (tooltipPosition) {
      case 'top': {
        return 'psui-tooltip__tooltip--top';
      }
      case 'left': {
        return 'psui-tooltip__tooltip--left';
      }
      case 'right': {
        return 'psui-tooltip__tooltip--right';
      }
      default: {
        return 'psui-tooltip__tooltip--bottom';
      }
    }
  }

  return (
    <div
      data-testid={testId}
      className={`psui-tooltip__tooltip ${getTooltipPosition()} ${className}`}
    >
      {children}
    </div>
  );
}

TooltipContent.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TooltipContent.defaultProps = {
  testId: null,
  className: '',
  children: 'Tooltip',
};

export { TooltipContainer, TooltipContent };
