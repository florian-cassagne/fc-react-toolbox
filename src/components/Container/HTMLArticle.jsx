import React from "react";
import {transitionFadeIn} from "../../utils";


function HTMLArticle({
                      children,
                      className = '',
                      transitionEnabled = false,
                      ...props
                    }) {

  return (
    <article className={'py-4 ' + className}
         {...props}
         {...(transitionEnabled ? transitionFadeIn : {})}>
      {children}
    </article>
  )
}


export default HTMLArticle;
