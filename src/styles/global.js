import { createGlobalStyle } from "styled-components";
import responsive from "./responsive";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    :root {
      font-size: ${responsive(24)};

     }}

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
