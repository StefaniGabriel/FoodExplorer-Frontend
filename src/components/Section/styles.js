import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: ${responsive(24)};
    margin-top: ${responsive(62)};
   
  
  h2 {
    font-size: clamp(1rem, 2vw, 1.8rem);
    color: ${({ theme }) => theme.COLORS.WHITE700};
    font-weight: normal;
    margin-bottom: ${responsive(24)};

    }

    @media (min-width: 700px) {
       
    }

`;

export const PenIcon = styled.span`
    position: relative;
    margin-top: ${responsive(16)};
    margin-left: ${responsive(100)};

    svg {
      
        width: clamp(1.2rem, 2vw, 2.4rem);
        height: clamp(1.2rem, 2vw, 2.4rem);
        color: ${({ theme }) => theme.COLORS.WHITE700},
    }

`;