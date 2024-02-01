import React from 'react';
import PropTypes from 'prop-types';
import { RiErrorWarningLine } from 'react-icons/ri';

function IconCard({ testId, className, icon, title, subtitle, isDisabled, onClick }) {
  const renderIcon = () =>
    icon !== null ? icon : <RiErrorWarningLine className="psui-w-8 psui-h-8" />;

  return (
    <div
      data-testid={testId}
      className={`psui-icon-card${isDisabled ? ' psui-icon-card--disabled' : ''}${
        className ? ` ${className}` : ''
      }`}
      onClick={() => {
        if (isDisabled) return;
        onClick();
      }}
    >
      <div className="psui-icon-card-icon">{renderIcon()}</div>
      <div className="psui-type-heading-5 psui-icon-card-title">{title}</div>
      <div className="psui-type-subtitle-1 psui-icon-card-body">{subtitle}</div>
    </div>
  );
}

IconCard.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

IconCard.defaultProps = {
  testId: null,
  className: null,
  icon: null,
  title: 'Title',
  subtitle: 'Subtitle',
  isDisabled: false,
  onClick: () => {},
};

export default IconCard;
