import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Link className='my-5' to={"#"}>
          <Carousel className="mb-5" showThumbs={false}>
            <div>
              <img
                src="http://localhost:5000/api/static/0239ed03-bb11-4914-88c5-3a01e2daf922.jpg"
                alt=""
              />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          </Carousel>
        </Link>
    );
};

export default Slider;