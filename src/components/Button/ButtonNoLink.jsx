import Section from "./Section";
import {colorPrimary} from "../../utils/StyleAssets";
import React from "react";

function ButtonNoLink({
                        children,
                        className = '',
                        isColored = true,
                        ...props
                      }) {
  return (
    <Section className={`cursor-pointer 
    ${className}`}
             isColored={isColored}
             {...props}>
      {children}
    </Section>
  );
}


export default ButtonNoLink;
