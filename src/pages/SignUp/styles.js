import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100vh;

  
    .title {
        display: flex;
        flex-direction: row;

        margin-left: 153px;

        h1 {
        color:  ${({ theme }) => theme.COLORS.WHITE900}
    }
    }


  


`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        

        width: 475px;
        height: 621px;

        margin-right: 108px;
        padding: 64px;

        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};

      

        h2{
            color:  ${({ theme }) => theme.COLORS.WHITE900};
            
        }

        section{
        display: flex;
        flex-direction: column;
        gap: 8px;

        width: 100%;

        span {
        color:  ${({ theme }) => theme.COLORS.WHITE800};
       


        }

        
        }

       


`;