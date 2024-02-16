import React from 'react';
import ReactDOM from 'react-dom/client';
import {ButtonClose, ButtonLink, ButtonLinkBig, ButtonLinkXL, ButtonNoLink, CarouselBase, DivDefault, Image, InputText, Label, Paragraph, Section, SectionBig, TextLink, TitleH1, TitleH2, TitleH3, TitleH4, TitleH5, TitleH6} from "./index.jsx";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TitleH1>Titre principal</TitleH1>
    <TitleH2>Titre secondaire</TitleH2>
    <TitleH3>Titre de niveau 3</TitleH3>
    <TitleH4>Titre de niveau 4</TitleH4>
    <TitleH5>Titre de niveau 5</TitleH5>
    <TitleH6>Titre de niveau 6</TitleH6>

    <ButtonClose className={'!relative'}/>
    <ButtonLink>Bouton avec lien</ButtonLink>
    <ButtonLinkBig>Bouton Large</ButtonLinkBig>
    <ButtonLinkXL>Bouton Géant</ButtonLinkXL>
    <ButtonNoLink>Pseudo-bouton (bouton sans lien)</ButtonNoLink>
    <Section>Bouton sans lien (variante)</Section>
    <CarouselBase>
      <Image src={'img/example-1.jpg'}/>
      <Image src={'img/example-2.jpg'}/>
      <Image src={'img/example-3.jpg'}/>
    </CarouselBase>
    <DivDefault>Une div simple</DivDefault>
    <Paragraph>Un paragraphe</Paragraph>
    <SectionBig>Une balise section HTML</SectionBig>
    <TextLink>Du texte avec un lien</TextLink>
    <InputText>Un input de type texte</InputText>
    <Label>Un label</Label>

    <Image src={'img/example-1.jpg'}/>


  </React.StrictMode>
);
