import React from 'react';
import combineClassNames from '../../helpers/combineClassNames';

export type PSPrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  testId?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  colorType?: 'default' | 'danger';
  isFluid?: boolean;
  isSmall?: boolean;
  isDisabled?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode | React.ReactNode[];
};

function getClassNameFromColorType(colorType: PSPrimaryButtonProps['colorType']) {
  switch (colorType) {
    case 'danger': {
      return 'psui-button-text-primary--danger psui-button-bg-primary--danger psui-button-border-primary--danger';
    }
    default: {
      return '';
    }
  }
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PSPrimaryButtonProps>((props, ref) => {
  const {
    testId,
    className,
    type = 'button',
    colorType = 'default',
    isFluid = false,
    isSmall = false,
    isDisabled = false,
    onClick = () => {},
    children,
    ...omittedArgs
  } = props;

  return (
    <button
      ref={ref}
      data-testid={testId}
      className={combineClassNames(
        'psui-type-button',
        !isDisabled ? 'psui-button-common' : 'psui-button-common-disabled',
        !isFluid ? '' : 'psui-w-full',
        !isSmall ? 'psui-button-size-normal' : 'psui-button-size-small',
        !isDisabled ? 'psui-button-text-primary' : 'psui-button-text-primary-disabled',
        !isDisabled ? 'psui-button-bg-primary' : 'psui-button-bg-primary-disabled',
        !isDisabled ? 'psui-button-border-primary' : 'psui-button-border-primary-disabled',
        getClassNameFromColorType(colorType),
        className
      )}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      {...omittedArgs}
    >
      {children}
    </button>
  );
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
