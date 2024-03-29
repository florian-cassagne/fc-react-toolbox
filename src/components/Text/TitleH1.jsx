import {transitionFadeIn} from "../../utils";
import parse from "html-react-parser";
import React from "react";

function TitleH1({
                   children,
                   className = '',
                   transitionEnabled = true,
                   ...props
                 }) {
  return (
    <h1 className={'text-2xl xs:text-3xl md:text-4xl lg:text-4xl uppercase my-8 sm:my-12 lg:my-16 text-center ' + className}
        {...(transitionEnabled ? transitionFadeIn : {})}
        {...props}>
      {parse(children)}
    </h1>
  );
}


export default TitleH1;
