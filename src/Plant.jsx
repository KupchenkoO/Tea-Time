import React from "react";
import './Plant.css'

const Plant = ({ imageUrl, title, text, buttonText, onClickButton }) => {
    return (
      <div className="image-text-button-cont">
        <div className="text-cont">
      
          <h1>{title}</h1>
          <p>{text}</p>
    
          <button className='info-btn1' onClick={onClickButton}>{buttonText}</button>
        </div>
        <div className="image-cont">
       
          <img className='img-info1' src={imageUrl} alt="Image" />
          
        </div>
      </div>
    );
  };

export default Plant;