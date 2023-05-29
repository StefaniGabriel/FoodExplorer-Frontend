import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
   
    .preview-product {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${responsive(12)};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK900};
        width: clamp(10rem, 5vw, 21rem);
        height: clamp(15rem, 5vw, 29rem);

        border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_BLACK800};
        border-radius: 0.8rem;  

    }

  
    
    p {
        font-size: clamp(0.4rem, 2vw, 1.4rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};
        }

    img {
        margin-top: ${responsive(20)};
        width: clamp(4.4rem, 10vw, 8.8rem);
        height: clamp(4.4rem, 10vw, 8.8rem);
        border-radius: 50%;
        object-fit: cover;
    }
    span {
        font-family: Poppins , sans-serif;
        font-size: clamp(0.5rem, 2vw, 1.6rem);
        color: ${({ theme }) => theme.COLORS.BLUE600};
        
        
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