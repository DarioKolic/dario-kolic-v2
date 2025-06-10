import React from 'react'
import { About } from '@/components/About/About'
import { Resume } from '@/components/Resume/Resume'
import { Work } from '@/components/Work/Work'
// import { Contact } from '@/components/Contact/Contact'


import './Homepage.scss'
import { Footer } from '@/components/Footer/Footer'

export const Homepage = async () => {
    return (
        <div className='homepage'>
            <About />
            <Work />
            <Resume />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}