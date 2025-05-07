"use client"

import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";
import { noop } from 'lodash'
import { IMessage } from "../interfaces";
import { v4 } from "uuid";

interface IAIContext {
    isChatOpen: boolean
    setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleOpenAIChat: () => void
    handleCloseAIChat: () => void
    handleSendMessage: (message: string, previousMessages: IMessage[]) => void
    messages: IMessage[]
}

const AIContext = createContext<IAIContext>({
    isChatOpen: false,
    setIsChatOpen: noop,
    handleOpenAIChat: noop,
    handleCloseAIChat: noop,
    handleSendMessage: noop,
    messages: []
})

export const useAIContext = () => {
    const aiContext = useContext(AIContext)

    if(!aiContext) {
        throw new Error("useAIContext hook cannot be used outside its provider: <AIContextProvider />")
    }

    return aiContext
}

interface IAIContextProviderProps extends PropsWithChildren {
    postMessageRequest: (message: string, previousMessages: IMessage[]) => Promise<string>
}

export const AIContextProvider: React.FC<IAIContextProviderProps> = ({ children, postMessageRequest }) => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [ isChatOpen, setIsChatOpen ] = useState(false)

    const handleOpenAIChat = useCallback(() => {
        setIsChatOpen(true)
    }, [])

    const handleCloseAIChat = useCallback(() => {
        setIsChatOpen(false)
    }, [])

    const handleSendMessage = useCallback((message: string, previousMessages: IMessage[]) => {
        const newMessage: IMessage = {
            id: v4(),
            message,
            persona: "user",
            createdAt: new Date()
        }

        setMessages(messages => {
            return [
                ...messages,
                newMessage
            ]
        })

        postMessageRequest(message, previousMessages)
            .then(res => {
                setMessages(messages => {
                    return [
                        ...messages,
                        {
                            id: v4(),
                            message: res,
                            persona: "system",
                            createdAt: new Date()
                        }
                    ]
                })
        
            })
    }, [postMessageRequest])
 
    return (
        <AIContext.Provider
            value={{
                isChatOpen,
                setIsChatOpen,
                handleOpenAIChat,
                handleCloseAIChat,
                handleSendMessage,
                messages
            }}
        >
            {children}
        </AIContext.Provider>
    )
}