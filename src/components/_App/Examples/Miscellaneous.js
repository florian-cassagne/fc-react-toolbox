import React from "react";
import {Paragraph, TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "../../Text";
import {LoadingSpinner, Separator, UnderConstruction} from "../../Miscellaneous";
import {DivDefault, HTMLArticle, HTMLAside, HTMLSection} from "../../Container";

function Container() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Miscellaneous</TitleH2>

      <TitleH3>Separator</TitleH3>
      <Paragraph className={'text-center'}>To add spaces between 2 elements such as div.</Paragraph>
      <Separator className={'!bg-orange-500'}/>


      <TitleH3>Loading spinner</TitleH3>
      <Paragraph className={'text-center'}>Note : Soon, the color will be customizable</Paragraph>
      <Paragraph className={'text-center'}>Note : Soon, the color will be customizable</Paragraph>
      <LoadingSpinner/>

      <TitleH3>Under construction section</TitleH3>
      <Paragraph className={'text-center'}>To tell to your viewers that some parts of your website will be available soon.</Paragraph>
      <UnderConstruction className={'!my-0'}>
        (Add the information you want the viewers know.)
      </UnderConstruction>

    </div>
  );
}

export default Container;
