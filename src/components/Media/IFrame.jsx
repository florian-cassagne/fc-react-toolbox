import {transitionFadeIn} from "../../utils";
import React from "react";

function IFrame({
                  src,
                  title = '',
                  className = '',
                  ...props
                }) {
  return (
    <div className={`relative w-full pt-[56.25%] 
    ${className}`}
         {...transitionFadeIn}
         {...props}>
      <iframe src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={'absolute inset-0 w-full h-full'}>
      </iframe>
    </div>
  );
}


export default IFrame;
