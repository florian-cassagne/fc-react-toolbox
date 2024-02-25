import React from "react";


function InputText({
                     children,
                     type,
                     id,
                     name,
                     className = '',
                     ...props
                   }) {
  return (
    <input type={type}
           id={id}
           name={name || id}
           className={`w-full md:!w-1/2 bg-neutral-900 p-2 rounded-full + ${className}`}
           {...props} />
  )
}


export default InputText;
