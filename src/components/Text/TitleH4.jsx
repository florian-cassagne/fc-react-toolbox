import parse from "html-react-parser";
import React from "react";

function TitleH4({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {

  const classNameMargin = (isMarginEnabled) ? 'my-2 sm:my-4 ' : ''

  return (
    <h4 className={'text-md xs:text-lg md:text-xl uppercase '
      + classNameMargin
      + className}
        {...props}>
      {parse(children)}
    </h4>
  );
}


export default TitleH4;
