"use client"

import React, { useCallback, useState } from "react";
import { Drawer } from "../Drawer/Drawer";
import { useAIContext } from "@/lib/context/AIContext";
import { Input } from "../Input/Input";
import { stopPropagating } from "@/lib/utils";
import Markdown from "react-markdown";

import './AIChat.scss'

export const AIChat = () => {
    const { isChatOpen, handleCloseAIChat, handleSendMessage, messages } = useAIContext()
    const [chatMessage, setChatMessage] = useState("")

    const handleChangeChatMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setChatMessage(e.target.value)
    }, [])

    const handleSubmitMessage = useCallback((e: React.FormEvent) => {
        stopPropagating(e)
        handleSendMessage(chatMessage, messages)
    }, [chatMessage, handleSendMessage, messages])

    return (
        <Drawer 
            // isOpen={isChatOpen || true}
            isOpen={isChatOpen}
            handleClose={handleCloseAIChat}
        >
            <div className="ai-chat">
                <h3 className="ai-chat__title">Chat with my AI Persona</h3>

                <div className="ai-chat__messages">
                    {messages.map(x => {
                        return (
                            <div key={x.id} className="ai-chat__message">
                                <div className="ai-chat__message-user">
                                    {x.persona === "system" ? "Dario" : "You"}
                                </div>

                                <div className="ai-chat__message-content">
                                    <Markdown >{x.message}</Markdown>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <form className="ai-chat__footer" onSubmit={handleSubmitMessage}>
                    <Input
                        onChange={handleChangeChatMessage}
                        value={chatMessage}
                        placeholder="👋 Ask me anything..."
                    />
                </form>
            </div>
        </Drawer>
    )
}