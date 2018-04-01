import React from 'react';

export default function Offer(props){
    return(
        <section className="s-offer">
            <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-md-offset-1">
                            <div className="offer">
                                <div className="wrapper">
                                    <i className="fa fa-graduation-cap"></i>
                                    <div className="divide blu"></div>
                                </div>
                                <div className="title">
                                    <h3 className="h3">Your knowledge is our responsibility</h3>
                                    <div className="text">
                                        We offer the latest knowledge that you can apply in practice. 
                                        After completing the course on this or that technology, 
                                        you can easily navigate and understand it, and also get your 
                                        first practical experience! We have a rich experience in training 
                                        both beginners and professional programmers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}