"use client"

import React, { PropsWithChildren, useEffect } from "react";
import clsx from "clsx";
import { stopPropagating } from "@/lib/utils/global";

import './Drawer.scss'

interface IDrawerProps extends PropsWithChildren {
    isOpen: boolean
    handleClose: () => void
}

export const Drawer: React.FC<IDrawerProps> = ({
    isOpen, 
    handleClose,
    children
}) => {
    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <div
            className={clsx("drawer",{
                "drawer_open": isOpen
            })} 
            onClick={handleClose}
        >
            <div className="drawer__pane" />

            <div
                onClick={stopPropagating}
                className="drawer__inner"
            >
                {children}
            </div>
        </div>
    )
}