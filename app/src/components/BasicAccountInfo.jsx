import React from 'react';

export default function BasicAccountInfo(props){
    const user = props.user; // that's all user  info
    return(
        <div className="basic__info">
            <h3 className="h3">Basic information</h3>
            <div className="info__item">
                <i className="fa fa-user"></i>
                <span className="user">{user.name}</span>
            </div>
            <div className="info__item">
                <i className="fa fa-envelope"></i>
                <span className="mail">{user.mail}</span>
            </div>
            <h3 className="h3">Completed Courses</h3>
            {
                user.completedCourses.map(course=>
                <div className="info__item" key={course.id}>
                    <img className="course__img" src={require(`../images/icons/${course.icon}.svg`)} alt=""/>
                    <span className="course">{course.title}</span>
                </div>
            )
            }
        </div>
    )
}