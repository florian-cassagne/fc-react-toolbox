import React from "react";
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "../../Text";
import {Separator} from "../../Miscellaneous";

function Title() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Title elements</TitleH2>

      <TitleH1>TitleH1</TitleH1>
      <TitleH2>TitleH2</TitleH2>
      <TitleH3>TitleH3</TitleH3>
      <TitleH4>TitleH4</TitleH4>
      <TitleH5>TitleH5</TitleH5>
      <TitleH6>TitleH6</TitleH6>

      <Separator size={2}/>
    </div>
  );
}

export default Title;
