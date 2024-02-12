import React from "react";
import ButtonLink from "./Button/ButtonLink";
import DivDefault from "./Content/DivDefault";


function ButtonGroupLink({links, className, ...props}) {
  return (
    <DivDefault {...props}
                className={'flex justify-center'}>
      {links?.map((link, index) => (
        <ButtonLink href={link[1]}
                    className={'mr-2 lg:mr-4'}
                    key={index}>
          {link[0]}
        </ButtonLink>
      ))}
    </DivDefault>
  )
}


export default ButtonGroupLink;
