import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:${Theme.colors.font};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    
    section {
        padding: 100px 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }
    
    section:nth-last-of-type(even) {
        background-color: ${Theme.colors.primaryBg};
    }
    
    section:nth-last-of-type(odd) {
        background-color: ${Theme.colors.secondaryBg};
    }
    
    h3 {
        font-weight: 700;
        font-size: 16px;
        font-family: "Josefin Sans", sans-serif;
        
    }
    
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
    }
    
    a {
        color:${Theme.colors.font};
        text-decoration: none;
    }

`