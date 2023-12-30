import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';

const Slider = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % items.length;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + items.length) % items.length;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
              <div className='gift-img'>
                <Zoom top><img src={item.image} alt={item.title} /></Zoom>
                <div className="dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
            </div>
            <div className='gift-txt'>
            <Zoom><h3 className='gift-name'>{item.title}</h3></Zoom>
            <p className='gift-ds'>{item.description}</p>
          <div className="controls">
        <button className='btn-left' onClick={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" height="30" fill='#fff' viewBox="0 -960 960 960" width="30"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
        <button className='btn-right' onClick={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" height="30" fill='#fff' viewBox="0 -960 960 960" width="30"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;