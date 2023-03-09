
import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root{
        --primary: #57a6ff;
        --white: #fffffe;
        --black: #141414;
        --grey: #8b949e;
        --bg: #0d1117;
        --button: #22262c;
        --grey-2: #c5ced7;
        --pink: #cc68a0;
        --yellow: #f1e05a;
        --purple: #563d7c;
        --black-2: #171b21;
        --headline1: semi bold 1.625rem/2rem Inter;
        --button: 500 0.875rem/1.5rem Inter;
        --headline2-semi-bold: semi bold 1.25rem/1.5rem Inter;
        --headline2-ligth: 300 1.25rem/1.5rem Inter;
        --body1-regular: 400 1rem/1.5rem Inter;
        --body1-semi-bold: 700 1rem/1.5rem Inter;
        --body2-regular: 400 0.875rem/1.5rem Inter;
        --body2-semi-bold: semi bold 0.875rem/1.5rem Inter;
        --caption-regular: 400 0.75rem/1.125rem Inter;
        --caption-medium: 500 0.75rem/1.125rem Inter;
    }
    body{
        background: var(--bg);
        color: var(--grey);
        font: var(--body1-regular);
    }

`

/*
function GlobalStyles() {
    return (
        <GlobalStylesStyled>
            GlobalStyles
        </GlobalStylesStyled>
    )
} */

export default GlobalStylesStyled
