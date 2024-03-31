import React from "react";


function Separator({
                     size = 2,
                     className = '',
                     isVisible = true,
                     ...props
                   }) {

  return (
    <div className={`separator w-full my-${size} py-${size} ${(isVisible) ? 'bg-orange-950' : ''} 
    ${className}`}
         {...props} />
  )

}


export default Separator;
