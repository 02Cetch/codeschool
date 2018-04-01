import React from 'react';

import {Link} from 'react-router-dom';

export default function Button(props){
    return(
        <Link onClick={props.onLogout} to={props.to} className={props.className} {...props}>{props.children}</Link>
    );
}