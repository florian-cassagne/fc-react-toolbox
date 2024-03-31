import React from "react";
import {transitionFadeIn} from "../../utils";


function DivDefault({
                      children,
                      className = '',
                      isDefaultPaddingOn= true,
                      transitionOn = false,
                      ...props
                    }) {

  return (
    <div className={`${isDefaultPaddingOn ? 'my-4' : ''}
     ${className}`}
         {...props}
         {...(transitionOn ? transitionFadeIn : {})}>
      {children}
    </div>
  )
}


export default DivDefault;
