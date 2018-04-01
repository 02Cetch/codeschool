import React from 'react';

import MediaLinks from './MediaLinks';

import logo from '../images/userAvatars/logo.png';

export default function Footer(props){
    return(
        <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="footer__container">
                                <div className="footer__title">
                                    <img className="logo" src={logo} alt="CodeSchool" className="logo-footer"/>
                                    <h1 className="h1">© Codeschool</h1>
                                    <p className="p">create your own future</p>
                                </div>
                                <MediaLinks className="footer-social" /> 
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
}