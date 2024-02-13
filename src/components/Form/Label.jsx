import React from "react";


function Label({
                 children,
                 forInput,
                 className = '',
                 ...props
               }) {
  return (
    <label for={forInput}
           className={'mr-2 ' + className}
           {...props}>
      {children}
    </label>
  )
}


export default Label;
