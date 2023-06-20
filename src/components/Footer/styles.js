import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    position: relative;
    bottom: 0;
    right: 0;
    left: 0;

    padding: ${responsive(27)};
 
    margin-top: ${responsive(25)};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE600};

    footer {
        display: flex;
        flex-direction: row;
        gap: ${responsive(20)};
        text-align: center;
        align-items: center;
    }
    .footer-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(7)};
    }

    img {
        width: clamp(0.8rem, 2vw, 1.2rem);
        height: clamp(0.8rem, 2vw, 1.2rem);

       
    }

    .footer-name {
        font-size: clamp(0.7rem, 2vw, 1.5rem);
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.GRAY700};
    }

    .footer-rights {
        font-size: clamp(0.6rem, 1vw, 1.2rem);
        color: ${({ theme }) => theme.COLORS.WHITE600};
    }

    @media (min-width: 700px) {
        position:relative;
        bottom: 0;
        right: 0;
        left: 0;


        footer {
        justify-content: space-between;
        padding: 0 ${responsive(100)};

        img {
        width: clamp(1.1rem, 2vw, 2.2rem);
        height: clamp(1.1rem, 2vw, 2.2rem);

       
    }
       
    }}

`;