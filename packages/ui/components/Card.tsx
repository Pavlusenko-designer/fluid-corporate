import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border border-brand-200 bg-white p-6 shadow-sm ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
);

Card.displayName = 'Card';
