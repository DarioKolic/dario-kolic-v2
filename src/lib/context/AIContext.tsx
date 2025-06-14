"use client"

import React, { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";
import { noop } from 'lodash'
import { IMessage } from "../interfaces";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { postMessageRequest } from "../actions";

interface IAIContext {
    isChatOpen: boolean
    setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>
    isUpworkUser: boolean
    setIsUpworkUser: React.Dispatch<React.SetStateAction<boolean>>
    handleOpenAIChat: () => void
    handleCloseAIChat: () => void
    handleSendMessage: (message: string, previousMessages: IMessage[]) => void
    messages: IMessage[]
    chatMessage: string
    setChatMessage: React.Dispatch<React.SetStateAction<string>>
}

const AIContext = createContext<IAIContext>({
    isChatOpen: false,
    setIsChatOpen: noop,
    isUpworkUser: false,
    setIsUpworkUser: noop,
    handleOpenAIChat: noop,
    handleCloseAIChat: noop,
    handleSendMessage: noop,
    messages: [],
    chatMessage: "",
    setChatMessage: noop
})

export const useAIContext = () => {
    const aiContext = useContext(AIContext)

    if(!aiContext) {
        throw new Error("useAIContext hook cannot be used outside its provider: <AIContextProvider />")
    }

    return aiContext
}

export const AIContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isUpworkUser, setIsUpworkUser] = useState(false);
    const [chatMessage, setChatMessage] = useState("")
    const [messages, setMessages] = useState<IMessage[]>([])
    const [ isChatOpen, setIsChatOpen ] = useState(false)
    const router = useRouter()
    const [promptFeedback, setPromptFeedback] = useState(false)

    const handleOpenAIChat = useCallback(() => {
        router.push('/chat')
    }, [router])

    const handleCloseAIChat = useCallback(() => {
        setIsChatOpen(false)

        router.back()
    }, [router])

    const handleSendMessage = useCallback(async (message: string, previousMessages: IMessage[]) => {
        const newMessage: IMessage = {
            id: v4(),
            message,
            persona: "user",
            createdAt: new Date()
        }

        const messagesContainer = document.querySelector('.ai-chat__messages');

        setMessages(messages => {
            return [
                ...messages,
                newMessage
            ]
        })

        try {
            const stream = await postMessageRequest(message, previousMessages)

            const aiMessageId = v4()
            let aiMessage: IMessage = {
                id: aiMessageId,
                message: "",
                persona: "assistant",
                createdAt: new Date()
            }

            setMessages(messages => [...messages, aiMessage])

            const reader = stream[Symbol.asyncIterator]()
            
            while (true) {
                const { done, value } = await reader.next()
                
                if (done) {
                    break
                }

                setPromptFeedback(value.askForFeedback || false)

                if (value && value.response) {
                    // Update the AI message with the current response
                    aiMessage = {
                        ...aiMessage,
                        message: value.response
                    }

                    // Update messages with the new content
                    setMessages(messages => 
                        messages.map(msg => 
                            msg.id === aiMessageId 
                                ? aiMessage
                                : msg
                        )
                    )

                    messagesContainer?.scrollTo({
                        top: messagesContainer?.scrollHeight,
                        behavior: 'smooth'
                    });
                }
            }
        } catch (error) {
            console.error('Error processing AI response:', error)
            // Add error message
            const errorMessage: IMessage = {
                id: v4(),
                message: "Sorry, I am out of messages for today. Please come back tomorrow if you want to chat.",
                persona: "assistant",
                createdAt: new Date()
            }

            setChatMessage(message)
            setMessages(messages => [...messages, errorMessage])
        } finally {
            // setIsLoading(false)
        }
    }, [])
    console.log({ promptFeedback })
    return (
        <AIContext.Provider
            value={{
                isChatOpen,
                setIsChatOpen,
                isUpworkUser,
                setIsUpworkUser,
                handleOpenAIChat,
                handleCloseAIChat,
                handleSendMessage,
                messages,
                chatMessage,
                setChatMessage
            }}
        >
            {children}
        </AIContext.Provider>
    )
}