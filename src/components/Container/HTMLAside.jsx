import React from "react";
import {transitionFadeIn} from "../../utils";


function HTMLAside({
                      children,
                      className = '',
                      transitionEnabled = false,
                      ...props
                    }) {

  return (
    <aside className={'py-4 ' + className}
         {...props}
         {...(transitionEnabled ? transitionFadeIn : {})}>
      {children}
    </aside>
  )
}


export default HTMLAside;
