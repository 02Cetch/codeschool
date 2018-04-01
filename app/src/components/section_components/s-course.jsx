import React, {Component, Fragment} from 'react';

import $ from 'jquery';

export default class Course extends Component{
    
    componentDidMount(){
        
        $('.wrapper>h1').click(function() {
            $('article').slideToggle(500)
        }); // end click
    }
    render(){
        const course = this.props.courseData.video;
        return(
            <section className="s-course" id="to">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wrapper">
                            <Fragment>
                                    <h1 style={{background: `#${this.props.courseData.color}`}}>{course.title}</h1>
                                    <article>
                                        <iframe 
                                            width="560" 
                                            height="315" 
                                            src={course.url}
                                            frameBorder="0" 
                                            allow="encrypted-media" 
                                            allowFullScreen>
                                        </iframe>
                                        <p className="descr">{course.descr}</p>
                                    </article>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>
        );
    }
}