import React from 'react'
import { IProject } from '@/lib/interfaces'

import './ResumeItem.scss'

interface IResumeItemProps {
    project: IProject
}

export const ResumeItem: React.FC<IResumeItemProps> = ({ project }) => {
    return (
        <div className='resume-item'>
            <div className='resume-item__header'>
                <a className='resume-item__company'>
                    {project.company},
                </a>
                {project.location} — <i>{project.role}</i>
            </div>

            <div className='resume-item__timespan'>
                {project.startDate} - {project.endDate || "PRESENT"}
            </div>

            <ul className='resume-item__achievements'>
                {project.achievements.map(a => {
                    return (
                        <li key={a}>{a}</li>
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