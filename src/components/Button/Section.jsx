import React from "react";
import {animationDefault, colorSecondaryClass} from "../../utils";

function Section({
                   children,
                   className = '',
                   isLarger = false,
                   ...props
                 }) {

  return (
    <div className={
      `rounded-full p-2 px-4 mb-2 lg:!mb-4 text-center 
      ${animationDefault} 
      ${colorSecondaryClass}
      ${isLarger ? 'w-1/2 mx-auto' : 'mx-1 lg:!mx-2'} 
      ${className}
      `}
         {...props}>
      {children}
    </div>
  );
}

export default Section;
