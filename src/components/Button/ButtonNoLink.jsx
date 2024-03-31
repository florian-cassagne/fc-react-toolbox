import Section from "./Section";
import React from "react";
import {colorPrimaryClass, colorPrimaryClassHover, colorSecondaryClass} from "../../utils";

function ButtonNoLink({
                        children,
                        className = '',
                        isColored = false,
                        ...props
                      }) {
  return (
    <Section className={`cursor-pointer 
    ${className}
    ${isColored ?
      colorPrimaryClass + ' ' + colorPrimaryClassHover
      : colorSecondaryClass} 
      `}
             isColored={isColored}
             {...props}>
      {children}
    </Section>
  );
}


export default ButtonNoLink;
