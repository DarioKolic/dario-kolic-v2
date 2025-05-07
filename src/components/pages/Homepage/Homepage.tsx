import React from 'react'
import { About } from '@/components/About/About'
import { Resume } from '@/components/Resume/Resume'
import { Work } from '@/components/Work/Work'
// import { Contact } from '@/components/Contact/Contact'


import './Homepage.scss'

export const Homepage = async () => {
    return (
        <div className='homepage'>
            <About />
            <Work />
            <Resume />
            {/* <Contact /> */}
        </div>
    )
}