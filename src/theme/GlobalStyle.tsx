import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,:before,:after {
        margin: 0;
        padding: 0;
    }

    body {
     box-sizing: border-box;
     font-family: 'Rubik', sans-serif;
     font-size: 30px;

    }

    ul {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`

export default GlobalStyle;