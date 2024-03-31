import React from "react";
import {Paragraph, TitleH2, TitleH3} from "../../Text";
import {Separator} from "../../Miscellaneous";
import {ElementCarousel, IconLink, IFrame, Image, ImageLink} from "../../Media";
import {hrefFalseLink} from "./util";

function Container() {
  return (
    <div>
      <TitleH2 className={'bg-neutral-900 p-4'}>Media-related elements</TitleH2>

      <TitleH3>Image</TitleH3>
      <Paragraph className={'text-center'}>Image : Equivalent to HTML's img</Paragraph>
      <Image src={'img/example-1.jpg'}/>

      <TitleH3>ImageLink</TitleH3>
      <Paragraph className={'text-center'}>ImageLink : Equivalent to HTML's img, but work as a link.</Paragraph>
      <ImageLink src={'img/example-2.jpg'} href={hrefFalseLink}>Image avec lien</ImageLink>


      <TitleH3>ElementCarousel : Carousel of various elements (img, div...)</TitleH3>
      <ElementCarousel>
        <Image src={'img/example-1.jpg'}/>
        <Image src={'img/example-2.jpg'}/>
        <Image src={'img/example-3.jpg'}/>
      </ElementCarousel>

      <TitleH3>IconLink</TitleH3>
      <Paragraph className={'text-center'}>A small image which lead to a specific link</Paragraph>
      <IconLink image={'img/icon-1.png'} href={hrefFalseLink} className={'mx-auto'}/>

      <TitleH3>IFrame</TitleH3>
      <Paragraph className={'text-center'}>HTML's iframe equivalent</Paragraph>
      <IFrame src={"https://www.youtube.com/embed/sQ22pm-xvrE?si=hEp7N_a_peA_Tt7t"}/>

      <Separator size={2}/>
    </div>
  );
}

export default Container;
