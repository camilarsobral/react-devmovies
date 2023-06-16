import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
    }

    /* html {
    width: 100vw;
}    */

    body {
        background: #000;
        width: 100vw;
        
    }

    body::-webkit-scrollbar {
        display: none;
    }
`
