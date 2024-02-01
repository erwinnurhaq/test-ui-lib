import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';
import checkClassName from '../../helpers/checkClassName';

const OverflowMenuContext = React.createContext();

function useOverflowMenuContext() {
  const context = React.useContext(OverflowMenuContext);
  if (!context) {
    throw new Error(
      `OverflowMenu sub-components cannot be rendered outside the OverflowMenu component`
    );
  }
  return context;
}

function OverflowMenuDivider() {
  return <hr className="psui-overflowmenu-menu-divider" />;
}

/**
 * @type React.FC<OverflowMenuItemWrapperPropTypes>
 */
const OverflowMenuItemWrapper = React.forwardRef((props, ref) => {
  const { children, testId, className, isOpen, ...restProps } = props;

  return (
    <div
      ref={ref}
      data-testid={testId}
      hidden={!isOpen}
      className={`psui-overflowmenu-menu${className ? ` ${className}` : ''}`}
      {...restProps}
    >
      {children}
    </div>
  );
});
const OverflowMenuItemWrapperPropTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  testId: PropTypes.string,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
};
OverflowMenuItemWrapper.propTypes = OverflowMenuItemWrapperPropTypes;
OverflowMenuItemWrapper.defaultProps = {
  children: null,
  testId: null,
  className: '',
  isOpen: false,
};

/**
 * @type React.FC<OverflowMenuItemPropTypes>
 */
const OverflowMenuItem = React.forwardRef((props, ref) => {
  const { testId, className, onClick, isDisabled, isDanger, children, ...restButtonProps } = props;
  const { handleOpenState, customTrigger, isManualClose } = useOverflowMenuContext();

  const handleItemClick = ev => {
    onClick(ev);
    if (!(customTrigger && isManualClose)) {
      handleOpenState(false);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`psui-overflowmenu-menu-item${
        isDanger ? ' psui-overflowmenu-menu-item--danger' : ''
      }${checkClassName(className)}`}
      data-testid={testId}
      disabled={isDisabled}
      onClick={handleItemClick}
      {...restButtonProps}
    >
      {children}
    </button>
  );
});

const OverflowMenuItemPropTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
OverflowMenuItem.propTypes = OverflowMenuItemPropTypes;
OverflowMenuItem.defaultProps = {
  testId: null,
  className: '',
  onClick: () => {},
  isDisabled: false,
  isDanger: false,
  children: 'Item',
};

/**
 * @type React.FC<OverflowMenuPropTypes>
 */
const OverflowMenu = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    isDisabled,
    children,
    customTrigger,
    isManualClose,
    onOpen,
    onClose,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleOpenState = (value = !isOpen) => (value ? handleOpen() : handleClose());

  return (
    <div className={`psui-overflowmenu-container${checkClassName(className)}`}>
      {customTrigger ? (
        customTrigger(isOpen, handleOpenState)
      ) : (
        <button
          ref={ref}
          type="button"
          className={`psui-overflowmenu-trigger${isOpen ? ' psui-overflowmenu-trigger__open' : ''}`}
          data-testid={testId}
          disabled={isDisabled}
          onClick={handleOpenState}
        >
          <BsThreeDotsVertical className="psui-overflowmenu-icon" />
        </button>
      )}
      <div
        data-testid={testId ? `${testId}-overlay` : null}
        hidden={!isOpen}
        tabIndex={0}
        className="psui-overflowmenu-overlay"
        onClick={() => handleOpenState(false)}
      />
      <OverflowMenuItemWrapper testId={testId ? `${testId}-menu` : null} isOpen={isOpen}>
        <OverflowMenuContext.Provider value={{ handleOpenState, customTrigger, isManualClose }}>
          {children}
        </OverflowMenuContext.Provider>
      </OverflowMenuItemWrapper>
    </div>
  );
});

const OverflowMenuPropTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  customTrigger: PropTypes.func,
  isManualClose: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
};
OverflowMenu.propTypes = OverflowMenuPropTypes;
OverflowMenu.defaultProps = {
  testId: null,
  className: '',
  isDisabled: false,
  children: '',
  customTrigger: null,
  isManualClose: false,
  onOpen: null,
  onClose: null,
};

export { OverflowMenu, OverflowMenuItem, OverflowMenuItemWrapper, OverflowMenuDivider };
