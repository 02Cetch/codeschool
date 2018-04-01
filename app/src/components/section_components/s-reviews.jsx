import React from 'react';

import reviews from '../../api/reviews';

import OwlCarousel from 'react-owl-carousel';

export default function Reviews(props){
    return(
        <section className="s-review">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="h2">Reviews
                            <div className="divide blu"></div>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <OwlCarousel 
                        className="reviews"
                        navText={['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}
                        items = {1}
                        loop margin={10} nav>
                        {
                            reviews.map( review => 
                                <div key={review.id} className="review">
                                    <h3 className="h3">{review.name}({review.courseName})</h3>
                                    <p className="review_text">{review.text}</p>
                                </div>
                            )
                        }
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
}