import React from "react";
import {animationDefault, colorPrimary, colorSecondaryNoHover} from "../../utils/StyleAssets";

function Section({
                   children,
                   className = '',
                   isLarger = false,
                    isColored = true,
                   ...props
                 }) {

  return (
    <div className={
      `rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center 
      ${animationDefault} 
      ${isLarger ? 'w-1/2 mx-auto' : 'mx-1 lg:mx-2'} 
      ${isColored ? colorSecondaryNoHover : ''} 
      ${className}
      `}
         {...props}>
      {children}
    </div>
  );
}

export default Section;
