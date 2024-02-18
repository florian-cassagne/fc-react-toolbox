import parse from "html-react-parser";
import React from "react";

function TitleH6({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {

  return (
    <h6 className={`text-md 
    ${isMarginEnabled ? 'my-2 sm:my-4 ' : ''} 
    ${className}`}
        {...props}>
      {parse(children)}
    </h6>
  );
}


export default TitleH6;
