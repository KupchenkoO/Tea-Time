import React from 'react';
import './Info.css'
import Zoom from 'react-reveal/Zoom';

const Info = ({ imageUrl, text, buttonText, onClickButton }) => {
  return (
    <div className="image-text-button-container">
      <div className="text-container">
        <h1>{text}</h1>
        <button className='info-btn' onClick={onClickButton}>{buttonText}</button>
      </div>
      <div className="image-container">
        <Zoom> <img className='img-info' src={imageUrl} alt="Image" /> </Zoom>
      </div>
    </div>
  );
};


export default Info;