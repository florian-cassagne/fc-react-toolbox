import React from "react";
import {animationDefault} from "../../utils/StyleAssets";


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
      <p className={'hover:scale-105 w-full h-full inline-block text-orange-200 hover:text-orange-400 ' + animationDefault}>
        {children}
      </p>
    </a>
  )
}


export default TextLink;
