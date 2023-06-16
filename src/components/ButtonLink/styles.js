import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.button`
   
    align-items: center;

    border: none;

    background: none;
    color:  ${({ theme }) => theme.COLORS.WHITE900};
    font-size: clamp(1rem, 5vw, 1rem);

    &:hover{
      opacity: 0.5;
    }

    svg {
      color:  ${({ theme }) => theme.COLORS.WHITE900};
    }
 

`;