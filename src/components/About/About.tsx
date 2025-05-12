"use client"

import React, { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { IoCalendar, IoLogoGithub, IoDocumentText, IoGitCommit, IoHourglass, IoMail, IoChatbubbleEllipses } from "react-icons/io5";
import Link from "next/link";
import { useAIContext } from "@/lib/context/AIContext";

import './About.scss'


export const About = () => {
    const { handleOpenAIChat } = useAIContext()

    const navigateToUpwork = useCallback(() => {
        window.open("", "_blank")
    }, [])

    return (
        <div className="about">
            <h1 className="about__title">Hi, I&apos;m Dario</h1>
            <h5 className="about__summary">I&apos;m a Front-end focused Full-stack developer. I specialise in web application development and thrive in Startup environments</h5>

            <div className="about__button-group">
                <Link href='https://www.upwork.com/freelancers/~0123658382c9cb797f' target="_blank">
                    <Button label="Contact me" icon={<IoMail />} onClick={navigateToUpwork}/>
                </Link>

                <Link href='/cv/dario-kolic-resume-uw.pdf' target="_blank" prefetch>
                    <Button label="Download CV" variant="outlined" icon={<IoDocumentText />} />
                </Link>
            </div>

            <div className="about__tags">
                <Tag icon={<IoGitCommit />}>4K+ Commits</Tag>

                <Tag icon={<IoCalendar />}>{new Date().getFullYear() - 2019} years</Tag>

                <Tag icon={<IoGitCommit />}>5K+ hours</Tag>

                <Tag icon={<IoHourglass />}>from 32$/hr</Tag>
            </div>

            <div className="about__text">
                <h3 className="about__sub-title">Bio</h3>
                <p className="about__paragraph">Self-taught, proactive and self-driven web developer. I first came in touch with programming for the web 10 years ago.</p>
                <p className="about__paragraph">Started by writing some basic plugins for CS 1.6 in php, later switched to Unityscript and Unity engine for game development.</p>
                <p className="about__paragraph">Unityscript is based on Javascript, so it was a nice intro (and a complex one) to web development and Javascript in general.</p>
                <p className="about__paragraph">Since 2019 I&apos;ve been coding with passion for the web, solving complex problems and building major business features for startups.</p>
            </div>

            <div className="about__button-group">
                <Link href="https://github.com/DarioKolic" target="_blank">
                    <Button label="View GitHub" icon={<IoLogoGithub />} variant="outlined" />
                </Link>

                <Button
                    label="Chat with my AI"
                    icon={<IoChatbubbleEllipses />}
                    onClick={handleOpenAIChat}
                    sx={{
                        boxShadow: '0px 0px 12px 4px #301B3F',
                        '&:hover': {
                            boxShadow: '0px 0px 24px 7px #301B3F',
                        }
                    }}
                    disabled
                />
            </div>
        </div>
    )
}