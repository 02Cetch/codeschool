import React from 'react';

import SectionAbout from './section_components/s-about';
import SectionOffer from './section_components/s-offer';
import SectionWe from './section_components/s-we';
import SectionCourses from './section_components/s-courses';
import SectionReviews from './section_components/s-reviews';

export default function MainContent(props){
    return(
        <main>
            <SectionAbout/>
            <SectionOffer/>
            <SectionWe/>
            <SectionCourses/>
            <SectionReviews/>
        </main>
    );
}