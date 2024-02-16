import parse from "html-react-parser";
import React from "react";

function TitleH6({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {
  const classNameMargin = (isMarginEnabled) ? 'my-2 sm:my-4 ' : ''
  return (
    <h6 className={'text-md ' + classNameMargin + className}
        {...props}>
      {parse(children)}
    </h6>
  );
}


export default TitleH6;
