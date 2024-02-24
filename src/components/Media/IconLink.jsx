import {animationDefault} from "../../utils/StyleAssets";
import React from "react";

function IconLink({
                    image,
                    link,
                    title = '',
                    alt = '',
                    target = '',
                    imgClassName = '',
                    className = '',
                    ...props
                  }) {
  return (
    <a className={`block w-12 mx-4 hover:scale-110 hover-darken 
      ${animationDefault} 
      ${className}
      `}
       href={link}
       target={target}
       {...props}>

      <img src={image}
           className={`w-full ${imgClassName}`}
           title={title}
           alt={alt}/>
    </a>

  )
}


export default IconLink;
