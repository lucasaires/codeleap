import { createGlobalStyle } from "styled-components";
import { theme } from "./themes/theme";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body{
        background-color: ${theme.colors["gray-100"]};
        color: $${theme.colors["black-900"]};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        outline: none;
;

    }
    body, input, textarea, button {
        font: ${theme.fonts["roboto-400"]};
        }
`;
