import React, {Component} from 'react';

import MediaLinks from './MediaLinks';
import MouseIcon from './MouseIcon';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isHomePage: this.props.isHomePage
        }
    }
    returnHomeHeaderJSX(){
        const headImage = {
            background: 'url(' + this.props.img + ')  #'+this.props.bgColor+' no-repeat center top/cover'
        }
        return(
            <header style={headImage}>
                <div className="title">
                    <h1 className="h1"><img src={require(`../images/userAvatars/${this.props.icon}.png`)} alt=""/>CodeSchool</h1>
                    <div className="quote">
                        <span>...If I create from the heart, nearly everything works; if from the head, almost nothing.</span>
                    </div>
                </div>
                <MouseIcon/>
                <MediaLinks className="header-social"/>
            </header>
        );
    }
    returnCourseListHeaderJSX(){
        const headColor = {
            background: '#'+this.props.bgColor
        }
        const title = this.props.headerTitle;
        const descr = this.props.headerDescr;
    return(
        <header className={this.props.className} style={headColor}>
        <div className="title">
            {
                this.props.headerIcon
                ?
                <i className={`fa fa-${this.props.headerIcon}`}></i>
                :
                <img src={require(`../images/userAvatars/${this.props.userAvatar}.png`)} alt=""/>
            }
            <h1 className="h1">{title}</h1>
            <p className="p">{descr}</p>
        </div>
    </header>
    );
    }

    render(){
        return this.state.isHomePage ? this.returnHomeHeaderJSX() : this.returnCourseListHeaderJSX()
    }
}