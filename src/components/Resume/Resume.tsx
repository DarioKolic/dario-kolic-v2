"use client"

import React from "react";
import { ResumeItem } from "./ResumeItem/ResumeItem";
import { projects } from "@/lib/constants";

import './Resume.scss'
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { Button } from "../Button/Button";

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

            <Link className="resume__view-resume" href='/cv/dario-kolic-resume-uw.pdf' target="_blank" prefetch>
                <Button label="View full resume" icon={<IoDocumentText />} />
            </Link>
        </div>
    )
}