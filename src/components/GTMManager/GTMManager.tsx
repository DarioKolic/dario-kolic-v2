// components/CookieConsent.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '../Button/Button';

import './GTMManager.scss';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dataLayer: any[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        gtag: (...args: any[]) => void;
    }
}

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState<{
        necessary: boolean;
        analytics: boolean;
        marketing: boolean;
        functional: boolean;
        personalization: boolean;
        social_media: boolean;
        security: boolean;
    }>({
        necessary: true, // Always true
        analytics: false,
        marketing: false,
        functional: false,
        personalization: false,
        social_media: false,
        security: true, // Often considered necessary
    });

    const loadGTM = useCallback(() => {
        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        
        // Load GTM script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WQFZXHG3';
        document.head.appendChild(script);

        // Initialize GTM
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });

        // Send consent update to GTM
        window.dataLayer.push({
            event: 'consent_update',
            analytics_storage: consent.analytics ? 'granted' : 'denied',
            ad_storage: consent.marketing ? 'granted' : 'denied',
            ad_user_data: consent.marketing ? 'granted' : 'denied',
            ad_personalization: consent.personalization ? 'granted' : 'denied',
            functionality_storage: consent.functional ? 'granted' : 'denied',
            personalization_storage: consent.personalization ? 'granted' : 'denied',
            security_storage: consent.security ? 'granted' : 'denied'
        });
    }, [ consent ])

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie-consent');

        if (savedConsent) {
            const parsedConsent = JSON.parse(savedConsent);
            setConsent(parsedConsent);
            
            if (parsedConsent.analytics) {
                loadGTM();
            }
        } else {
            setShowBanner(true);
        }
    }, [loadGTM]);

    const handleAcceptAll = () => {
        const newConsent = {
        necessary: true,
        analytics: true,
        marketing: true,
        functional: true,
        personalization: true,
        social_media: true,
        security: true,
        };
        
        setConsent(newConsent);
        localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
        setShowBanner(false);
        
        loadGTM();
    };

    const handleAcceptNecessary = () => {
        const newConsent = {
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
        personalization: false,
        social_media: false,
        security: true,
        };
        
        setConsent(newConsent);
        localStorage.setItem('cookie-consent', JSON.stringify(newConsent));
        setShowBanner(false);
    };

    const handleCustomConsent = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(consent));
        setShowBanner(false);
        
        if (consent.analytics) {
            loadGTM();
        }
    };

    if (!showBanner) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent__container">
                <div className="cookie-consent__content">
                    <div className="cookie-consent__info">
                        <h3 className="cookie-consent__title">Cookie Settings</h3>

                        <p className="cookie-consent__description">
                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                            By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                        </p>
                        
                        <div className="cookie-consent__options">
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.necessary}
                                    disabled
                                    className="cookie-option__checkbox cookie-option__checkbox_disabled"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Necessary (Required)</span>

                                    <p className="cookie-option__description">Essential for basic site functionality</p>
                                </div>
                            </label>
                            
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.security}
                                    disabled
                                    className="cookie-option__checkbox cookie-option__checkbox_disabled"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Security (Required)</span>

                                    <p className="cookie-option__description">Protection against fraud and abuse</p>
                                </div>
                            </label>
                            
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.analytics}
                                    onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                                    className="cookie-option__checkbox"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Analytics & Performance</span>

                                    <p className="cookie-option__description">Help us understand how visitors interact with our website</p>
                                </div>
                            </label>
                        
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.functional}
                                    onChange={(e) => setConsent(prev => ({ ...prev, functional: e.target.checked }))}
                                    className="cookie-option__checkbox"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Functional</span>

                                    <p className="cookie-option__description">Remember your preferences and settings</p>
                                </div>
                            </label>
                        
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.personalization}
                                    onChange={(e) => setConsent(prev => ({ ...prev, personalization: e.target.checked }))}
                                    className="cookie-option__checkbox"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Personalization</span>

                                    <p className="cookie-option__description">Customize content and experiences for you</p>
                                </div>
                            </label>
                        
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.marketing}
                                    onChange={(e) => setConsent(prev => ({ ...prev, marketing: e.target.checked }))}
                                    className="cookie-option__checkbox"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Marketing & Advertising</span>

                                    <p className="cookie-option__description">Show you relevant ads and measure their effectiveness</p>
                                </div>
                            </label>
                        
                            <label className="cookie-option">
                                <input
                                    type="checkbox"
                                    checked={consent.social_media}
                                    onChange={(e) => setConsent(prev => ({ ...prev, social_media: e.target.checked }))}
                                    className="cookie-option__checkbox"
                                />

                                <div className="cookie-option__content">
                                    <span className="cookie-option__title">Social Media</span>

                                    <p className="cookie-option__description">Enable social media features and sharing</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="cookie-consent__actions">
                        <Button
                            onClick={handleAcceptNecessary}
                            label="Only"
                        />
                        <Button
                            onClick={handleCustomConsent}
                            label="Save Preferences"
                        />
                        <Button
                            label="Accept All"
                            onClick={handleAcceptAll}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;

// components/GTMNoScript.tsx
export const GTMNoScript = () => {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WQFZXHG3"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export const gtmEvent = (eventName: string, parameters: Record<string, never> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

export const GTMManager = () => {
    return (
        <>
            <GTMNoScript />

            <CookieConsent />
        </>
    )
}

// Example usage:
// gtmEvent('page_view', { page_title: 'Home Page' });
// gtmEvent('button_click', { button_name: 'CTA Button' });