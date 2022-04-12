import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color--primary: #2A67A1;
    --color--primary-hover:#2A67A1;
    --color--secondary: #81B9D6;
    --color--secondary-hover: #81B9D6;
    --color--light: #FFFFFF;
    --color--light-hover: #E5E5E5;
    --color--light-hover--dark: #feebef;
    --color--dark: #3C3C3C;
    --color--dark-hover: #616161;
    --color--shadow: #DAE1F0;
    --border-radius: .5em;
    --max--section--width: 100em;
    --min--section--height: 20em;
    --color--white--transparent: rgba(255, 255, 255, 0.5);
    --margin-small: 10px;
    --margin-medium: 15px;
    --margin-large: 20px;
    --margin-xl: 50px;
    --font-small: 16px;
    --font-medium: 20px;
    --font-large: 24px;
    --min-section-height: 90vh;

  }

`;

export default GlobalStyle;
