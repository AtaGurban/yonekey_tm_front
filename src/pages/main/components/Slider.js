import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = ({ my, slider }) => {
  const witdth = window.innerWidth
  let thisMobile = false
  // let centerSlidePercentage 
  // if (witdth > 1400){
  //   centerSlidePercentage = 100
  // } else if (witdth < 1400 && witdth > 1000){
  //   centerSlidePercentage = 120
  // } else if (witdth < 1000 && witdth > 500){
  //   centerSlidePercentage = 140
  // } else if (witdth < 500){
  //   centerSlidePercentage = 155
  // }
  if (witdth < 500){
    thisMobile = true
  }

  return (
        <Carousel className={`my-${my !== undefined ? my : '2'}`} axis="horizontal" centerSlidePercentage={100} autoPlay showStatus={false} centerMode swipeScrollTolerance={5} emulateTouch showThumbs={false} swipeable={true} showIndicators={false} infiniteLoop={true}>
          {slider?.img.map((i) => (
            <div className="px-md-5" key={i?.id}>
              <img
                style={{minHeight: '150px'}}
                src={`${process.env.REACT_APP_API_URL}api/static/${(thisMobile ? i?.mobileImg : i?.webImg)}`}
                alt=""
              />
              {/* <p className="legend">{slider.text}</p> */}
            </div>
          ))}
        </Carousel>
  );
};

export default Slider;
