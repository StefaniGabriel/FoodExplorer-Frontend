import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: ${responsive(20)};


    .preview-product {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
        gap: ${responsive(20)};
        padding: ${responsive(20)};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK900};
        width: clamp(20rem, 5vw, 21rem);
        height: clamp(5rem, 5vw, 10rem);

        border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_BLACK800};
        border-radius: 0.8rem;  

    }

    .product-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(10)};
       
    }

    .name-product{
        font-size: 1.1rem;
        color: ${({ theme }) => theme.COLORS.WHITE700};

    }
  

    img {

        width: clamp(2rem, 2vw, 4rem);
        height: clamp(2rem, 2vw, 4rem);
        border-radius: 50%;
        object-fit: cover;
    }
  
    .icon {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE700};
       

    }


   


`;


