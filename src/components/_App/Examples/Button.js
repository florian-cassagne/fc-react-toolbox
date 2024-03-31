import React from "react";
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "../../Text";
import {Separator} from "../../Miscellaneous";
import {ButtonLink, ButtonLinkBig, ButtonLinkXL, ButtonNoLink, Section} from "../../Button";
import {hrefFalseLink} from "./util";

function Button() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Button elements</TitleH2>

      <ButtonLink href={hrefFalseLink}>ButtonLink</ButtonLink>
      <ButtonLinkBig href={hrefFalseLink}>ButtonLinkBig</ButtonLinkBig>
      <ButtonLinkXL href={hrefFalseLink}>ButtonLinkXL</ButtonLinkXL>
      <ButtonNoLink>ButtonNoLink</ButtonNoLink>
      <Section>Section (ButtonNoLink's alternative)</Section>

      <Separator size={2}/>
    </div>
  );
}

export default Button;
