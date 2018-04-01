import React from 'react';


export default function MediaLinks(props){
    return(
        <div className={props.className}>
            <div className="soc">
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/lorem__ipsum__dolor_sit__amet"><i className="fa fa-vk"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/?lang=en"><i className="fa fa-twitter"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://ru-ru.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                </ul>
            </div>
        </div>
    );
}