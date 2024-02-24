import {animationDefault} from "../../utils/StyleAssets";
import React from "react";

function Image({
                 src,
                 title = '',
                 alt = '',
                 target,
                 className = '',
                 classNameImage = '',
                 isEnhancedMode = true,
                 fullSize = false,
                 ...props
               }) {
  classNameImage += (isEnhancedMode) ? 'w-[95%] hover:w-[99%] shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ' : ''

  return (
    <div className={`flex justify-center 
    ${animationDefault} 
    ${className} 
    ${fullSize ? 'w-full' : ''}`}
         {...props}>
      <img src={src}
           className={`${animationDefault} ${classNameImage}`}
           title={title}
           alt={alt}/>
    </div>
  )
}


export default Image;
