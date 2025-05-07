import { IProject } from '@/lib/interfaces'
import Image from 'next/image'

import './CaseStudy.scss'
import { SkillDisplay } from '@/components/SkillDisplay/SkillDisplay'

interface ICaseStudyProps {
    project: IProject
}

export const CaseStudy: React.FC<ICaseStudyProps> = ({
    project
}) => {
    return (
        <div className='case-study'>
            <div className="case-study__image">
                <Image src={project.imageUrl} alt={`${project.company} website`} fill/>
                {/* <iframe src={project.website} className="project__website" sandbox="allow-scripts" /> */}
            </div>

            <div className='case-study__content'>
                <div className='case-study__title'>
                    {project.company}
                </div>

                <div className='case-study__paragraph'>
                    {project.caseStudy.description}
                </div>

                {project.caseStudy.clientFeedback && (
                    <>
                        <div className='case-study__paragraph case-study__paragraph_feedback'
                            dangerouslySetInnerHTML={{
                                __html: project.caseStudy.clientFeedback
                            }}
                        />
                    </>
                )}

                <div className='case-study__sub-title'>
                    Skills used:
                </div>

                <div className="case-study__skills">
                    {project.skills.map(skill => {
                        return (
                            <SkillDisplay key={`${project.id}_${skill}`} skill={skill} />
                        )
                    })}
                </div>

                {project.caseStudy.outline && (
                    <>
                        <div className='case-study__sub-title'>
                            What I did?
                        </div>

                        <div className='case-study__paragraph'
                            dangerouslySetInnerHTML={{
                                __html: project.caseStudy.outline
                            }}
                        />
                    </>
                )}

                <div className='case-study__sub-title'>
                    What did I achieve?
                </div>

                <ul className='case-study__achievements'>
                    {project.achievements.map(x => {
                        return (
                            <li key={x}>
                                {x}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}