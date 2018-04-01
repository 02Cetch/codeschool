import React, {Fragment} from 'react';

export default function Modal(props){ // чтобы использовать Модальное окно, нужно добавить в ссылку href="#openModal"
    return(
    <Fragment>
        <div id="openModal" className="modalbg">
            <div className="dialog">
                <a href="#close" title="Close" className="close">X</a>
                <form name="htmlform" method="post" action="">   
                    <h3 className="h3">{props.title}</h3>
                    <input type="text" name="first_name" placeholder="MAIL" required/>          
                    <input  type="password" name="password" placeholder="PASSWORD" required/>                          
                    <button name="send" type="submit" className="submit">Submit</button>        
                </form>      
            </div>
        </div>
    </Fragment>
    );
}