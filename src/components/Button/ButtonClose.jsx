import {animationDefault, colorImportant} from "../../utils/StyleAssets";
import React from "react";

function ButtonClose({className = '', ...props}) {
  return (
    <button className={'viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg '
      + colorImportant
      + animationDefault
      + className}
            onClick={props.onClick}
            {...props}>
      X
    </button>
  )
}


export default ButtonClose;
