import React from 'react'
//import ReactDOM from 'react-dom'
import App from './App'
import { ContainerApp } from './styles/stylesApp'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContainerApp> 
      <App />
    </ContainerApp>
  </React.StrictMode>
)

/*
ReactDOM.render(
  <React.StrictMode>
    <ContainerApp> 
      <App />
    </ContainerApp>
  </React.StrictMode>,
  document.getElementById('root')
)
*/
