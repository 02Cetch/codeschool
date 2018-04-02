import React,{Fragment, Component} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import PopupNotification from '../components/PopupNotification';

import Preloader from '../components/Preloader';

import headBg from '../images/top-bg.jpg';

export default class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const logo = "logo"
        return(
            <Fragment>
                <Nav onLogin={this.props.onLogin} img='logo'/>
                {
                    this.props.redirected
                    ?
                    <PopupNotification title="You must be logged in!"/>
                    :
                    ''
                }
                <Header isHomePage={true} img={headBg} icon={logo} bgColor="000"/>
                <MainContent/>
                <Preloader/>  
            </Fragment>
        );
    }
}