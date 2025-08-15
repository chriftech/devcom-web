import React, { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext<{ session: string }>({ session: 'undefined' })

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [session] =  useState('undefined')
    return (
        <AuthContext.Provider value={{session}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}

