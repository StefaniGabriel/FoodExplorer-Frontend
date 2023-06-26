import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
  

    main {
        padding: 0 ${responsive(56)};
        margin-bottom: ${responsive(49)};
    }

       
    .back {
        display: flex;
        align-items: center;

        margin-top: ${responsive(31)};
       
        margin-bottom: ${responsive(16)};

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
            width: clamp(13rem , 13rem + 10vw, 26rem);
            height: clamp(13rem , 13rem + 10vw, 26rem);
        }

       
    }

    .info-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: ${responsive(24)};
        margin-top: ${responsive(16)};

        color: ${({ theme }) => theme.COLORS.WHITE700};

        h2 {
            font-size: clamp(1.5rem, 1.5rem + 1vw, 2.7rem);
            font-weight: 500;
        }

        p {
            font-size: clamp(1rem, 1rem + 1vw, 1.6rem);
            font-family:  'Poppins', sans-serif;
            line-height: 140%;
        }

   }

   .details-tags {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        gap: ${responsive(24)};

        width: fit-content;

        margin:  ${responsive(25)};

   }

   .button {
    margin-top: ${responsive(48)};
   }

}

   
    

`;