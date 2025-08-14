import React, { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
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

