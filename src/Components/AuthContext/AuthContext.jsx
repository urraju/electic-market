

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig/FirebaseConfig";
import axios from "axios";
 

export const AuthProvider = createContext()
const googleProvider = new GoogleAuthProvider()
const AuthContext = ({children}) => {
    const [user ,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    

    const google = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const registation = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const singout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userUpdateProfile = (name,photo) => {
        return updateProfile(auth.currentUser,{
           displayName : name, photoURL : photo
        })
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}
            setUser(currentUser)
            setLoading(false)

            if(currentUser) {
                axios.post('https://electic-server.vercel.app/jwt',loggedUser, {withCredentials : true})
                .then(res => console.log('token respons', res.data))
            }else{
                axios.post('https://electic-server.vercel.app/logout',loggedUser, {withCredentials : true})
                .then(res => {
                    console.log('success data', res.data);
                })
            }
        })
        return () => unSubscribe()
    })
    const authInfo = {registation,signIn,singout,user,userUpdateProfile,loading,google}
    return(
        <AuthProvider.Provider value={authInfo}>
             {children}
        </AuthProvider.Provider>
    )}
export default AuthContext;