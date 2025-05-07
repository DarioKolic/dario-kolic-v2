"use client"

import React from "react";
import { projects } from "@/lib/constants";
import { Project } from "../Project/Project";
import { Button } from "../Button/Button";

import './Work.scss'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export const Work = () => {
    return (
        <div className="work" id="work">
            <div className="work__title">Work</div>
            <div className="work__summary">
                My past work with images and skills outlined. Short descriptions included to explain what the project was about.
            </div>

            <div className="work__projects">
                {projects.slice(0, 2).map(p => {
                    return (
                        <Project key={`${p.id}_work`} project={p} />
                    )
                })}
            </div>

            <Button 
                label="View more projects"
                icon={<MdOutlineKeyboardDoubleArrowRight  />}
                sx={{
                    margin: '80px auto 0 auto',
                    display: 'flex',
                    visibility: 'hidden' // Remove when ready
                }}
            />
        </div>
    )
}