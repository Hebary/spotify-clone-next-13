'use client';

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button= forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return(
        <button
            type={type}
            disabled={disabled}
            ref={ref}
            className={twMerge(`
              rounded-full bg-green-500 border border-transparent px-3 py-3 w-full disabled:opacity-50 
              hover:opacity-75 transition disabled:cursor-not-allowed text-black font-bold`,
              className)}
              {...props}
            >
                {children}
        </button>
    )

})

Button.displayName = 'Button';
export default Button;