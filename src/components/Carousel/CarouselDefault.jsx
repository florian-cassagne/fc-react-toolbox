import React from "react";
import Image from "../Image/Image";
import './carousel-custom.css'
import 'react-multi-carousel/lib/styles.css';
import CarouselBase, {updateCarouselItemsOpacity} from "./CarouselBase";
import {animationDefault} from "../../utils/StyleAssets";


function CarouselDefault({
                           images,
                           srcBase,
                           ...props
                         }) {

  return (
    <CarouselBase {...props}>
      {images.map((image, index) => (
          <div className={animationDefault + ' m-1'}
               onLoad={updateCarouselItemsOpacity}
               key={index}
          >
            <Image src={srcBase + '/' + image.link}
                   alt={image.alt || image.title || ''}
                   title={image.title || image.alt || ''}/>
            <p className={'mt-2 text-center'}>
              {image.title || ''}
            </p>
          </div>
        )
      )}
    </CarouselBase>
  );
}


export default CarouselDefault;
