import React , {useContext} from 'react';
import{Redirect, Route } from 'react-router-dom';
import {UserContext} from '../../../App';

const PrivateRoute = ({children, ...rest}) => {

    // const user = JSON.parse(localStorage.getItem('user')) || {} ; user.email
    const [signInUser , setSignInUser] = useContext(UserContext);
    return(
        <Route
        {...rest}
        render={({location}) => 
           true  ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location}
                }}
                />
                ) 
            }
        />
    );
}

export default PrivateRoute;