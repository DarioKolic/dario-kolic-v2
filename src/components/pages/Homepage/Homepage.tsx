"use client"

import React, { useEffect } from 'react'
import { About } from '@/components/About/About'
import { Resume } from '@/components/Resume/Resume'
import { Work } from '@/components/Work/Work'
import { Footer } from '@/components/Footer/Footer'
// import { Contact } from '@/components/Contact/Contact'


import './Homepage.scss'

export const Homepage = () => {
    useEffect(() => {
        // NOTE: Reset overlfow
        document.body.style.overflow = "auto"
    }, [])

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