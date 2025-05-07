"use client"

import React, { createContext, PropsWithChildren } from "react";

interface INavigationContext {
    currentRoute: string
}

const NavigationContext = createContext<INavigationContext>({
    currentRoute: ''
})

export const NavigationContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <NavigationContext.Provider
            value={{
                currentRoute: ''
            }}
        >
            {children}
        </NavigationContext.Provider>
    )
}