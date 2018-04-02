import React, {Component} from 'react';

import $ from 'jquery';

export default class PopupNotification extends Component{
    componentDidMount(){
            setTimeout(function(){
                $(".popup").addClass('active');
            }, 1000)
            setTimeout(function () {
                $(".popup").removeClass('active');
            }, 5000);
            setTimeout(function () {
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