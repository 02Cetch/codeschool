import React from 'react';

import {Route, Redirect} from 'react-router-dom';

export default function PrivateRoute({user, component: Component, data, onLogout, ...rest}){
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