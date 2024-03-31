import {animationDefault} from "../../utils";
import React from "react";

function Image({
                 src,
                 title = '',
                 alt = '',
                 target,
                 className = '',
                 classNameImage = '',
                 isFancyMode = true,
                 fullSize = false,
                 ...props
               }) {

  return (
    <div className={`flex justify-center py-1
    ${animationDefault} 
    ${className} 
    ${fullSize ? 'w-full' : ''}
    `}
         {...props}>
      <img src={src}
           className={`${animationDefault}
           ${isFancyMode ? 'w-[95%] hover:w-[99%] shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ' : ''}
           `}
           title={title}
           alt={alt}/>
    </div>
  )
}


export default Image;
