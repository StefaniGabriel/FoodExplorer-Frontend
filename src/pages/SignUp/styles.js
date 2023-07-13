import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    height: 100vh;

    padding: ${responsive(60)};

     margin-bottom: ${responsive(73)};

  
    .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${responsive(10)};
    margin-bottom: ${responsive(78)};
   

    h2 {
      font-size: clamp(1.5rem, 5vw, 3.2rem);
      color: ${({ theme }) => theme.COLORS.WHITE900};
    }

    img {
      width: clamp(2.5rem, 5vw, 4.9rem);
      height: clamp(2.5rem, 5vw, 4.9rem);
    }

    }
  
    @media (min-width: 768px) {
        margin-bottom: 0;
      
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .title {
           margin: 0 auto;


             h2 {
                font-size: clamp(2.6rem, 2vw, 3.2rem);
            }
    } 

    }
    


`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;

    
        
        h2 {
        display: none;
        }
        

        section{
        display: flex;
        flex-direction: column;
        gap: ${responsive(8)};

        width: 100%;

        span {
        color:  ${({ theme }) => theme.COLORS.GRAY800};
       


        }

    }
       
    @media (min-width: 768px) {
        
        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};

        padding:  ${responsive(14)} ${responsive(64)};

        
        width: ${responsive(450)};
        height: ${responsive(500)};


        h2 {
        display: flex;
        font-size: clamp(1.4rem, 1.4rem + 1vw, 3rem);
        font-weight: 500;
        
        color:  ${({ theme }) => theme.COLORS.WHITE900}
        }
        

    }

`;