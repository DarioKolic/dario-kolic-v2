import React from "react";
import { ButtonProps, Button as MUIButton } from '@mui/material'

import './Button.scss'
import { motion } from "framer-motion";

interface IButtonProps extends ButtonProps {
    label: string
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
                cursor: 'none',
                ...sx
            }}
            data-hover
            {...props}
        >
            {label}
        </MUIButton>
    )
}

export const AnimatedButton = motion.create(Button)