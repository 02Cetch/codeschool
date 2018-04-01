import React, {Component} from 'react';

import $ from 'jquery';

export default class PopupNotification extends Component{
    componentDidMount(){
            var notifyElement = $(".popup").addClass('active');
            $('.popup').prepend(notifyElement);
            setTimeout(function (ele) {
                $(".popup").removeClass('active');
            }, 3000, notifyElement);
    }
    render(){
    return(
        <div className="popup">
            <i className="fa fa-exclamation-circle "></i>
            <span className="popup_title">You must be logged in!</span>
        </div>
    )
}
}