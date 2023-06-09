import { styled } from "styled-components";
import responsive from "../../../styles/responsive";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: ${responsive(28)};
  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};
    width: 100%;
    height: clamp(7rem, 5vw, 14rem);


    .menu-whapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        
       
        gap: ${responsive(10)};
       
        margin: ${responsive(28)} ${responsive(0)};
       

        p {
            color: ${({ theme }) => theme.COLORS.WHITE700};
            font-size: clamp(1.5rem, 2vw, 2.1rem);
        }

        svg {
           font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE700};
           
        }
    }

    .search-result {
        margin-top: ${responsive(130)};
      
    }


   
    @media (min-width: 700px) {
        display: none;
    }


`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 100%;
    height: 100%;
    
    margin-top  : ${responsive(40)};

   .border {
    width: 100%;
    margin-top: ${responsive(10)};

    border-bottom-style: solid;
    border-bottom-width: 0.1rem;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY500};
   }
        


    .button-logout{
        color: ${({ theme }) => theme.COLORS.WHITE700};
        align-self: flex-start;

        margin-top: ${responsive(36)};

        font-size: clamp(1.6rem, 2vw, 2.2rem);
        font-weight: 300;
        line-height: 140%;

       
    }

    .buttonAddNewProduct {
        margin-top: ${responsive(30)};

        width: 100%;
        
    }
   

 


`;

export const ProductSearch = styled.div`
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

 

`