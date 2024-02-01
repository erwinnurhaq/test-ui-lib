import React, {
  Fragment,
  cloneElement,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import PortalElement from './PortalElement';

/**
 * PORTAL (MAIN) ============================================================================ /
 * This will handle relation between the portal and its trigger
 */
/**
 * @type React.FC<PortalPropTypes>
 */
const Portal = forwardRef(
  (
    {
      children,
      mountNode = document.body,
      trigger,
      closeOnDocumentClick, // default TRUE
      closeOnEscape, // default TRUE
      closeOnContentClick,
      closeOnTriggerClick,
      closeOnTriggerBlur,
      closeOnTriggerMouseLeave,
      onClose,
      onOpen,
      onMount,
      onUnmount,
      open,
      defaultOpen,
      openOnTriggerClick, // default TRUE
      openOnTriggerFocus,
      openOnTriggerMouseEnter,
      mouseDelay,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const contentRef = useRef(null);
    const triggerRef = useRef(null);
    const mouseEnterTimer = useRef(null);
    const mouseLeaveTimer = useRef(null);

    function handleOpen(ev) {
      if (disabled) {
        return;
      }

      setIsOpen(true);
      onOpen?.(ev);
    }

    function handleClose(ev) {
      if (disabled) {
        return;
      }

      setIsOpen(false);
      onClose?.(ev);
    }

    function openWithTimeout(ev, delay) {
      const eventClone = { ...ev };
      return setTimeout(() => handleOpen(eventClone), delay || 0);
    }

    function closeWithTimeout(ev, delay) {
      const eventClone = { ...ev };
      return setTimeout(() => handleClose(eventClone), delay || 0);
    }

    function handleDocumentClick(ev) {
      const isClickOnContent = ev.target === contentRef.current;
      const isClickOnTrigger = ev.target === triggerRef.current;
      const isContainContent = contentRef.current?.contains(ev.target);
      const isContainTrigger = triggerRef.current?.contains(ev.target);

      // close on document click
      if (
        closeOnDocumentClick &&
        contentRef.current &&
        triggerRef.current &&
        !isClickOnContent &&
        !isClickOnTrigger &&
        !isContainContent &&
        !isContainTrigger
      ) {
        handleClose(ev);
      }

      // close on content click
      if (closeOnContentClick && (isClickOnContent || isContainContent)) {
        handleClose(ev);
      }
    }

    function handleEscape(ev) {
      if (!closeOnEscape || ev.key !== 'Escape') {
        return;
      }

      handleClose(ev);
    }

    function handleTriggerBlur(ev) {
      if (!closeOnTriggerBlur) {
        return;
      }

      handleClose(ev);

      // native event
      props.onBlur?.(ev); // eslint-disable-line
    }

    function handleTriggerClick(ev) {
      if (isOpen && closeOnTriggerClick) {
        handleClose(ev);
      } else if (!isOpen && openOnTriggerClick) {
        handleOpen(ev);
      }

      // native event
      props.onClick?.(ev); // eslint-disable-line
    }

    function handleTriggerFocus(ev) {
      if (!openOnTriggerFocus) {
        return;
      }

      handleOpen(ev);

      // native event
      props.onFocus?.(ev); // eslint-disable-line
    }

    function handleTriggerMouseLeave(ev) {
      clearTimeout(mouseEnterTimer.current);

      if (!closeOnTriggerMouseLeave) {
        return;
      }

      mouseLeaveTimer.current = closeWithTimeout(ev, mouseDelay);

      // native event
      props.onMouseLeave?.(ev); // eslint-disable-line
    }

    function handleTriggerMouseEnter(ev) {
      clearTimeout(mouseLeaveTimer.current);

      if (!openOnTriggerMouseEnter) {
        return;
      }

      mouseEnterTimer.current = openWithTimeout(ev, mouseDelay);

      // native event
      props.onMouseEnter?.(ev); // eslint-disable-line
    }

    useImperativeHandle(ref, () => ({ setIsOpen }));

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick, false);
      document.addEventListener('keydown', handleEscape, false);

      return () => {
        // Clean up event listener
        document.removeEventListener('click', handleDocumentClick, false);
        document.removeEventListener('keydown', handleEscape, false);
        // Clean up timers
        clearTimeout(mouseEnterTimer.current);
        clearTimeout(mouseLeaveTimer.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [disabled]);

    useEffect(() => {
      // Manually handle open from outside state
      if (typeof open === 'boolean') {
        setIsOpen(open);
      }
    }, [open]);

    return (
      <Fragment>
        {isOpen && (
          <PortalElement mountNode={mountNode} onMount={onMount} onUnmount={onUnmount}>
            {cloneElement(children, {
              ref: contentRef,
              referenceElement: triggerRef.current,
            })}
          </PortalElement>
        )}
        {trigger &&
          cloneElement(trigger, {
            ref: triggerRef,
            onBlur: handleTriggerBlur,
            onClick: handleTriggerClick,
            onFocus: handleTriggerFocus,
            onMouseLeave: handleTriggerMouseLeave,
            onMouseEnter: handleTriggerMouseEnter,
          })}
      </Fragment>
    );
  }
);

const PortalPropTypes = {
  children: PropTypes.node.isRequired,
  mountNode: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.any]),
  trigger: PropTypes.node,
  closeOnDocumentClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  closeOnContentClick: PropTypes.bool,
  closeOnTriggerClick: PropTypes.bool,
  closeOnTriggerBlur: PropTypes.bool,
  closeOnTriggerMouseLeave: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  defaultOpen: PropTypes.bool,
  openOnTriggerClick: PropTypes.bool,
  openOnTriggerFocus: PropTypes.bool,
  openOnTriggerMouseEnter: PropTypes.bool,
  mouseDelay: PropTypes.number,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
};
const PortalDefaultProps = {
  mountNode: undefined,
  trigger: undefined,
  closeOnDocumentClick: true, // default TRUE
  closeOnEscape: true, // default TRUE
  closeOnContentClick: false,
  closeOnTriggerClick: false,
  closeOnTriggerBlur: false,
  closeOnTriggerMouseLeave: false,
  onClose: undefined,
  onOpen: undefined,
  onMount: undefined,
  onUnmount: undefined,
  defaultOpen: false,
  openOnTriggerClick: true, // default TRUE
  openOnTriggerFocus: false,
  openOnTriggerMouseEnter: false,
  mouseDelay: 0,
  open: undefined,
  disabled: false,
};
Portal.propTypes = PortalPropTypes;
Portal.defaultProps = PortalDefaultProps;

export default Portal;
