import React, {Fragment} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import SectionLearning from '../components/section_components/s-learning';

import userInfo from '../api/user'

import OnlineCourses from '../api/onlineCoursesDB';

export default function OnlineCourse(props){
    return(
        <Fragment>
            <Nav 
                img={userInfo.icon}
                userData={userInfo}/>
            <Header 
                headerIcon="graduation-cap"
                className="courses"
                headerTitle={OnlineCourses[0].title+" Course"}
                headerDescr={OnlineCourses[0].descr}
                isHomePage={false} 
                bgColor={OnlineCourses[0].color}/>
            <SectionLearning
                twitchOperatorName={OnlineCourses[0].twitchOperatorName}
                bgColor={OnlineCourses[0].color}/>
            <Footer/>
            <Preloader/>
        </Fragment>
    )
}