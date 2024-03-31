import React from "react";
import {TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "../../Text";
import {Separator} from "../../Miscellaneous";
import {DivDefault, HTMLArticle, HTMLAside, HTMLSection} from "../../Container";

function Container() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Container elements</TitleH2>

      <DivDefault>DivDefault : A HTML div tag</DivDefault>
      <HTMLSection className={'bg-neutral-900'}>
        SectionBig : A HTML5 section tag
        <HTMLArticle className={'bg-red-950'}>
          HTMLArticle (1/2) : HTML5 article tag
        </HTMLArticle>
        <HTMLArticle className={'bg-red-950'}>
          HTMLArticle (2/2) : HTML5 article tag
        </HTMLArticle>
        <HTMLAside className={'bg-yellow-950'}>
          HTMLAside : HTML5 aside tag
        </HTMLAside>
      </HTMLSection>

      <Separator size={2}/>
    </div>
  );
}

export default Container;
