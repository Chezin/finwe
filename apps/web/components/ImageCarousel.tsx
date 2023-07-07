import React from "react";

function ImageCarousel() {
  return (
    <div className="h-600px w-screen bg-yellow-300 flex items-center justify-center">
      <div className="w-full h-400px relative">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/500x500?text=Image+1"
            alt="Carousel Image 1"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/500x500?text=Image+2"
            alt="Carousel Image 2"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/500x500?text=Image+3"
            alt="Carousel Image 3"
            className="h-full object-cover"
          />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <img
            src="https://via.placeholder.com/500x500?text=Image+4"
            alt="Carousel Image 4"
            className="h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
