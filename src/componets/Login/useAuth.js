import React, { useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import {useState, createContext, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () =>  useContext(AuthContext);

export const  PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
const getUser = user => {
    const {displayName, email, photoURL} = user;
    return {name:displayName, email:email,photo: photoURL}
   
}
const Auth = () => {
    const [user, setUser] = useState(null);
    const signInWithGoogle = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();

        return firebase.auth().signInWithPopup(provider)
        .then(res=> {
            const SignedInUser = getUser(res.user);
            setUser(SignedInUser)
            return SignedInUser;
        })
        .catch(err => {
            console.log(err.message)
            return err.message;
        })
    }

    const signOut = () => {
        return firebase.auth().signOut()
        .then(() => setUser(null))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
               const currUser = getUser(user);
               setUser(currUser);
            } else {
              console.log("No user is signed in.");
            }
          });
          
    },[])

    return {
        user,
        signInWithGoogle,
        signOut
    }
}



export default Auth;