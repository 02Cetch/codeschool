import React, {Fragment, Component} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import SectionCourse from '../components/section_components/s-course';

import userInfo from '../api/user';

import videoCourses from '../api/videoCoursesDB';

export default class VideoCourse extends Component{

    render(){
        var {id} = this.props.match.params; // parameters from searchbar(React router match params)
        var item = videoCourses[id-1] // item from database
        return(
            <Fragment>
                <Nav 
                    onLogout={this.props.onLogout}
                    img={userInfo.icon}
                    userData={userInfo}/>
                <Header 
                    headerIcon="tv"
                    className="courses"
                    headerTitle={item.title+" Course"}
                    headerDescr={item.descr}
                    isHomePage={false} 
                    bgColor={item.color}/>
                <SectionCourse
                    courseData={item}/>
                <Preloader/>
            </Fragment>
        )
    }     
}