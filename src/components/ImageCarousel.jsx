import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay
    
    >
      {images.map((img, idx) => (
        <div className=" md:h-[60vh] h-[50vh] flex items-center justify-center" key={idx}>
          <img className=" h-full object-contain" src={img} alt={`Product ${idx + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
