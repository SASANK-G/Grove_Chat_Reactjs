import React from 'react'
import {GoogleOutlined} from '@ant-design/icons';
import "firebase/app";

import firebase from 'firebase/app';
import { auth } from '../firebase';

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <div>
          <h2> Welcome to GroveChat!!</h2>
        </div>

        <div 
            className="login-button google"
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
            <GoogleOutlined/> Sign in with google
        </div>
      </div>
      
    </div>
  );
}

export default Login
