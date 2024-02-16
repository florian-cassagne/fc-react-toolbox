import React from "react";
import {animationDefault} from "../../utils/StyleAssets";

function Section({
                   children,
                   href,
                   className = '',
                   isLargeMode = false,
                   ...props
                 }) {
  if (isLargeMode)
    className += 'w-1/2 mx-auto '
  else
    className += 'mx-1 lg:mx-2 '

  return (
    <div className={'rounded-full p-1 lg:p-2 px-4 mb-2 lg:mb-4 text-center '
      + className
      + animationDefault}
         {...props}>
      {children}
    </div>
  );
}

export default Section;
