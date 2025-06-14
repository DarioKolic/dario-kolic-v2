"use client"

import React, { PropsWithChildren } from "react"
import { Header } from "../Header/Header"
import { NavigationContextProvider } from "@/lib/context/NavigationContext"
import { AIContextProvider } from "@/lib/context/AIContext"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { UpworkUserDetector } from "../UpworkUserDetector/UpworkUserDetector"

import './AppLayout.scss'


export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname()

    return (
        <NavigationContextProvider>
            <AIContextProvider>
                <div
                    className={clsx("app-layout", {
                        "app-layout_chat": pathname.startsWith('/chat')
                    })}
                    id="about"
                >
                    {
                        (pathname === "/" || 
                        pathname === "/resources" || 
                        pathname === "/chat" || 
                        pathname.startsWith('/case-study')
                        ) && (
                            <Header />
                        )
                    }

                    <UpworkUserDetector />

                    {children}
                </div>
            </AIContextProvider>
        </NavigationContextProvider>
    )
}