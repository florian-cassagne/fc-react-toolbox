import React from "react";
import {transitionFadeIn} from "../../utils";


function Paragraph({
                     children,
                     className = '',
                     ...props
                   }) {
  return (
    <p className={'py-2 lg:!py-4 ' + className}
       {...transitionFadeIn}
       {...props}>
      {children}
    </p>
  )
}


export default Paragraph;
