import React from "react";
import {Paragraph, TitleH2, TitleH3} from "../../Text";
import {Separator} from "../../Miscellaneous";
import {InputText, Label} from "../../Form";

function Container() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Form-related elements</TitleH2>

      <TitleH3>InputText</TitleH3>
      <Paragraph className={'text-center'}>Standard input for text content</Paragraph>
      <InputText>A simple text input</InputText>

      <TitleH3>Label</TitleH3>
      <Label>Label's text</Label>

      <Separator size={2}/>
    </div>
  );
}

export default Container;
