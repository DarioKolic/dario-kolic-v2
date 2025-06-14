"use client"

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { stopPropagating } from '@/lib/utils/global';
import { useAIContext } from '@/lib/context/AIContext';

import './UpworkUserDetector.scss'

export const UpworkUserDetector = () => {
    const { isUpworkUser, setIsUpworkUser } = useAIContext()

    // const [detectionMethods, setDetectionMethods] = useState<string[]>([]);
    // const [showDebug, setShowDebug] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const detectUpworkUser = () => {
            const methods = [];
            let isFromUpwork = false;

            const referrer = document.referrer.toLowerCase();
            if (referrer.includes('upwork.com')) {
                methods.push('Referrer: ' + referrer);
                isFromUpwork = true;
            }

            const urlParams = new URLSearchParams(window.location.search);
            const utmSource = urlParams.get('utm_source');

            if (utmSource === 'upwork') {
                methods.push('UTM Source: ' + utmSource);
                isFromUpwork = true;
            }

            const sessionUpwork = sessionStorage.getItem('upwork_visitor');
            if (sessionUpwork === 'true') {
                methods.push('Session storage: marked as Upwork visitor');
                isFromUpwork = true;
            }

            const localUpwork = localStorage.getItem('upwork_history');
            if (localUpwork === 'true') {
                methods.push('Local storage: previous Upwork visit detected');
                isFromUpwork = true;
            }

            const path = window.location.pathname.toLowerCase();
            if (path.includes('upwork')) {
                methods.push('URL path contains Upwork indicators: ' + path);
                isFromUpwork = true;
            }

            const hash = window.location.hash.toLowerCase();
            if (hash.includes('upwork')) {
                methods.push('Hash parameter: ' + hash);
                isFromUpwork = true;
            }

            if (isFromUpwork) {
                sessionStorage.setItem('upwork_visitor', 'true');
                localStorage.setItem('upwork_history', 'true');
            }

            setIsModalOpen(
                sessionStorage.getItem('upwork_modal_closed') === "true"
                    ? false
                    : isFromUpwork
            )
            setIsUpworkUser(isFromUpwork);
            // setDetectionMethods(methods);
        };

        detectUpworkUser();
    }, [setIsUpworkUser]);

    // const markAsUpworkUser = () => {
    //     setIsUpworkUser(true);
    //     sessionStorage.setItem('upwork_visitor', 'true');
    //     localStorage.setItem('upwork_history', 'true');

    //     setDetectionMethods([...detectionMethods, 'Manual: User self-identified']);
    // };

    // const markAsNonUpworkUser = () => {
    //     setIsUpworkUser(false);
    //     sessionStorage.removeItem('upwork_visitor');
    //     localStorage.removeItem('upwork_history');

    //     setDetectionMethods(['Manual: User identified as non-Upwork']);
    // };

    const handleCloseModal = () => {
        setIsModalOpen(false)

        sessionStorage.setItem('upwork_modal_closed', "true");
    }

    if (!isUpworkUser) {
        return null;
    }

    return (
        <div 
            onClick={handleCloseModal}
            className={clsx("upwork-user-detector", {
                'upwork-user-detector_open': isModalOpen
            })}
        >
            <div
                onClick={stopPropagating}
                className='upwork-user-detector__inner'
            >
                <div className="upwork-user-detector__header">
                    <div className="upwork-user-detector__content">
                        <h3 className="upwork-user-detector__title">
                            👋 Welcome from Upwork!
                        </h3>

                        <p className="upwork-user-detector__message">
                            This is a portfolio demo. For business inquiries, please contact me through Upwork.
                        </p>
                    </div>

                    {/* <button
                        onClick={() => setShowDebug(!showDebug)}
                        className="upwork-user-detector__debug-toggle"
                    >
                        Debug
                    </button> */}
                </div>

                {/* {showDebug && (
                    <div className="upwork-user-detector__debug">
                        <p className="upwork-user-detector__debug-title">Detection Methods Used:</p>

                        {detectionMethods.length > 0 ? (
                            <ul className="upwork-user-detector__methods-list">
                                {detectionMethods.map((method, index) => (
                                    <li key={index} className="upwork-user-detector__method-item">{method}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="upwork-user-detector__no-methods">No Upwork indicators detected</p>
                        )}

                        <div className="upwork-user-detector__controls">
                            <button
                                onClick={markAsUpworkUser}
                                className="upwork-user-detector__button upwork-user-detector__button_primary"
                            >
                                Mark as Upwork
                            </button>

                            <button
                                onClick={markAsNonUpworkUser}
                                className="upwork-user-detector__button upwork-user-detector__button_secondary"
                            >
                                Mark as Non-Upwork
                            </button>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};