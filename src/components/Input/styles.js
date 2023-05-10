import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 48px;

    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE700};

    border-radius: 8px;
   

    input{
        width: 100%;
        height: 100%;
        padding: 12px 14px;

        background: none;
        border: none;

        color: ${({ theme }) => theme.COLORS.WHITE900};

       
    }

    &placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY900};
        border: none;
    } 

   
 

`;