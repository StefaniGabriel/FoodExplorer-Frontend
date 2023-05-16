import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.button`
    width: 100%;
    height: ${responsive(48)};

    align-items: center;
    padding:${responsive(12)} ${responsive(32)};

    border: none;

    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_RED900};
    color: ${({ theme }) => theme.COLORS.WHITE900};
    border-radius: 5px;

    font-size: ${responsive(14)};

     &:hover{
      opacity: 0.7;
    }

 

`;