import { createGlobalStyle } from 'styled-components'
import FontRegular from '../assets/fonts/Poppins-Regular.ttf'
import FontMedium from "../assets/fonts/Poppins-Medium.ttf"
import FontExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf"
import FontBold from "../assets/fonts/Poppins-Bold.ttf"

const reset = `
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, 
    big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, 
    center, dl, dt, dd, ol, ul, li, form, label, caption, table, tbody, tfoot, thead, tr, th, td {
        margin: 0;
        padding: 0;
        border: 0;
        scroll-behavior: smooth;
    img {
        border: 0;
        vertical-align: middle;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content: "";
    }
    a:focus {
        outline: 0;
        text-decoration: none;
    }
    article, aside, details, figcaption, figure, footer, header, main, nav, section, summary {
        display: block;
    }
    button:focus {
        outline: none;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        -moz-appearance:textfield;
    }
    @font-face {
        font-family: "Poppins";
        font-weight: 400;
        src: url(${FontRegular}) format("truetype");
    }
    @font-face {
        font-family: "Poppins";
        font-weight: 500;
        src: url(${FontMedium}) format("truetype");
    }
    @font-face {
        font-family: "Poppins";
        font-weight: bold;
        src: url(${FontBold}) format("truetype");
    }
    @font-face {
        font-family: "Poppins";
        font-weight: 900;
        src: url(${FontExtraBold}) format("truetype");
    }
`
export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --text: #FFFFFF;
        --dbg: #001B26;
        --lbg: #35A6B6;
        --subbg: #19323C;
    }
    * {
        box-sizing: border-box;
        transition: background-color .25s ease-out;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    body > div {
        position: relative;
        overflow-x: hidden;
    }
    *,button,body,input,textarea {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: inherit;
    }
    body {
        background: var(--dbg);
        color: var(--text);
        font-size: 14px;
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
 
`