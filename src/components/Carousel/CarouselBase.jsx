import React from "react";
import Carousel from 'react-multi-carousel';

import './carousel-custom.css'
import 'react-multi-carousel/lib/styles.css';

export function updateCarouselItemsOpacity() {
  let itemsAll = document.querySelectorAll('.react-multi-carousel-item');
  let itemsNotActive = document.querySelectorAll('.react-multi-carousel-item:not(.react-multi-carousel-item--active)');
  const opacityVisible = 1
  const opacityHidden = 0.2

  for (let i = 0; i < itemsAll.length; i++) {
    itemsAll[i].style.opacity = opacityVisible
  }
  for (let i = 0; i < itemsNotActive.length; i++) {
    itemsNotActive[i].style.opacity = opacityHidden
  }
}

export const responsive = {
  lg: {
    breakpoint: {
      max: 99999,
      min: global.config.responsive.breakpoint.lg
    },
    items: 2
  },
  sm: {
    breakpoint: {
      max: global.config.responsive.breakpoint.lg,
      min: 0
    },
    items: 1
  }
};

function CarouselBase({children, ...props}) {

  window.addEventListener('resize', updateCarouselItemsOpacity);

  return (
    <Carousel responsive={responsive}
              partialVisible
              containerClass="carousel"
              itemClass="carousel__item"
              keyBoardControl
              pauseOnHover
              afterChange={
                function (previousSlide, _ref) {
                  updateCarouselItemsOpacity()
                }}
              {...props}
    >
      {children}
    </Carousel>
  );
}


export default CarouselBase;
