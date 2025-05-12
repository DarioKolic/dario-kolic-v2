import React from "react";
import { IProject } from "@/lib/interfaces";
import { SkillDisplay } from "../SkillDisplay/SkillDisplay";
import { Button } from "../Button/Button";
import { IoEye } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import "./Project.scss"

interface IProjectProps {
    project: IProject
}

export const Project: React.FC<IProjectProps> = ({
    project
}) => {
    return (
        <div className="project">
            <div className="project__title">
                {project.company}
            </div>
            
            <div className="project__footer">
                <div className="project__description">
                    {project.caseStudy.description}
                </div>

                <Link className="project__link" href={`/case-study/${project.company.toLowerCase()}`}>
                    <Button
                        label="View Case study"
                        icon={<IoEye />}
                        sx={{
                            minWidth: "182px"
                        }}
                    />
                </Link>
            </div>

            <div className="project__image">
                <Image src={project.imageUrl} alt={`${project.company} website`} fill/>
                {/* <iframe src={project.website} className="project__website" sandbox="allow-scripts" /> */}
            </div>

            <div className="project__skills">
                {project.skills.map(skill => {
                    return (
                        <SkillDisplay key={`${project.id}_${skill}`} skill={skill} />
                    )
                })}
            </div>
        </div>
    )
}