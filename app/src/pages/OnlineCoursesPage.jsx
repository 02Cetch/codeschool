import React, {Fragment} from 'react';

import Nav from '../components/Nav'
import Header from '../components/Header';
import Course from '../components/Course';
import Preloader from '../components/Preloader';

import OnlineCoursesDB from '../api/onlineCoursesDB';

import userInfo from '../api/user';

export default function OnlineCoursesPage(props){
    return(
        <Fragment>
            <Nav 
                img={userInfo.icon}
                userData={userInfo}/>
            <Header 
                headerIcon="graduation-cap"
                className="courses"
                headerTitle="Online Courses" 
                headerDescr="Do you need to learn a topic and in a short time get a practical skill in the right web technology? Do you want to take a course under the strict supervision of a mentor? Then online courses from Codeschool for you!" 
                isHomePage={false} 
                bgColor="56626d"/>
                <section className="s-ocourses" id="to">
                    <div className="col-md-8 col-md-offset-2">
                        {
                            OnlineCoursesDB.map( course=>
                                <Course 
                                    key={course.id}
                                    courseColor={course.color} 
                                    courseLogo={course.logo} 
                                    courseDecr={course.descr}
                                    courseTitle={course.title}
                                    courseStarts={course.starts}
                                    courseDuration={course.duration}/>
                            )
                        }
                    </div>
                </section>
                <Preloader/>
        </Fragment>
    );
}