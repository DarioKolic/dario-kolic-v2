import { IoLogoGithub, IoLogoMedium  } from 'react-icons/io5'
import { FaSquareUpwork } from "react-icons/fa6";

import './Footer.scss'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__title'>
                Dario Kolic | Full-Stack & AI App Development Services
            </div>

            <div className='footer__links'>
                <Link 
                    href="https://www.upwork.com/freelancers/~0123658382c9cb797f" 
                    className='footer__link'
                    data-hover
                    target='_blank'
                    rel="noreferrer"
                >
                    <FaSquareUpwork />
                </Link>

                <Link 
                    href="https://medium.com/@dariokolic" 
                    className='footer__link'
                    data-hover
                    target='_blank'
                    rel="noreferrer"
                >
                    <IoLogoMedium  />
                </Link>

                <Link 
                    href="https://github.com/DarioKolic" 
                    className='footer__link'
                    data-hover
                    target='_blank'
                    rel="noreferrer"
                >
                    <IoLogoGithub />
                </Link>
            </div>

            <div className='footer__sub-title'>
                Find me on these websites
            </div>

            <div className='footer__company'>
                <div className='footer__company-item'>
                    PIB/Tax ID: <u>114227502</u>
                </div>

                <div className='footer__company-item'>
                    Registration Number:  <u>67415159</u>
                </div>
            </div>
        </footer>
    )
}