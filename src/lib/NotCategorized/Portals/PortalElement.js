import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/**
 * PORTAL ELEMENT ============================================================================ /
 * This will put all of its children to a portal (by default to document body)
 */
function PortalElement({ children, mountNode = document.body, onMount, onUnmount }) {
  useEffect(() => {
    onMount?.();
    return () => {
      onUnmount?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(children, mountNode);
}

PortalElement.propTypes = {
  children: PropTypes.node.isRequired,
  mountNode: PropTypes.any, // eslint-disable-line
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
};
PortalElement.defaultProps = {
  mountNode: undefined,
  onMount: undefined,
  onUnmount: undefined,
};

export default PortalElement;
