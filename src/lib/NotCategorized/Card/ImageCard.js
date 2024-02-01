import React from 'react';
import PropTypes from 'prop-types';
import { BsCardImage } from 'react-icons/bs';

import { ControlledLink } from '../../ContentPage/Link';

function ImageCard({
  testId,
  className,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  isDisabled,
  onButtonClick = () => {},
  linkOptions,
}) {
  const { linkTestId = null, linkClassName = null, children = 'Link' } = linkOptions;

  return (
    <div
      data-testid={testId}
      className={`psui-image-card${isDisabled ? ' psui-image-card--disabled' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <div className="psui-image-card-image-container">
        {imageSrc !== null ? (
          <img src={imageSrc} alt={imageAlt} />
        ) : (
          <BsCardImage className="psui-image-card-placeholder-image" />
        )}
      </div>
      <div className="psui-image-card-content-container">
        <div className="psui-type-heading-5 psui-image-card-title">{title}</div>
        <div className="psui-type-subtitle-1 psui-image-card-body">{subtitle}</div>
      </div>
      <div className="psui-image-card-button-container">
        <ControlledLink
          testId={linkTestId}
          className={linkClassName}
          onClick={onButtonClick}
          isDisabled={isDisabled}
        >
          {children}
        </ControlledLink>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
  linkOptions: PropTypes.shape({
    linkTestId: PropTypes.string,
    linkClassName: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  }),
};

ImageCard.defaultProps = {
  testId: null,
  className: null,
  imageSrc: null,
  imageAlt: null,
  title: 'Title',
  subtitle: 'Subtitle',
  isDisabled: false,
  onButtonClick: () => {},
  linkOptions: { linkTestId: null, linkClassName: null, children: 'Link' },
};

export default ImageCard;
