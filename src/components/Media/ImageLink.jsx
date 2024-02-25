import {animationDefault, shadowDefault} from "../../utils";
import React from "react";

function ImageLink({
                     href,
                     src,
                     title = '',
                     alt = '',
                     target = '_blank',
                     className = '',
                     classNameImage = '',
                     zoomDisabled = false,
                     ...props
                   }) {
  return (
    <div className={`w-full flex justify-center
    ${animationDefault} 
    ${className}`}
         {...props}>
      <a href={href}
         className={`relative w-[95%] hover:bg-neutral-500 
         ${shadowDefault} 
         ${animationDefault} 
         ${!zoomDisabled ? 'hover:w-[99%] ' : ''} 
         ${classNameImage}`}
         target={target}>
        <div className={`image-mask absolute inset-0 w-full h-full hover:bg-black/70 opacity-0 hover:opacity-100 text-center ${animationDefault}`}>
          <p className={'absolute top-1/2 w-full uppercase'}>Cliquez pour y accéder !</p>
        </div>
        <img src={src}
             title={title}
             alt={alt}/>
      </a>
    </div>

  )
}


export default ImageLink;
