"use client"

import React, { useCallback } from "react";
import { useAIContext } from "@/lib/context/AIContext";
import { Input } from "../Input/Input";
import { stopPropagating } from "@/lib/utils/global";
import Markdown from "react-markdown";
import { IoChatboxEllipses, IoClose, IoExitOutline, IoInformationCircle } from "react-icons/io5";
import { Button } from "../Button/Button";
import { Avatar } from "@mui/material";
import clsx from "clsx";
import { signOut } from "@/app/auth/actions";

import './AIChat.scss'

interface IAIChat {
    isIntercepted?: boolean
}

export const AIChat: React.FC<IAIChat> = ({ isIntercepted }) => {
    const {
        handleCloseAIChat,
        handleSendMessage,
        messages,
        chatMessage,
        setChatMessage
    } = useAIContext()

    const handleChangeChatMessage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setChatMessage(e.target.value)
    }, [setChatMessage])

    const handleSubmitMessage = useCallback((e: React.FormEvent) => {
        stopPropagating(e)
        setChatMessage("")
        handleSendMessage(chatMessage, messages)
    }, [chatMessage, handleSendMessage, messages, setChatMessage])

    return (
        <div
            className={clsx("ai-chat", {
                "ai-chat_page": !isIntercepted
            })}
        >
            <div className="ai-chat__header">
                <div className="ai-chat__header-content">
                    <h3 className="ai-chat__title">
                        <IoChatboxEllipses /> Chat with my AI Persona
                    </h3>

                    <p className="ai-chat__title-summary">
                        My AI is limited and on free version to avoid a big bill. Please be reasonable and don&apos;t overuse as there is no limit to how many messages you can send.
                    </p>
                </div>

                <Button
                    onClick={handleCloseAIChat}
                    label={<IoClose />} 
                    variant="text"
                    sx={{
                        fontSize: '32px',
                        padding: '4px',
                        width: "40px",
                        height: '40px',
                        minWidth: '40px'
                    }}
                />
            </div>

            <div className="ai-chat__messages">
                {messages.map(x => {
                    return (
                        <div key={x.id} className="ai-chat__message">
                            <Avatar
                                src={x.persona === "assistant" ? "/portret.jpg" : ""}
                            >
                                {x.persona === "assistant" ? "D" : "Y"}
                            </Avatar>

                            <div>
                                <div className="ai-chat__message-user">
                                    {x.persona === "assistant" ? "Dario" : "You"}
                                </div>

                                <div className="ai-chat__message-text">
                                    <Markdown >{x.message}</Markdown>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
            <div className="ai-chat__footer">
                <div className="ai-chat__footer-inner">
                    <form onSubmit={handleSubmitMessage}>
                        <Input
                            onChange={handleChangeChatMessage}
                            value={chatMessage}
                            placeholder="👋 Ask me anything..."
                        />
                    </form>

                    <Button
                        label={<IoExitOutline />}
                        onClick={signOut}
                        sx={{
                            background: "transparent",
                            boxShadow: 'none',
                            minWidth: 0,
                            padding: '4px',
                            fontSize: '32px'
                        }}
                    />
                </div>
                <p className="ai-chat__footer-text">
                    <IoInformationCircle />
                    Messages are not yet stored and refreshing the page will delete the conversation
                </p>
            </div>
        </div>
    )
}