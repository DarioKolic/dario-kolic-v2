"use client"

import Link from 'next/link'
import { v4 } from 'uuid'
import clsx from 'clsx'

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
        name: "Lorem Ipsum",
        url: "#",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt est debitis autem itaque eius vitae neque totam qui consequuntur?",
        isBlurred: true
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

           <div className='resources__content'>
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
           </div>
        </div>
    )
}