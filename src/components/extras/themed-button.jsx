import React from 'react';

const ThemedButton = ({ 
    type = 'button', 
    children, 
    variant = 'primary', 
    size = 'medium', 
    className = '', 
    onClick 
}) => {
    const variantClasses = {
        primary: "bg-[#e39e13] text-white hover:bg-[#d18e10]",
        secondary: "bg-black text-white hover:bg-gray-800",
        outline: "border border-[#e39e13] text-[#e39e13] bg-transparent hover:bg-[#f8f0e0]",
        default: "bg-gray-700 text-white hover:bg-gray-800",
        danger: "bg-red-600 text-white hover:bg-red-700"
    };

    const sizeClasses = {
        small: "text-sm px-4 py-2",
        medium: "text-base px-6 py-2",
        large: "text-lg px-8 py-3",
        'x-large': "text-xl px-10 py-3"
    };

    return (
        <button
            onClick={onClick}
            className={clsx(
                "rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e39e13]",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            type={type}
        >
            {children}
        </button>
    );
};

export default ThemedButton;