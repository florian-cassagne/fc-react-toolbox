import parse from "html-react-parser";
import React from "react";

function TitleH4({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {

  return (
    <h4 className={`text-md xs:text-lg md:text-xl uppercase 
    ${isMarginEnabled ? 'my-2 sm:my-4' : ''} 
    ${className}`}
        {...props}>
      {parse(children)}
    </h4>
  );
}


export default TitleH4;
