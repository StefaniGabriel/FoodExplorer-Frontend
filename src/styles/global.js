import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE900};
    }

    h1, input, span, p{
        font-family: 'Roboto', sans-serif;

    }

    h2, button {
         font-family: 'Poppins', sans-serif;
    }

`;
