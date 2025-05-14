import * as React from "react";
import { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id: string;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    return (
      <div className="form-control">
        <label htmlFor={id} className="label">
          {label}
        </label>
        <input
          id={id}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={ref}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="error">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input }; 