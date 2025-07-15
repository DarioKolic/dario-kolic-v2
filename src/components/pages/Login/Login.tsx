"use client"

import React, { useEffect, useRef, useState } from "react";
import { signInAnonymously } from "@/app/auth/actions";
import { Button } from "@/components/Button/Button";
import { IoPerson } from "react-icons/io5";
import { SxProps } from "@mui/material";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import './Login.scss'

const buttonSx: SxProps = {
    width: '100%',
    maxWidth: 'none',
    paddingBlock: '12px',
}

export const Login: React.FC = () => {
    const captchaRef = useRef<HCaptcha>(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isChaptchaOpen, setIsChaptchaOpen] = useState(false)

    const onCaptchaLoad = () => {
        captchaRef.current?.execute()
    }

    const onCaptchaExpire = () => {
        captchaRef.current?.resetCaptcha()
    };

    const onCaptchaError = (err: string) => {
        console.error("hCaptcha error:", err);
    };

    const handleShowCaptcha = (e: React.FormEvent) => {
        e.preventDefault()

        setIsChaptchaOpen(true)
    }

    const handleAnonymousSignIn = async (captchaToken: string) => {
        if (!captchaToken) {
            alert("Please complete the CAPTCHA verification");

            return;
        }

        setIsLoggingIn(true);

        try {
            await signInAnonymously(captchaToken);
        } catch (error) {
            console.error("Sign in failed:", error);

            captchaRef.current?.resetCaptcha();
        } finally {
            setIsLoggingIn(false);
        }
    };

    useEffect(() => {
        if(isChaptchaOpen) {
            captchaRef.current?.execute()
        }
    }, [isChaptchaOpen])

    return (
        <div className="login">
            <div className="login__title">Log in to continue to chat!</div>
            <div className="login__summary"><b>Why log in?</b> It&apos;s a security measure to keep the chat secure an free of malicious users.</div>

            <div className="login__form">
                {/* {!isUpworkUser && (
                    <form action={signInWithGoogle}>
                        <Button
                            icon={<IoLogoGoogle />}
                            type="submit"
                            label="Sign in with google"
                            sx={buttonSx}
                        />
                    </form>
                )} */}

                <form className="login__form-anonymous" onSubmit={handleShowCaptcha}>
                    <Button
                        icon={<IoPerson />}
                        type="submit"
                        label={isLoggingIn ? "Signing in..." : "Sign in anonymously"}
                        sx={buttonSx}
                        disabled={isLoggingIn}
                    />

                    {isChaptchaOpen && (
                        <HCaptcha
                            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY!}
                            onLoad={onCaptchaLoad}
                            onVerify={handleAnonymousSignIn}
                            onExpire={onCaptchaExpire}
                            onError={onCaptchaError}
                            ref={captchaRef}
                        />
                    )}
                </form>
            </div>
        </div>
    )
}