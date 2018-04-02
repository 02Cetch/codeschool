import React, {Component} from 'react';

import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({user, component: Component, data, onLogout, redirected, ...rest}) {
    if(user === null){
        redirected();
    }
    return(
        <Route {...rest} render={
            props=> (
                user ?
                    <Component data={data} onLogout={onLogout}{...props} />
                    :
                    <Redirect to="/" />
            )
        } />
    );
}