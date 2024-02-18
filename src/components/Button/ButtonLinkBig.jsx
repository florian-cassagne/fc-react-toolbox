import ButtonLink from "./ButtonLink";
import React from "react";

function ButtonLinkBig({
                         children,
                         className = '',
                         ...props
                       }) {
  return (
    <ButtonLink className={`w-full md:w-1/2 md:mr-[25%] md:ml-[25%]
    ${className}`} {...props}>
      {children}
    </ButtonLink>
  );
}


export default ButtonLinkBig;
