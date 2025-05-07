import React from "react";

import './Header.scss'
import Link from "next/link";
// interface IHeaderProps {
    
// }

export const Header = () => {

    return (
        <div className="header">
            <Link href="/#about"  className="header__item">
                About me
            </Link>

            <Link href="/#work" className="header__item">
                Work
            </Link>

            <Link href="/#resume" className="header__item">
                Resume
            </Link>
        </div>
    )
}