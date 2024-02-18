import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ButtonClose,
  ButtonLink,
  ButtonLinkBig,
  ButtonLinkXL,
  ButtonNoLink,
  CarouselBase,
  DivDefault,
  IconLink,
  IFrame,
  Image,
  ImageLink,
  InputText,
  Label,
  LoadingSpinner,
  Paragraph,
  Section,
  SectionBig,
  Separator,
  TextLink,
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6
} from "./index.jsx";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleH1>Level 1 title</TitleH1>
    <TitleH2>Level 2 title</TitleH2>
    <TitleH3>Level 3 title</TitleH3>
    <TitleH4>Level 4 title</TitleH4>
    <TitleH5>Level 5 title</TitleH5>
    <TitleH6>Level 6 title</TitleH6>

    <ButtonClose className={'!relative'}/>
    <ButtonLink>Button with link</ButtonLink>
    <ButtonLinkBig>Button with link, but larger</ButtonLinkBig>
    <ButtonLinkXL>Button with link, even more bigger</ButtonLinkXL>
    <ButtonNoLink className={'bg-green-800'}>Button without link</ButtonNoLink>
    <Section>Alternative to ButtonNoLink</Section>
    <CarouselBase>
      <Image src={'img/example-1.jpg'}/>
      <Image src={'img/example-2.jpg'}/>
      <Image src={'img/example-3.jpg'}/>
    </CarouselBase>
    <DivDefault>A simple div</DivDefault>
    <Paragraph>A paragraph</Paragraph>
    <SectionBig>A HTML section</SectionBig>

    <TextLink>Text with link</TextLink>

    <Paragraph className={'text-center'}>ImageLink : Equivalent to HTML's img, with a link on click.</Paragraph>
    <InputText>Un input de type texte</InputText>

    <Paragraph className={'text-center'}>ImageLink : Equivalent to HTML's img, with a link on click.</Paragraph>
    <Label>Un label</Label>

    <Paragraph className={'text-center'}>Image : Equivalent to HTML's img</Paragraph>
    <Image src={'img/example-1.jpg'}/>

    <Paragraph className={'text-center'}>ImageLink : Equivalent to HTML's img, with a link on click.</Paragraph>
    <ImageLink src={'img/example-2.jpg'} href={'#'}>Image avec lien</ImageLink>

    <Paragraph className={'text-center'}>Separator : To add spaces between 2 areas</Paragraph>
    <Separator/>
    <Paragraph className={'text-center'}>IconLink : A small image which lead to a specific link</Paragraph>
    <IconLink image={'img/example-3.jpg'} link={'#'}/>
    <Paragraph className={'text-center'}>IFrame : HTML iframe equivalent</Paragraph>
    <IFrame src={"https://www.youtube.com/embed/Qx0H5bivhLA?si=MAj5mHVNWcj9NrbO"}/>
    <Paragraph className={'text-center'}>Loading spinner</Paragraph>
    <LoadingSpinner/>

  </React.StrictMode>
);
