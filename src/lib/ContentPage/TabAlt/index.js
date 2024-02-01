import React from 'react';
import PropTypes from 'prop-types';

function LinkElement({ component: Component, children, ...props }) {
  return Component ? <Component {...props}>{children}</Component> : <a {...props}>{children}</a>;
}

LinkElement.propTypes = {
  component: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
LinkElement.defaultProps = {
  component: null,
  children: null,
};

function Tab({
  className,
  testId,
  activeKey,
  activeIndex,
  panes,
  onTabChange,
  additionalSide,
  isDisabled,
  isNoBorder,
  linkElement,
}) {
  const tabActiveIndex = activeIndex ?? panes.findIndex(pane => pane.key === activeKey);

  const getClassName = () => {
    let res = 'psui-tab-alt-container';

    if (isNoBorder) {
      res += ' psui-tab-alt-container--no-border';
    }
    if (className) {
      res += ` ${className}`;
    }
    return res;
  };

  const isRenderContent = () => panes.some(pane => Boolean(pane.render));

  const renderContent = () => {
    if (tabActiveIndex >= 0 && panes.length > 0) {
      const Content = panes[tabActiveIndex]?.render;
      return typeof Content === 'function' ? Content() : Content;
    }
    return null;
  };

  return (
    <div className={getClassName()} data-testid={testId}>
      <div className="psui-tab-alt__tab-wrapper">
        <div className="psui-tab-alt__tab-items">
          {panes.map((pane, index) => (
            <LinkElement
              key={pane.key}
              component={linkElement}
              className={`psui-tab-alt__tab-item${
                tabActiveIndex === index ? ' psui-tab-alt__tab-item--active' : ''
              }`}
              disabled={isDisabled}
              {...(pane.to
                ? { to: pane.to || '#' }
                : {
                    onClick: () => (onTabChange ? onTabChange(index, pane.key) : null),
                  })}
            >
              {pane.menuItem}
            </LinkElement>
          ))}
        </div>
        {additionalSide}
      </div>
      {!isNoBorder && <hr className="psui-tab-alt__tab-divider" />}
      {isRenderContent() && <div className="psui-tab-alt__tab-content">{renderContent()}</div>}
    </div>
  );
}

Tab.propTypes = {
  className: PropTypes.string,
  testId: PropTypes.string,
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeIndex: PropTypes.number,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      menuItem: PropTypes.node,
      render: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    })
  ),
  onTabChange: PropTypes.func,
  additionalSide: PropTypes.node,
  isDisabled: PropTypes.bool,
  isNoBorder: PropTypes.bool,
  linkElement: PropTypes.func,
};
Tab.defaultProps = {
  className: '',
  testId: null,
  activeKey: null,
  activeIndex: null,
  panes: [],
  onTabChange: () => {},
  additionalSide: null,
  isDisabled: false,
  isNoBorder: false,
  linkElement: null,
};

export default Tab;
