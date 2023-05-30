import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
   
  
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


    @media (min-width: 700px) {
        margin-left: ${responsive(170)};
    }

`;