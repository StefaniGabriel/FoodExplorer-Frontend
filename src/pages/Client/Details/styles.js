import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    main {
        padding: 0 ${responsive(40)} ${responsive(40)};
       
    }

    .back {
        display: flex;
        align-items: center;

        margin-top: ${responsive(31)};
       
        margin-bottom: ${responsive(16)};

        
        &:hover{
            opacity: 0.7;
        }

        cursor: pointer;

        button {
            font-family: 'Poppins', sans-serif;
            
        }
        
        svg {
            font-size: clamp(1.8rem, 1.8rem + 2vw, 4rem);
            color: ${({ theme }) => theme.COLORS.WHITE700};

            }
    }

   .details-container {
        display: flex;
        flex-direction: column;
        align-items: center;

    .image-container {
        img{
            border-radius: 50%;
            width: clamp(13rem , 13rem + 10vw, 20rem);
            height: clamp(13rem , 13rem + 10vw, 20rem);
        }

       
    }

    .info-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: ${responsive(24)};
        margin-top: ${responsive(16)};

        color: ${({ theme }) => theme.COLORS.WHITE700};

        .name-product {
            font-size: clamp(1.5rem, 1.5rem + 1vw, 2.7rem);
            font-weight: 500;
        }

        .description-product {
            font-family:  'Poppins', sans-serif;
            font-size: clamp(0.8rem, 0.8rem + 1vw, 2rem);
            line-height: 140%;
        }

   }

   .details-tags {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(3, 1fr);    
        
        gap: ${responsive(24)};

        width: fit-content;

        margin-top: ${responsive(20)};
        margin-bottom: ${responsive(20)};

   }

 .select-order {
    flex-direction: row;
 }

   

}


@media (min-width: 768px) {
  

    main {
       padding: 0 ${responsive(122)};
    }

    .details-container {
       
        align-items: flex-start;

        flex-direction: row;
        gap: ${responsive(58)};
       

        .image-container{
            img{
                border-radius: 50%;
                width: clamp(15rem , 15rem + 10vw, 30rem);
                height: clamp(15rem , 15rem + 10vw, 30rem);
            }
        }
    }

    .row{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
         justify-content: flex-start;

        
    }

   
    .details-tags {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: repeat(6, 1fr);

        width: fit-content;
        
     
        text-align: start;

    }

    .name-product {
            align-self: self-start;
            white-space: nowrap;

    }
    
    .description-product {

       text-align: left;

    }

    .button {
        margin: 0 ;
   }

}
 

`;