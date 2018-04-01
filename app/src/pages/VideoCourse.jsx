import React, {Fragment} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import SectionCourse from '../components/section_components/s-course';

import userInfo from '../api/user';

import videoCourses from '../api/videoCoursesDB';

export default function VideoCourse(props){
    return(
        <Fragment>
            <Nav 
                img={userInfo.icon}
                userData={userInfo}/>
            <Header 
                headerIcon="tv"
                className="courses"
                headerTitle={videoCourses[0].title+" Course"}
                headerDescr={videoCourses[0].descr}
                isHomePage={false} 
                bgColor={videoCourses[0].color}/>
            <SectionCourse
                courseData={videoCourses[0]}/>
            <Footer/>
            <Preloader/>
        </Fragment>
    )
}