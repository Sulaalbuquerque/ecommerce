import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: sans-serif;
  }
`
/*
    @media (max-width: 500px) {}

    @media (max-width: 770px) {}

    @media (max-width: 990px) {}

    @media (max-width: 1200px) {}

    @media (max-width: 1400px) {}
    
    @media (max-width: 1600px) {}
*/