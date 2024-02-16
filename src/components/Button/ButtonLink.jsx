import {animationDefault, colorPrimary} from "../../utils/StyleAssets";
import {transitionFadeIn} from "../../utils/PropsAssets";
import React from "react";

function ButtonLink({
                      children,
                      href = '',
                      className = '',
                      isLarger = false,
                      isColored = true,
                      isTransitionEnabled = false,
                      ...props
                    }) {
  return (
    <button className={'rounded-full '
      + (isLarger ? 'my-4 ' : 'my-2 ')
      + (isColored ? colorPrimary : 'bg-neutral-800 ')
      + animationDefault + className}
            {...props}
            {...(isTransitionEnabled ? transitionFadeIn : {})}
    >
      <a className={'block px-4 w-full h-full ' + (isLarger ? 'p-4' : 'p-2')}
         href={href}>
        {children}
      </a>
    </button>
  );
}


export default ButtonLink;
