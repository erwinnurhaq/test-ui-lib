import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { TooltipContainer, TooltipContent } from '../../Overlay/Tooltip';

function BreadCrumb({ testId, className, id, loading, icon, currentActiveItemKey, sections }) {
  const handleSections = items => {
    if (items.length >= 5) {
      const temp = [];
      // push first item
      temp.push(items[0]);
      // push between first and last 2 item
      temp.push({ more: items.slice(1, -2) });
      // push last 2 item
      temp.push(...items.slice(-2));
      return temp;
    }
    return items;
  };

  const handleShowMore = more => (
    <div className="psui-breadcrumb-more-section">
      {more.map((item, index) => (
        <div
          key={item.key ? item.key : index}
          className={`psui-breadcrumb-more-section-item ${
            !item.isDisabled && item.onClick
              ? 'psui-breadcrumb-clickable'
              : 'psui-breadcrumb-disabled'
          }`}
          onClick={() => {
            if (!item.isDisabled && item.onClick) {
              item.onClick();
            }
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );

  const handleShowItem = item => {
    if (item.more) {
      return (
        <TooltipContainer tooltipPosition="bottom">
          <TooltipContent className="psui-breadcrumb-more">
            {handleShowMore(item.more)}
          </TooltipContent>
          <div className="psui-breadcrumb-more-icon">...</div>
        </TooltipContainer>
      );
    }
    return (
      <div
        className={`psui-breadcrumb-section${!item.isDisabled ? ' psui-breadcrumb-clickable' : ''}${
          item.key === currentActiveItemKey ? ' psui-breadcrumb-active' : ''
        }`}
        onClick={() => {
          if (!item.isDisabled && item.onClick) {
            item.onClick();
          }
        }}
      >
        {item.content}
      </div>
    );
  };

  if (loading)
    return <div data-testid={testId} id={id} className={`psui-breadcrumb-loading ${className}`} />;

  return (
    <div data-testid={testId} id={id} className={`psui-breadcrumb psui-type-label ${className}`}>
      {handleSections(sections).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {handleShowItem(item)}
          {index < handleSections(sections).length - 1 &&
            (icon === 'slash' ? (
              <div className="psui-breadcrumb-divider psui-breadcrumb-slash">/</div>
            ) : (
              <FaChevronRight className="psui-breadcrumb-divider psui-breadcrumb-arrow" />
            ))}
        </React.Fragment>
      ))}
    </div>
  );
}

BreadCrumb.propTypes = {
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  icon: PropTypes.oneOf(['slash', 'arrow']),
  currentActiveItemKey: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      content: PropTypes.string,
      isDisabled: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ),
};

BreadCrumb.defaultProps = {
  testId: null,
  className: '',
  id: null,
  icon: 'slash',
  loading: false,
  currentActiveItemKey: '',
  sections: [
    {
      key: '',
      content: '',
      isDisabled: false,
      onClick: () => {},
    },
  ],
};

export default BreadCrumb;
