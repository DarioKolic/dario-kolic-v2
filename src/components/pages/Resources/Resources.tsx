"use client"

import Link from 'next/link'
import { v4 } from 'uuid'
import clsx from 'clsx'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import './Resources.scss'

const resources = [
    {
        id: v4(),
        name: "React Helmet vs Next.js",
        url: "https://docs.google.com/spreadsheets/d/1gHnt7iLJuxhM77Vv0ez_psWkANjtFwbA5AneFfMZGD4/edit?usp=sharing",
        description: "A comparisson between React Helmet (Simple <head> management for React) and Next.js (Full framework with optimized <head> and more.)"
    },
    {
        id: v4(),
        name: "Gemini vs Claude: AI Coding Assistants",
        url: "https://medium.com/@dariokolic/gemini-vs-claude-a-developers-guide-to-ai-coding-assistants-ee46afd09c09",
        description: "This comprehensive guide compares Google's Gemini Pro and Anthropic's Claude as AI-powered development tools, examining their distinct approaches to coding assistance and helping developers choose the right tool for their specific needs.",
    },
    {
        id: v4(),
        name: "Lorem Ipsum dolor",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est debitis autem itaque eius vitae neque totam qui consequuntur? Nulla ad quae maiores perferendis quis. Quod saepe itaque est sit.",
        isBlurred: true
    },
    {
        id: v4(),
        name: "Lorem Ipsum adipisicing elit",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad quae maiores perferendis quis. Quod saepe itaque est sit. ",
        isBlurred: true
    },
    {
        id: v4(),
        name: "Lorem Ipsum",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe itaque est sit.",
        isBlurred: true
    },

    {
        id: v4(),
        name: "Lorem Ipsum sit",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe itaque est sit.",
        isBlurred: true
    },
    {
        id: v4(),
        name: "Lorem Ipsum amet consectetur",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est debitis autem itaque eius vitae neque totam qui consequuntur? Quod saepe itaque est sit.",
        isBlurred: true
    },
    {
        id: v4(),
        name: "Lorem Ipsum",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est debitis autem itaque eius vitae neque totam qui consequuntur? Nulla ad quae maiores perferendis quis.",
        isBlurred: true
    },
]

export const Resources: React.FC = ({
}) => {
    return (
        <div className='resources'>
           <div className='resources__title'>
                Resources
           </div>

           <ResponsiveMasonry
                className='resources__content'
                columnsCountBreakPoints={{ 320: 1, 1024: 2 }}
            >
                <Masonry gutter='16px'>
                    {resources.map(resource => {
                        return (
                            <Link
                                key={resource.id} 
                                href={resource.url}
                                className={clsx('resources__item', {
                                    "resources__item_blurred": resource.isBlurred
                                })}
                                target='_blank'
                                prefetch
                            >
                                <div
                                    className='resources__item-title'
                                >
                                    {resource.name}
                                </div>
                                <div
                                    className='resources__item-description'
                                >
                                    {resource.description}
                                </div>
                            </Link>
                        )
                    })} 
                </Masonry>
            </ResponsiveMasonry>

           <div className='resources__content'>
                
           </div>
        </div>
    )
}