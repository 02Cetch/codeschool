import React from 'react';

import coursesImg from '../../images/content.png'

export default function Courses(props){
    return(
        <section className="s-courses">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="content__img" src={coursesImg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <ul className="courses">
                            <li><i className="fa fa-video-camera" style={{color: '#2a2a2a'}}></i>Video courses</li>
                            <li><i className="fa fa-youtube" style={{color: '#d50019'}}></i>Youtube cources</li>
                            <li><i className="fa fa-twitch" style={{color: '#956fa0'}}></i>Online courses</li>
                            <li><i className="fa fa-comments" style={{color: '#b31953'}}></i>Slack community</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}