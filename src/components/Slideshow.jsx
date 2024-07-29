import React, { useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = (props) => {
  const images = props.images;
  useEffect(() => {}, [images]);

  const h = window.screen.width > 700 ? "70svh" : "50svh";
  return (
    <>
      {images && (
        <div className="slide-container">
          <Slide
            slidesToScroll={window.screen.width > 700 ? 2 : 1}
            slidesToShow={window.screen.width > 700 ? 2 : 1}
            indicators={true}
            transitionDuration={500}
          >
            {images.map((fadeImage, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%", height: `${h}` }}
                  src={fadeImage.url}
                />
              </div>
            ))}
          </Slide>
        </div>
      )}
    </>
  );
};

export default Slideshow;
