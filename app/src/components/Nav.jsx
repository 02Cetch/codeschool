import React, {Component, Fragment} from 'react';

import $ from "jquery";

import MediaLinks from './MediaLinks';

import Modal from './Modal';

import {Link} from 'react-router-dom';

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
            active: false
        };
        this.toggleActive = this.toggleActive.bind(this);
    }
    componentDidMount(){
        $(window).scroll(function() {
           var winPos = $(window).scrollTop();
            var navPos = $('#to').offset().top;
            if (winPos >= navPos) {
              $('.btn_row').addClass('inverse');  
            }  
            else {
              $('.btn_row').removeClass('inverse');
            }
        });
    }
    toggleActive(){
        this.setState({active: !this.state.active});
    }
    render(){
        const postImage = {
            background: 'url(' + require('../images/userAvatars/' + this.props.img +'.png')+ ') no-repeat center top/cover'
        }
        const user =this.props.userData;
        return(
            <nav className={this.state.active ? 'active' : ''}>
                <div onClick={this.toggleActive} className={`btn_mnu${this.state.active ? " active" : ''}`}>
                    <div className="btn_row"></div>
                    <div className="btn_row"></div>
                    <div className="btn_row"></div>
                </div>
                <div className={`profile${this.state.active ? " active" : ''}`}>
                    <div className="profile_img" style={postImage}></div>
                    {
                        user
                        ?
                        <h3 className="h3">{user.name}</h3>
                        :
                        <h3 className="h3">Create your own future</h3>
                    }
                </div>
                <div className={`aside__content${this.state.active ? " active" : ''}`}>
                    <ul className="menu">
                    {
                        user
                        ?
                        <Fragment>
                            <div className="mnu__links">
                                <li><a href="#" className="menu__link"><i className="fa fa-user-o"></i>Profile</a></li>
                                <li><a href="#" className="menu__link"><i className="fa fa-video-camera"></i>Video-Courses</a></li>
                                <li><a href="#" className="menu__link"><i className="fa fa-graduation-cap small"></i>Online-Courses</a></li>
                            </div>
                            <div className="divide"></div>
                            <li><a href="#" className="menu__link"><i className="fa fa-user-times"></i>Log out</a></li>
                        </Fragment>
                        :
                        <Fragment>
                            <div className="mnu__links">
                                <li><a href="#" className="menu__link"><i className="fa fa-home"></i>Home</a></li>
                                <li><a href="#" className="menu__link"><i className="fa fa-address-book-o"></i>About us</a></li>
                                <li><a href="#" className="menu__link"><i className="fa fa-phone"></i>Contact</a></li>
                            </div>
                            <div className="divide"></div>
                            <div className="entry">
                                <li><a href="#openModal" className="menu__link"><i className="fa fa-user-plus"></i>Sign up</a></li>
                                <li><a href="#openModal" className="menu__link"><i className="fa fa-user"></i>Sign in</a></li>
                            </div>
                            <Modal title="Authorization"/>
                        </Fragment>
                    }
                    </ul>
                    <MediaLinks className="nav-social" />
                </div> 
            </nav> 
        );
    }
}