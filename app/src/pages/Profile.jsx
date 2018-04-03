import React, {Fragment} from 'react';
import PropTypes from 'prop-types'; // importing proptypes

import Header from '../components/Header';
import Nav from '../components/Nav';
import BasicAccountInfo from '../components/BasicAccountInfo'
import Preloader from '../components/Preloader';

export default function Profile(props){

    return(
        <Fragment>
            <Nav
                onLogout={props.onLogout}
                img={props.data.icon}
                userData={props.data}/>
            <Header
                userAvatar={props.data.icon}
                headerTitle={props.data.name}/>
            <div className="container" id="to">
                <div className="row">
                    <div className="col-md-12">
                        <section className="s-info">
                            <BasicAccountInfo user={props.data}/>
                        </section>
                    </div>
                </div>
            </div>
            <Preloader/>
        </Fragment>
    );
}
Profile.propTypes = {
    onLogin: PropTypes.func,
    redirected:  PropTypes.any,
    user: PropTypes.string
};