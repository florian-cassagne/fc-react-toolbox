import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ButtonLink,
  ButtonLinkBig,
  ButtonLinkXL,
  ButtonNoLink,
  DivDefault,
  ElementCarousel,
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
  TitleH6,
  UnderConstruction
} from "./index.jsx";
import InfoHeader from "./components/_App/InfoHeader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <InfoHeader/>
    <TitleH2>Text-related elements</TitleH2>

    <TitleH1>TitleH1</TitleH1>
    <TitleH2>TitleH2</TitleH2>
    <TitleH3>TitleH3</TitleH3>
    <TitleH4>TitleH4</TitleH4>
    <TitleH5>TitleH5</TitleH5>
    <TitleH6>TitleH6</TitleH6>
    <Paragraph>Paragraph</Paragraph>
    <TextLink href={'#'}>Text with link</TextLink>

    <Separator size={2}/>
    <TitleH2>Button elements</TitleH2>

    <ButtonLink>ButtonLink</ButtonLink>
    <ButtonLinkBig>ButtonLinkBig</ButtonLinkBig>
    <ButtonLinkXL>ButtonLinkXL</ButtonLinkXL>
    <ButtonNoLink className={'!bg-green-800'}>ButtonNoLink</ButtonNoLink>
    <Section className={'!bg-green-800'}>Section (ButtonNoLink's alternative)</Section>


    <Separator size={2}/>
    <TitleH2>Box-related elements</TitleH2>

    <DivDefault>DivDefault : A HTML div tag</DivDefault>
    <SectionBig className={'bg-neutral-900'}>SectionBig : A HTML section tag</SectionBig>


    <Separator size={2}/>
    <TitleH2>Media-related elements</TitleH2>

    <TitleH3>Image</TitleH3>
    <Paragraph className={'text-center'}>Image : Equivalent to HTML's img</Paragraph>
    <Image src={'img/example-1.jpg'}/>

    <TitleH3>ImageLink</TitleH3>
    <Paragraph className={'text-center'}>ImageLink : Equivalent to HTML's img, but work as a link.</Paragraph>
    <ImageLink src={'img/example-2.jpg'} href={'#'}>Image avec lien</ImageLink>


    <TitleH3>ElementCarousel : Carousel of various elements (img, div...)</TitleH3>
    <ElementCarousel>
      <Image src={'img/example-1.jpg'}/>
      <Image src={'img/example-2.jpg'}/>
      <Image src={'img/example-3.jpg'}/>
    </ElementCarousel>

    <TitleH3>IconLink</TitleH3>
    <Paragraph className={'text-center'}>A small image which lead to a specific link</Paragraph>
    <IconLink image={'img/icon-1.png'} link={'#'} className={'mx-auto'}/>

    <TitleH3>IFrame</TitleH3>
    <Paragraph className={'text-center'}>HTML's iframe equivalent</Paragraph>
    <IFrame src={"https://www.youtube.com/embed/Qx0H5bivhLA?si=MAj5mHVNWcj9NrbO"}/>

    <Separator size={2}/>
    <TitleH2>Form-related elements</TitleH2>

    <TitleH3>InputText</TitleH3>
    <Paragraph className={'text-center'}>Standard input for text content</Paragraph>
    <InputText>Un input de type texte</InputText>

    <TitleH3>Label</TitleH3>
    <Label>Label's text</Label>

    <Separator size={2}/>
    <TitleH2>Miscellaneous</TitleH2>

    <TitleH3>Separator</TitleH3>
    <Paragraph className={'text-center'}>To add spaces between 2 elements such as div.</Paragraph>
    <Separator className={'!bg-orange-500'}/>
    <Paragraph className={'text-center'}>Loading spinner</Paragraph>
    <LoadingSpinner/>
    <UnderConstruction/>

  </React.StrictMode>
);
