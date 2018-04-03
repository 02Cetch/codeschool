import React, {Component} from 'react';
import PropTypes from 'prop-types'; // importing proptypes

import $ from 'jquery';

export default class PopupNotification extends Component{
    componentDidMount(){
            setTimeout(function(){ // adds class 'active' to popup window before 1 sec.
                $(".popup").addClass('active');
            }, 1000)
            setTimeout(function () { // removes class 'active' to popup window before 5 sec.
                $(".popup").removeClass('active');
            }, 5000);
            setTimeout(function () { // hides popup window before 5,5 sec. (need to fix the bug)
                $(".popup").hide();
            }, 5500);
    }
    render(){
        return(
            <div className="popup">
                <i className="fa fa-exclamation-circle "></i>
                <span className="popup_title">{this.props.title}</span>
            </div>
        )
    }
}
PopupNotification.propTypes = {
    title: PropTypes.string
};