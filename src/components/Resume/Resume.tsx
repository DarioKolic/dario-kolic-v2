"use client"

import React from "react";
import { ResumeItem } from "./ResumeItem/ResumeItem";
import { projects } from "@/lib/constants";

import './Resume.scss'

export const Resume = () => {
    return (
        <div className="resume" id="resume">
            <div className="resume__title">Resume</div>
            <div className="resume__summary">
                My most recent employments and achievemenets, summarised.
            </div>

            <div className="resume__content">
                {projects.map(p => {
                    return (
                        <ResumeItem
                            key={p.id}
                            project={p}
                        />
                    )
                })}
            </div>
        </div>
    )
}