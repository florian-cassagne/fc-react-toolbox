import parse from "html-react-parser";
import React from "react";

function TitleH3({
                   children,
                   className = '',
                   isSmallerMode = false,
                   ...props
                 }) {
  if(isSmallerMode)
    className += 'text-lg xs:text-xl lg:text-xl'
  else
    className += 'text-xl xs:text-2xl lg:text-2xl'

  return (
    <h3 className={'my-2 sm:my-4 lg:my-4 text-center uppercase ' + className}
        {...props}>
      {parse(children)}
    </h3>
  );
}


export default TitleH3;
