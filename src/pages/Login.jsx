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
    <div className="login-page d-flex flex-column justify-content-center align-items-center">
        <Link to="/">
            <img src={Logo} alt="logo"/>
        </Link> 
            <p>Choose a login method :</p>
            <button className="btn btn-outline-dark" onClick={handleSignInWithGoogle}>
                Sign in with Google
            </button>
        <Link to="/">
            <button className="btn btn-outline-dark back-to-menu">
                 Back to main menu
            </button>
        </Link>
    </div>
    )
}

export default Login;