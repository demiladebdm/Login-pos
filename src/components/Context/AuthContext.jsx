import { createContext, useState, useEffect, useContext } from 'react'
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "firebase/auth";
import { auth } from '../../firebase';

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        console.log('createuser', password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // <form action="">

    // </form>

    // for user sign in
    const signIn = (email, password) => {
        // console.log('signin', signIn)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //to logout
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, signIn, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}