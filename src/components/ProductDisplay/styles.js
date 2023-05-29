import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
   
    gap: ${responsive(12)};

    .carousel-product{
        display: flex;
        flex-direction: row;
        gap: ${responsive(12)};

      
        overflow-x: auto; 
    }

   

    .preview-produt {
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
        margin-top: ${responsive(40)};
        width: clamp(4.4rem, 10vw, 8.8rem);
        height: clamp(4.4rem, 10vw, 8.8rem);
        border-radius: 50%;
    }
    span {
        font-family: Poppins , sans-serif;
        font-size: clamp(0.5rem, 2vw, 1.6rem);
        color: ${({ theme }) => theme.COLORS.BLUE600};
        
        
    }
`;