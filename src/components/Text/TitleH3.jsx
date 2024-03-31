import parse from "html-react-parser";
import React from "react";

function TitleH3({
                   children,
                   className = '',
                   isSmallerMode = false,
                   ...props
                 }) {
//TODO : Implement smallerMode option for all title sizes.
  return (
    <h3 className={`my-2 sm:my-4 lg:my-4 text-center uppercase 
    ${isSmallerMode ? 'text-lg xs:text-xl lg:text-xl' : 'text-xl xs:text-2xl lg:text-2xl'} 
    ${className}`}
        {...props}>
      {parse(children)}
    </h3>
  );
}


export default TitleH3;
