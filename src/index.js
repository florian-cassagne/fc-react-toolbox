import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeConfig} from "./configSetup";

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = initializeConfig()
console.log(config)

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
