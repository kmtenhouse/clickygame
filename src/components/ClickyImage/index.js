import React from "react";
import "./ClickyImage.css";

function ClickyImage(props) {
    let className = 'mx-2 my-2 game-item';
    if(props.friend.bgColor) {
        className+=" " +props.friend.bgColor+"-bg";
    }

    //make sure that we dynamically load the images from the public folder
    const imgPath = process.env.PUBLIC_URL + props.friend.image;

    return (
        <div className={className} id={props.friend.id} onClick={()=>{props.guess(props.friend.id)}}>
            <img className='game-image' src={imgPath} alt={props.friend.name} />
        </div>
    );
}

export default ClickyImage;
