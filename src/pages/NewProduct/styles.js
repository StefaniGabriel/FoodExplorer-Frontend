import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`

    .input-wrapper {

    }

    .input-name {

    }

    .ingredients-wrapper {
        width: 100%;
        height: ${responsive(48)};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE500};
        border-radius: ${responsive(8)};
        padding: ${responsive(12)};
        margin-top: ${responsive(12)};
    }

    
    .input{
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE400};
        }

`;