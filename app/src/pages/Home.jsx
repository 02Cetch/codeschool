import React,{Fragment} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import PopupNotification from '../components/PopupNotification';

import Preloader from '../components/Preloader';

import headBg from '../images/top-bg.jpg';

export default function Home(props){
    const logo = "logo"
    return(
        <Fragment>
            <Nav onLogin={props.onLogin} img='logo'/>
            <PopupNotification/>
            <Header isHomePage={true} img={headBg} icon={logo} bgColor="000"/>
            <MainContent/>
            <Preloader/>  
        </Fragment>
    );
}