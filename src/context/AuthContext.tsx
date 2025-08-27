import React, { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{ 
    session: string, 
    signIn: () => void | undefined, 
    signUp: () => void | undefined, 
} | any>(null)

export const AuthContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [session, setSession] = useState<any>(undefined)
    
    // Signup
    const SignUp = async ({ email, password}: {email: string, password: string}) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) {
            console.log("Error signing up:", error);
            const response = { success: false, error }
            return response
        }
        const response = { success: true, data }
        return response
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        });
    }, []);

    const SignIn = async ({ email, password}: {email: string, password: string}) => {
        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if(error){
                const result = {success: false, error}
                console.error("Sign in error occured: ", error)
                return result
            }
            // console.log("Sign-in success: ", data)
            const result = {success: true, data}
            return result
        } catch (error) {
            console.error("An error occured: ", error);
        }
    }
    const SignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("there was an error: ", error);
            return {success: false, error}
        }
        return {success: true}
    }

    return (
        <AuthContext.Provider value={{ 
            session,
            SignUp,
            SignIn,
            SignOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}

