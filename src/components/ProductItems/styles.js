import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
   
    .preview-product {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: ${responsive(12)};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK900};
        width: clamp(10rem, 5vw, 21rem);
        height: clamp(15rem, 5vw, 29rem);

        border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_BLACK800};
        border-radius: 0.8rem;  

    }

  
    
    .name-product {
        font-family: Poppins , sans-serif;
        font-size: clamp(0.5rem, 2vw, 1.6rem);
        color: ${({ theme }) => theme.COLORS.BLUE600};
    }

    .description-product{
        display: none;
    }

    p{
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
  

    @media (min-width: 700px) {
       

        .preview-product {
        width: clamp(16rem, 5vw, 30.4rem);
        height: clamp(25rem, 5vw, 46.2rem);

        padding: ${responsive(5)};

        }

        .description-product{
            display: block;
            font-size: clamp(0.6rem, 2vw, 0.8rem);
            color: ${({ theme }) => theme.COLORS.GRAY800};

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        p {
            font-size: clamp(0.8rem, 2vw, 1.6rem);
            font-weight: 700;
        }

        .name-product {
            font-size: clamp(0.8rem, 2vw, 1.6rem);
            
        }    
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


    @media (min-width: 700px) {
        margin-left: ${responsive(170)};
    }

`;