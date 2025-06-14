
import React from "react";
import { ButtonProps, Button as MUIButton } from '@mui/material'

import './Button.scss'

interface IButtonProps extends ButtonProps {
    label: React.ReactNode
    icon?: React.ReactNode
}

export const Button: React.FC<IButtonProps> = ({
    label,
    variant = "contained",
    icon,
    onClick,
    sx,
    ...props
}) => {
    return (
        <MUIButton
            variant={variant}
            onClick={onClick}
            startIcon={icon}
            sx={{
                ...sx,
                '&:disabled': {
                    background: '#8A2BE2',
                    color: '#D1D5DB',
                    boxShadow: 'inset 0 0 24px 12px #5D1E8C',
                    cursor: "not-allowed"
                }
            }}
            data-hover
            {...props}
        >
            {label}
        </MUIButton>
    )
}