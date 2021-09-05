import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import Category from './pages/Category';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';
import Cart from './pages/Cart';
import TermsAndConditions from './pages/TermsAndConditions';


const firebaseApp = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {

  constructor() {
    super();
    this.state ={}
  }

  render() {
    console.log(this.props);
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    console.log(user);

    return(

      <div>
        {/* {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
      }
      {
        user
          ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}>Sign in with Google</button>
      } */}
        

        <Switch>
          {/* <Route exact={true} path="/" component={ Home } /> */}
          {/* <Login signInWithGoogle={signInWithGoogle}/> */}

          <Route
            path='/login'
            // {...props} => paseaza mai departe toate propsuilre pe care le aveam
            render={(props) => <Login {...props} signInWithGoogle={signInWithGoogle} />}
          />

          <Route exact
            path='/'
            // {...props} => paseaza mai departe toate propsuilre pe care le aveam
            render={(props) => <Home {...props} signOut={signOut} user={user} />}
          />

          <Route path="/about" component={ About }/>
          <Route path="/terms-and-conditions" component={ TermsAndConditions } />
          {/* <Route path="/login" component={ Login }/> */}
          <Route path="/category/:categoryName" component={Category}/>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={ Page404 }/>
        </Switch>
      </div>


    )    

  }

}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
