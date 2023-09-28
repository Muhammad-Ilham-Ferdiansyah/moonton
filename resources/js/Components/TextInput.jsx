import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

TextInput.PropTypes = {
        type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        className: PropTypes.string,
        variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
        autoComplete: PropTypes.string,
        required: PropTypes.bool,
        isFocused: PropTypes.bool,
        handleChange: PropTypes.func,
        placeholder: PropTypes.string,
        isError: PropTypes.bool,
};

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, defaultValue, variant = 'primary', placeholder, isError, autoComplete,required,handleChange,...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                {...props}
                type={type}
                className={
                    'rounded-2xl bg-form-bg py-[13px] px-7 w-full $(isError && "input-error") input-${variant} ${className} ' +
                    className
                }
                ref={input}
                value={value}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
});
