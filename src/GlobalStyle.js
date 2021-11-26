import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #1e2761;
        --lightBlue: #408ec6;
        --indego: #7a2048;
        /* sea colors */
        --seaFoam: #aed6dc;
        --salamon:#ff9a8d;
        --navy:#4a536b;
        /* sea colors */
        --green:#1fbfb8;
        --darkGreen:#05716c;
        --medueimBlue:#1978a5;
        --darkBlue:#031163;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        ::before {
            box-sizing: border-box;
        }
        ::after {
            box-sizing: border-box;
        }
    }

    html, body, #root {
        min-height: 100%;
    }
    
    body {
        width: 100%;
        line-height: calc(1em + 0.5rem);
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
`