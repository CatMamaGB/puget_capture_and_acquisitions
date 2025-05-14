'use client';

import * as React from "react";
import Link from 'next/link';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        primary: 'bg-evergreen text-white hover:bg-opacity-90 focus:ring-evergreen',
        secondary: 'bg-pugetBlue text-white hover:bg-opacity-90 focus:ring-pugetBlue',
        outline: 'border-2 border-evergreen text-evergreen hover:bg-evergreen hover:text-white',
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        md: 'px-4 py-2 text-base',
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, className = '', href, ...props }, ref) => {
    if (href) {
      return (
        <Link 
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 