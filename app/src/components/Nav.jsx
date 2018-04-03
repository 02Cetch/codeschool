import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'; // importing proptypes

import $ from "jquery";

import MediaLinks from './MediaLinks';

import Modal from './Modal';

import Button from './Button';

export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={
            active: false,
        };
        this.toggleActive = this.toggleActive.bind(this);
    }
    componentDidMount(){
        $(window).scroll(function() { // changing color of btn_rows while user scroll
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
                        <Fragment>
                            <div className="mnu__links">
                                <li><Button to="/profile" className="menu__link"><i className="fa fa-user-o"></i>Profile</Button></li>
                                <li><Button to="/videocourses" className="menu__link"><i className="fa fa-video-camera"></i>Video-Courses</Button></li>
                                <li><Button to="/onlinecourses" className="menu__link"><i className="fa fa-graduation-cap small"></i>Online-Courses</Button></li>
                            </div>
                            <div className="divide"></div>
                            {
                                user
                                ?
                                <li><Button onLogout={this.props.onLogout} to="/" className="menu__link"><i className="fa fa-user-times"></i>Log out</Button></li>
                                :
                                <Fragment>
                                    <div className="entry">
                                        <li><a href="#openModal" className="menu__link"><i className="fa fa-user-plus"></i>Sign up</a></li>
                                        <li><a href="#openModal" className="menu__link"><i className="fa fa-user"></i>Sign in</a></li>
                                    </div>
                                    <Modal onLogin={this.props.onLogin} title="Authorization"/>
                                </Fragment>
                            }
                        </Fragment>
                    </ul>
                    <MediaLinks className="nav-social" />
                </div> 
            </nav> 
        );
    }
}
Nav.propTypes = {
	onLogin:  PropTypes.func,
    img: PropTypes.string
};