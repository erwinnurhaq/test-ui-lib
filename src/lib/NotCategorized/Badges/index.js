import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import combineClassNames from '../../helpers/combineClassNames';

/**
 * @type React.FC<BadgesProps>
 */
const Badges = React.forwardRef((props, ref) => {
  const {
    testId,
    className,
    id,
    label,
    color,
    shape,
    icon,
    iconLabel,
    onClick,
    onClose,
    ...omittedArgs
  } = props;

  return (
    <div
      ref={ref}
      data-testid={testId}
      id={id}
      className={combineClassNames(
        'psui-badges',
        `psui-badges-${shape}`,
        `psui-badges-${color}`,
        'psui-type-label',
        className
      )}
      role="button"
      onClick={onClick}
      {...omittedArgs}
    >
      {label}
      {icon && (
        <div className={combineClassNames('psui-badges-icon', onClose ? 'psui-badges-close' : '')}>
          {iconLabel || <MdClose onClick={onClose} />}
        </div>
      )}
    </div>
  );
});

const BadgesProps = {
  testId: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  color: PropTypes.oneOf([
    'blue',
    'cyan',
    'purple',
    'orange',
    'green',
    'yellow',
    'red',
    'dark-green',
    'dark-red',
  ]),
  shape: PropTypes.oneOf(['pill', 'rectangle']),
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  icon: PropTypes.bool,
  iconLabel: PropTypes.string,
};

Badges.propTypes = BadgesProps;

Badges.defaultProps = {
  testId: null,
  className: '',
  id: null,
  label: '',
  color: 'blue',
  shape: 'pill',
  icon: false,
  iconLabel: '',
  onClick: () => {},
  onClose: () => {},
};

export default Badges;
