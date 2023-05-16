import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.button`
   
    align-items: center;
    padding:${responsive(12)} ${responsive(32)};

    border: none;

    background: none;
    color:  ${({ theme }) => theme.COLORS.WHITE900};
    font-size: ${responsive(14)};

    &:hover{
      opacity: 0.5;
    }

 

`;