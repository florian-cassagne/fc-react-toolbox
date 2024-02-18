import React from "react";


function Separator({
                     size = 4,
                     className = '',
                     isVisible = true,
                     ...props
                   }) {

  return (
    <div className={`separator w-full my-${size}
    ${(isVisible) ? '' : 'opacity-0'}
    ${className}`}
         {...props} />
  )

}


export default Separator;
