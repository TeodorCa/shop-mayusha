import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import './Login.css';

function Login(props) {
    const {signInWithGoogle, history} = props;

    function handleSignInWithGoogle() {
        signInWithGoogle()
            .then(()=> {
                history.push('/');
            });
    }

    console.log(props);
    return(
    <div className="login-page">
       <h1>Login</h1> 
        <Link to="/">
            <img src={Logo} alt="logo"/>
            </Link> 
            <button className="btn btn-outline-dark" onClick={handleSignInWithGoogle}>
                Sign in with Google
            </button>
    </div>
    )
}

export default Login;