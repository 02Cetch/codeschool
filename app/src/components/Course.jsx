import React from 'react';

export default function course(props){
    const courseLogoColor = {
        background: ' #'+props.courseColor
    }
    return(
        <div className="course">
            <div className="course__item">
                <div className="course__logo" style={courseLogoColor}>
                    <img className="img" src={require(`../images/icons/${props.courseLogo}.svg`)} alt={props.courseTitle}/>
                </div>
                <div className="course__title">
                    <h3 className="h3">{props.courseTitle+ " Course"}</h3>
                    <p className="p">{props.courseDecr}</p>
                    <div className="info">
                        {
                            props.courseStarts
                            ?
                            <p><i className="fa fa-calendar"></i><time>{`Starts: ${props.courseStarts}`}</time> </p>
                            :
                            ''
                        }
                        <p><i className="fa fa-clock-o"></i><time>{`Duration:${props.courseDuration}`}</time></p>
                    </div>
                    <div className="wrapper">
                        <button className="button">Learn more</button>
                    </div>
                </div>                            
            </div>
        </div>
    );
}