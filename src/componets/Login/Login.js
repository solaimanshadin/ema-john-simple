import React from 'react';
import Auth from './useAuth';


const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.signInWithGoogle()
        .then(res=> window.history.back())
    }

    const handleSignOut = () => {
        auth.signOut()
        .then(res => window.history.back())
        .catch(err => window.history.back())
    }
    console.log(auth)
    return (
        <div>
           <h2>Join the party</h2> 
           {
               auth.user ? <button onClick={handleSignOut}>SignOut</button> : <button onClick={handleSignIn}>Sign-in With Google</button>
           }
        </div>
    );
};

export default Login;