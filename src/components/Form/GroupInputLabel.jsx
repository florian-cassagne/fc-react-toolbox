import React from "react";
import Label from "./Label";
import DivDefault from "../Container/DivDefault";


function InputText({
                     children,
                     type,
                     id,
                     name,
                     className,
                     ...props
                   }) {
  return (
    <DivDefault>
      <Label>
        {children}
      </Label>
      <InputText></InputText>
    </DivDefault>
  )
}


export default InputText;
