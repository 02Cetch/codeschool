import React from 'react';

import theses from '../../api/theses';

export default function We(props){
    return(
        <section className="s-we">
            <div className="title">
                <h3 className="h3">Why we?<div className="divide red"></div></h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="why">
                            {
                                theses.map(thesis =>
                                    <div key={thesis.id} className="why__item">
                                        <h3 className="h3"><i className={`fa fa-${thesis.icon}`}></i>{thesis.title}</h3>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
}