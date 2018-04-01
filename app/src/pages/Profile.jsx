import React, {Fragment} from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';
import BasicAccountInfo from '../components/BasicAccountInfo'
import Preloader from '../components/Preloader';

import userInfo from '../api/user';

export default function Profile(props){

    return(
        <Fragment>
            <Nav
                img={userInfo.icon}
                userData={userInfo}/>
            <Header
                userAvatar={userInfo.icon}
                headerTitle={userInfo.name}/>
            <div className="container" id="to">
                <div className="row">
                    <div className="col-md-12">
                        <section className="s-info">
                            <BasicAccountInfo user={userInfo}/>
                        </section>
                    </div>
                </div>
            </div>
            <Preloader/>
        </Fragment>
    );
}