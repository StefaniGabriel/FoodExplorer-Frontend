import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    width: 100%;
    height: ${responsive(48)};

    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE700};

    border-radius: ${responsive(5)};
   

    input{
        display: block;
        width: 100%;
        height: ${responsive(48)};
        padding:${responsive(12)} ${responsive(14)};

        background: none;
        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE900};
        font-size:${responsive(16)};
       
    }

    &placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY900};
        border: none;
       
    
    } 

    @media (max-width: 600px) {
        input {
            text-align: start;
            padding:${responsive(10)} ${responsive(10)};


        }
      

    


    }

    
   
   
 

`;