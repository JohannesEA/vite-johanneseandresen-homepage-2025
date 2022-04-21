import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --color--primary: #3E5916;
    --color--primary-hover:#486718;
    --color--secondary: #F28705;
    --color--secondary-hover: #ff9008;
    --color--light: #FFFFFF;
    --color--light-hover: #E5E5E5;
    --color--light-hover--dark: #999999;
    --color--dark: #3C3C3C;
    --color--dark-hover: #5D72A7;
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
