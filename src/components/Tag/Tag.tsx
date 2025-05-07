import React, { PropsWithChildren } from "react";

import './Tag.scss'

interface ITagProps extends PropsWithChildren {
    icon?: React.ReactNode
}

export const Tag: React.FC<ITagProps> = ({ icon, children }) => {
    return (
        <div className="tag">
            {icon && (
                <div className="tag__icon">
                    {icon}
                </div>
            )}

            <div className="tag__content">
                {children}
            </div>
        </div>
    )
}