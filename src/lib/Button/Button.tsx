import React from 'react';
import './Button.css';
import { GoCalendar } from 'react-icons/go';

export type ButtonProps = React.ComponentProps<'button'> & {
  kind?: 'primary' | 'secondary';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ kind = 'primary', children, ...props }, ref) => {
    return (
      <button data-button={`kind:${kind}`} ref={ref} {...props}>
        {children}
        <GoCalendar />
      </button>
    );
  }
);
