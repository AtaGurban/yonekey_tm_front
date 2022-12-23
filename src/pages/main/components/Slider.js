import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = ({ slider }) => {
  const witdth = window.innerWidth
  let centerSlidePercentage 
  if (witdth > 1400){
    centerSlidePercentage = 100
  } else if (witdth < 1400 && witdth > 1000){
    centerSlidePercentage = 120
  } else if (witdth < 1000 && witdth > 500){
    centerSlidePercentage = 140
  } else if (witdth < 500){
    centerSlidePercentage = 155
  }
  return (
        <Carousel className="my-4" axis="horizontal" autoPlay showStatus={false} centerMode centerSlidePercentage={centerSlidePercentage} swipeScrollTolerance={5} emulateTouch showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true}>
          {slider?.img.map((i) => (
            <div key={i.id}>
              <img
                src={`${process.env.REACT_APP_API_URL}api/static/${i.img}`}
                alt=""
              />
              {/* <p className="legend">{slider.text}</p> */}
            </div>
          ))}
        </Carousel>
  );
};

export default Slider;
