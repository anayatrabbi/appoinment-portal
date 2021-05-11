import React from 'react';
import signBg from '../../images/Group 140.png'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config'
const LogIn = () => {


    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }


    const handleGoogleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {

            const user = result.user;
            console.log(user)
           
        }).catch((error) => {
        
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div className="login-page container">
            <div className="row align-item-center">
                <div className="col-md-5 mt-5 pt-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
            <div className="col-md-7 d-none d-md-block align-self-end">
            <img className="img-fluid" src={signBg} alt="" />
            </div>   
            </div>        
        </div>
    );
};

export default LogIn;