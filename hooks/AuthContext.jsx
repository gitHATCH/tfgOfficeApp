import React, { useEffect, useState } from "react";

const AuthContext = React.createContext([{}, ()=>{}])

const AuthProvider = (props) => {
    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    const authorize = async() => {
        const token = localStorage.getItem('token')
        if(!token){
            return
        }
        setAuth(token)
    }

    const unAuthorize = async() => {
        setAuth(false)
        localStorage.removeItem('token')
        router.push("/")
    }

    const handleAuth = (token) => {
        setAuth(token)
    }

    const loginUser = async(typeId, userId, password) => {
        localStorage.setItem('token',typeId+userId+password)
        setAuth(typeId+userId+password)
        authorize()
    }

    return (
        <AuthContext.Provider value={{auth,handleAuth,loading,authorize,unAuthorize,loginUser}}>
            {props.children}
        </AuthContext.Provider>
    )      
}

export {AuthContext, AuthProvider}