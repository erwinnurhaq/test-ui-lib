import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import getElementPositions from '../../helpers/getElementPositions';

/**
 * PORTAL POPPER ============================================================================ /
 * This will position the popup in the portal based on the reference element (popup trigger)
 */
/**
 * @type React.FC<PortalPopperPropTypes>
 */
const PortalPopper = forwardRef(
  ({ children, referenceElement, position, alignment, className, testId, ...rest }, ref) => {
    if (!referenceElement) {
      return null;
    }

    const getPosition = () => {
      const referencePos = getElementPositions(referenceElement);
      const centerOffset = alignment === 'center' ? '-50%' : '0';
      const transforms = {
        right: `translate(${referencePos.width / 2}px,${centerOffset})`,
        bottom: `translate(${centerOffset},${referencePos.height / 2}px)`,
        top: `translate(${centerOffset},calc(-100% - ${referencePos.height / 2}px))`,
        left: `translate(calc(-100% - ${referencePos.width / 2}px),${centerOffset})`,
      };

      const alignments = {
        center: {
          top: referencePos.y + referencePos.height / 2,
          left: referencePos.x + referencePos.width / 2,
        },
        left: {
          top: referencePos.y + referencePos.height / 2,
          left: referencePos.x,
        },
        right: {
          top: referencePos.y + referencePos.height / 2,
          right: referencePos.x2,
        },
        // TODO: find alignment top-bottom for position left-right
      };

      const popperPosition = alignments[alignment] || alignments.center;
      const popperTransform = transforms[position];

      return { ...popperPosition, transform: popperTransform };
    };

    return (
      <div
        ref={ref}
        className={className}
        data-testid={testId}
        style={{
          position: 'absolute',
          zIndex: 99999,
          ...getPosition(),
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
const PortalPopperPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  referenceElement: PropTypes.instanceOf(Element),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  alignment: PropTypes.oneOf(['center', 'top', 'right', 'bottom', 'left']),
  className: PropTypes.string,
  testId: PropTypes.string,
};
const PortalPopperDefaultProps = {
  children: null,
  referenceElement: null,
  position: 'top',
  alignment: 'center',
  className: '',
  testId: null,
};
PortalPopper.propTypes = PortalPopperPropTypes;
PortalPopper.defaultProps = PortalPopperDefaultProps;

export default PortalPopper;
