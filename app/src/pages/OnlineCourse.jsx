import React, {Fragment, Component} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import SectionLearning from '../components/section_components/s-learning';

import userInfo from '../api/user'

import OnlineCourses from '../api/onlineCoursesDB';

export default class OnlineCourse extends Component{

    render(){
        var {id} = this.props.match.params;
        var item = OnlineCourses[id-1]
        console.log(this.props.onLogout)
        return(
            <Fragment>
                <Nav 
                    onLogout={this.props.onLogout}
                    img={userInfo.icon}
                    userData={userInfo}/>
                <Header 
                    headerIcon="graduation-cap"
                    className="courses"
                    headerTitle={item.title+" Course"}
                    headerDescr={item.descr}
                    isHomePage={false} 
                    bgColor={item.color}/>
                <SectionLearning
                    twitchOperatorName={item.twitchOperatorName}
                    bgColor={item.color}/>
                <Preloader/>
            </Fragment>
        )
    }
}