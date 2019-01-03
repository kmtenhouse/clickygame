import React from "react";
import "./ClickyImage.css";

function ClickyImage(props) {
    let className = 'game-image';
    if(props.friend.bgColor) {
        className+=" " +props.friend.bgColor+"-bg";
    }
    return (
        <div className="mx-2 my-2 game-item" id={props.friend.id} onClick={()=>{props.guess(props.friend.id)}}>
            <img className={className} src={props.friend.image} alt={props.friend.name} />
        </div>
    );
}

export default ClickyImage;
