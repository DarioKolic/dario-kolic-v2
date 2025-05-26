import React from "react";
import Link from "next/link";
import { IoConstruct } from "react-icons/io5";

import './Header.scss'

export const Header = () => {

    return (
        <div className="header">
            <Link href="/#about"  className="header__item">
                About
            </Link>

            <Link href="/#work" className="header__item">
                Work
            </Link>

            <Link href="/#resume" className="header__item">
                Resume
            </Link>

            <Link href="/resources" className="header__item header__item_special">
                <IoConstruct /> Resources
            </Link>
        </div>
    )
}