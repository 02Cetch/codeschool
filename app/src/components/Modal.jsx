import React, {Fragment, Component} from 'react';

export default class Modal extends Component{ // чтобы использовать Модальное окно, нужно добавить в ссылку href="#openModal"
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = event =>{
        event.preventDefault();
        this.props.onLogin({
            mail: this.mailInput.value,
            password: this.passwordInput.value
        })
    }
    render(){
        return(
            <Fragment>
                <div id="openModal" className="modalbg">
                    <div className="dialog">
                        <a href="#close" title="Close" className="close">X</a>
                        <form onSubmit={this.onSubmit}>   
                            <h3 className="h3">{this.props.title}</h3>
                            <input ref={input => this.mailInput = input} type="text" name="first_name" placeholder="MAIL" required/>          
                            <input  ref={input => this.passwordInput = input} type="password" name="password" placeholder="PASSWORD" required/>                          
                            <button name="send" type="submit" className="submit">Submit</button>        
                        </form>      
                    </div>
                </div>
            </Fragment>
        )
    }
}