import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${responsive(16)};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE500};
    color: ${({ theme }) => theme.COLORS.GRAY700 };

    border-radius: ${responsive(8)};
    padding: 0 ${responsive(20)};
    
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    
    > select {
        height: ${responsive(48)};
        width: 100%;
        background: transparent;
        border: none;
        outline: none;

       
        color: ${({ theme }) => theme.COLORS.WHITE800};

    }

    svg {
        font-size: 4.0rem;
    }

    option {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE500};
        color: ${({ theme }) => theme.COLORS.WHITE800};
      
        border: none;
        outline: none;

       
    }
    



`;