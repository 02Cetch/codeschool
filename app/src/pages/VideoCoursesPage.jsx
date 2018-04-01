import React, {Fragment} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import videoCoursesDB from '../api/videoCoursesDB';

import userInfo from '../api/user';

export default function VideoCoursesPage(props){
    return(
        <Fragment>
            <Nav 
                img={userInfo.icon}
                userData={userInfo}/>
            <Header 
                headerIcon="tv"
                className="courses"
                headerTitle="Video Courses" 
                headerDescr="If you need to quickly get acquainted or learn the basics of language or technology for reasonable prices? Then video courses are your choice!" 
                isHomePage={false} 
                bgColor="242424"/>
                <section className="s-vcourses" id="to">
                    <div className="container">
                        {
                            videoCoursesDB.map( course=>
                                <div className="col-md-6 col-sm-12" key={course.id}>
                                    <Course 
                                        courseColor={course.color} 
                                        courseLogo={course.logo} 
                                        courseDecr={course.descr}
                                        courseTitle={course.title}
                                        courseDuration={course.duration}/>
                                </div>
                            )
                        }
                    </div>
                </section>
                <Preloader/>
    </Fragment>
    );
}