import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.button`
    width: 100%;
    height: ${responsive(48)};

    align-items: center;
    padding:${responsive(8)} ${responsive(20)};

    border: none;

    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_RED900};
    color: ${({ theme }) => theme.COLORS.WHITE900};
    border-radius: 5px;
    
    cursor: pointer;
    
    font-size: clamp(0.8rem, 2vw, 1rem);
    white-space: nowrap;

     &:hover{
      opacity: 0.7;
    }

    @media (min-width: 700px)  {

      padding:${responsive(12)} ${responsive(32)};

    }

 

`;