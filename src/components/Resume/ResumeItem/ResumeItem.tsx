import React from 'react'
import { IProject } from '@/lib/interfaces'

import './ResumeItem.scss'
import Link from 'next/link'

interface IResumeItemProps {
    project: IProject
}

export const ResumeItem: React.FC<IResumeItemProps> = ({ project }) => {
    return (
        <div className='resume-item'>
            <div className='resume-item__header'>
                <Link className='resume-item__company' href={project.website} target='_blank'>
                    {project.company},
                </Link>
                {project.location} — <i>{project.role}</i>
            </div>

            <div className='resume-item__timespan'>
                {project.startDate} - {project.endDate || "PRESENT"}
            </div>

            <ul className='resume-item__achievements'>
                {project.achievements.map(a => {
                    return (
                        <li className='resume-item__achievements-item' key={a}>{a}</li>
                    )
                })}
            </ul>

            <div className='resume-item__skills'>
                {project.skills.map((skill, i) => {
                    return `${skill}${i === project.skills.length - 1 ? '' : ','} `
                })}
            </div>
        </div>
    )
}