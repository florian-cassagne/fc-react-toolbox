import React from 'react';
import './index.css';
import {colorBackgroundClass, colorTextClass} from "./index.jsx";
import InfoHeader from "./components/_App/InfoHeader";
import {initializeConfig} from "./configSetup";
import Title from "./components/_App/Examples/Title";
import Text from "./components/_App/Examples/Text";
import Button from "./components/_App/Examples/Button";
import Container from "./components/_App/Examples/Container";
import Media from "./components/_App/Examples/Media";
import Form from "./components/_App/Examples/Form";
import Miscellaneous from "./components/_App/Examples/Miscellaneous";


function App(){

  const config = initializeConfig()
  console.log(config)

  return (
    <div className={`${colorTextClass} ${colorBackgroundClass} max-w-[1200px] p-[2%] mx-auto`}>
      <InfoHeader/>

      <Title/>
      <Text/>
      <Button/>
      <Container/>
      <Media/>
      <Form/>
      <Miscellaneous/>


    </div>
  )
}

export default App;
