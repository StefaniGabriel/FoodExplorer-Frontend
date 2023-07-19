import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.div`
  
    .new-order{
        display: none;
    }

    .list-mobile{
        position: relative;
        display: flex;


        width: fit-content;
        background-color: transparent;

        #number-order{
            position: absolute;
            top: ${responsive(-5)};
            right: ${responsive(-5)};
            
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED900};
            border-radius: 99%;
            width: ${responsive(20)};
            flex-shrink: 0;

            display: flex;
            justify-content: center;
           

            color: ${({ theme }) => theme.COLORS.WHITE900};
        }


      
      
        
    }
    
    @media (min-width: 700px) {

    .list-mobile{
    display: none;
    }

    .new-order {
        width:  fit-content;
        height: ${responsive(48)};

        display: flex;
        align-items: center;
        text-align: center;
        gap: ${responsive(8)};
        padding:${responsive(12)} ${responsive(32)};

        border: none;

        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_RED900};
        color: ${({ theme }) => theme.COLORS.WHITE900};
        border-radius: 5px;
        
        cursor: pointer;
        
        font-size: clamp(0.8rem, 2vw, 1rem);
        white-space: nowrap;

        &:hover{
        opacity: 0.7;
        }
        }

}
    
    `;