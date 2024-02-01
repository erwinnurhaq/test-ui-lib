import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from '../../Buttons/PrimaryButton';

function TransactionCard({
  testId,
  className,
  headerTitle,
  title,
  subtitle,
  isDisabled,
  onButtonClick,
  buttonOptions,
}) {
  const { buttonTestId = null, buttonClassName = null, children = 'Button' } = buttonOptions;

  return (
    <div
      data-testid={testId}
      className={`psui-transaction-card${isDisabled ? ' psui-transaction-card--disabled' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <div className="psui-type-subtitle-2 psui-transaction-card-header">{headerTitle}</div>
      <div className="psui-transaction-card-content">
        <div className="psui-type-heading-5 psui-transaction-card-title">{title}</div>
        <div className="psui-type-subtitle-1 psui-transaction-card-body">{subtitle}</div>
      </div>
      <div className="psui-transaction-card-button-container">
        <PrimaryButton
          testId={buttonTestId}
          className={buttonClassName}
          type="button"
          isDisabled={isDisabled}
          onClick={onButtonClick}
        >
          {children}
        </PrimaryButton>
      </div>
    </div>
  );
}

TransactionCard.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  headerTitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
  buttonOptions: PropTypes.shape({
    buttonTestId: PropTypes.string,
    buttonClassName: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
};

TransactionCard.defaultProps = {
  testId: null,
  className: null,
  headerTitle: 'Header',
  title: 'Title',
  subtitle: 'Subtitle',
  isDisabled: false,
  onButtonClick: () => {},
  buttonOptions: { buttonTestId: null, buttonClassName: null, children: 'Button' },
};

export default TransactionCard;
