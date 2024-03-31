import React from "react";
import {Paragraph, TextLink, TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "../../Text";
import {hrefFalseLink} from "./util";
import {Separator} from "../../Miscellaneous";

function Text() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Text-related elements</TitleH2>

      <Paragraph>Paragraph</Paragraph>
      <TextLink href={hrefFalseLink}>
        Text with link
      </TextLink>
      <Separator size={2}/>
    </div>
  );
}

export default Text;
