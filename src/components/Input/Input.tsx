import clsx from "clsx";
import React from "react";

import './Input.scss'

interface IInputProps extends React.ComponentProps<"input"> {
    label?: string
}

export const Input: React.FC<IInputProps> = ({
    value,
    onChange,
    placeholder,
    className
}) => {
    return (
        <input
            className={clsx("input", className)}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            data-hover
        />
    )
}