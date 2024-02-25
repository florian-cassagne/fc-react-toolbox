import React from "react";
import {animationDefault} from "../../utils";


function TextLink({
                    children,
                    href,
                    className = '',
                    ...props
                  }) {
  return (
    <a href={href}
       className={className}
       {...props}>
      <p className={'hover:scale-105 inline-block text-orange-200 hover:text-orange-400 ' + animationDefault}>
        {children}
      </p>
    </a>
  )
}


export default TextLink;
