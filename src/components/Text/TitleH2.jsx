import {transitionFadeIn} from "../../utils";
import parse from "html-react-parser";
import React from "react";

function TitleH2({
                   children,
                   className = '',
                   transitionEnabled = true,
                   ...props
                 }) {

  return (
    <h2 className={'text-xl xs:text-2xl md:text-3xl lg:text-3xl my-6 sm:my-10 lg:my-12 text-center uppercase ' + className}
        {...props}
        {...(transitionEnabled ? transitionFadeIn : {})}>
      {parse(children)}
    </h2>
  );
}


export default TitleH2;
