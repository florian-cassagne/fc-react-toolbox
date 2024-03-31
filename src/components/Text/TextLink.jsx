import React from "react";
import {animationDefault, colorTextImportantClass, colorTextImportantClassHover} from "../../utils";


function TextLink({
                    children,
                    href,
                    className = '',
                    ...props
                  }) {
  return (
    <a href={href}
       className={className}
       {...props}>
      <p className={`hover:scale-105 inline-block 
      ${colorTextImportantClass} 
      ${colorTextImportantClassHover} 
      ${animationDefault}`}>
        {children}
      </p>
    </a>
  )
}


export default TextLink;
