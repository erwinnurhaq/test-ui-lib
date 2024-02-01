import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseOutline } from 'react-icons/io5';

import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';
import GhostButton from '../../Buttons/GhostButton';

function Modal({
  className,
  testId,
  contentClassName,
  onCloseButtonClicked,
  colorType,
  buttonOptions = {},
  children,
}) {
  const {
    showButtons = false,
    showSkipButton = false,
    skipButtonText = 'Skip',
    cancelButtonText = 'Cancel',
    confirmButtonText = 'Confirm',
    skipButtonOnClick = () => {},
    cancelButtonOnClick = () => {},
    confirmButtonOnClick = () => {},
    skipButtonDisabled = false,
    cancelButtonDisabled = false,
    confirmButtonDisabled = false,
  } = buttonOptions;

  return (
    <div
      data-testid={testId}
      className={`psui-modal ${colorType === 'danger' ? 'psui-modal--danger' : ''} ${className}`}
    >
      <button className="psui-modal__close-button" onClick={onCloseButtonClicked}>
        <IoCloseOutline />
      </button>
      <div className={`psui-modal__content ${contentClassName}`}>{children}</div>
      {showButtons ? (
        <div className="psui-modal__button-container">
          {showSkipButton ? (
            <GhostButton isSmall isDisabled={skipButtonDisabled} onClick={skipButtonOnClick}>
              {skipButtonText}
            </GhostButton>
          ) : (
            <div />
          )}
          <div className="psui-modal__button-container__confirm-cancel-button-container">
            {colorType === 'danger' ? (
              <SecondaryButton
                isSmall
                isDisabled={cancelButtonDisabled}
                onClick={cancelButtonOnClick}
              >
                {cancelButtonText}
              </SecondaryButton>
            ) : (
              <GhostButton isSmall isDisabled={cancelButtonDisabled} onClick={cancelButtonOnClick}>
                {cancelButtonText}
              </GhostButton>
            )}
            <PrimaryButton
              isSmall
              isDisabled={confirmButtonDisabled}
              onClick={confirmButtonOnClick}
              colorType={colorType === 'danger' ? 'danger' : 'default'}
            >
              {confirmButtonText}
            </PrimaryButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}

Modal.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onCloseButtonClicked: PropTypes.func,
  colorType: PropTypes.oneOf(['default', 'danger']),
  buttonOptions: PropTypes.shape({
    showButtons: PropTypes.bool,
    showSkipButton: PropTypes.bool,
    skipButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    confirmButtonText: PropTypes.string,
    skipButtonOnClick: PropTypes.func,
    cancelButtonOnClick: PropTypes.func,
    confirmButtonOnClick: PropTypes.func,
    skipButtonDisabled: PropTypes.bool,
    cancelButtonDisabled: PropTypes.bool,
    confirmButtonDisabled: PropTypes.bool,
  }),
};

Modal.defaultProps = {
  testId: null,
  className: '',
  contentClassName: '',
  children: null,
  onCloseButtonClicked: () => {},
  colorType: 'default',
  buttonOptions: {
    showButtons: false,
    showSkipButton: false,
    skipButtonText: 'Skip',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    skipButtonOnClick: () => {},
    cancelButtonOnClick: () => {},
    confirmButtonOnClick: () => {},
    skipButtonDisabled: false,
    cancelButtonDisabled: false,
    confirmButtonDisabled: false,
  },
};

export default Modal;
