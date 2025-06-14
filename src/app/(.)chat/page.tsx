"use client"

import { AIChat } from "@/components/AIChat/AIChat"
import { Drawer } from "@/components/Drawer/Drawer"
import { useAIContext } from "@/lib/context/AIContext"
import { useEffect } from "react"

const ChatPageIntercept = () => {
    const {
        isChatOpen,
        setIsChatOpen,
        handleCloseAIChat,
    } = useAIContext()

    useEffect(() => {
        const timer = setTimeout(() => setIsChatOpen(true), 50)

        return () => clearTimeout(timer)
    }, [setIsChatOpen])
    
    return (
        <Drawer 
            isOpen={isChatOpen}
            handleClose={handleCloseAIChat}
        >
            <AIChat isIntercepted />
        </Drawer>
    )
}

export default ChatPageIntercept