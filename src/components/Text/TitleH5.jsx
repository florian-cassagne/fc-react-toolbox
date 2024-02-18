import parse from "html-react-parser";
import React from "react";

function TitleH5({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {

  return (
    <h5 className={`text-md uppercase 
    ${isMarginEnabled ? 'my-2 sm:my-4' : ''} 
    ${className}`}
        {...props}>
      {parse(children)}
    </h5>
  );
}


export default TitleH5;
