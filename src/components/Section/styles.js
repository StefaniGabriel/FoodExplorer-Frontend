import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.section`
    align-items: flex-start;

    margin-left: ${responsive(24)};
    margin-top: ${responsive(62)};
   
  
  h2 {
    font-size: clamp(1rem, 2vw, 1.8rem);
    color: ${({ theme }) => theme.COLORS.WHITE700};
    font-weight: normal;
    margin-bottom: ${responsive(24)};

    }

`;