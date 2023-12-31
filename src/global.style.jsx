import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
}

html, body, #root {
    width: 100%;
    height: 100%;
  }
`