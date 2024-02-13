import React from "react";
import {transitionFadeIn} from "../../utils/PropsAssets";


function DivDefault({
                      children,
                      className = '',
                      transitionEnabled = false,
                      ...props
                    }) {
  return (
    <div className={'py-4 ' + className}
         {...props}
         {...(transitionEnabled ? transitionFadeIn : {})}>
      {children}
    </div>
  )
}


export default DivDefault;
