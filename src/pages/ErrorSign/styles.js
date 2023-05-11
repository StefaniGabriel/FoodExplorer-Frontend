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

export const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 34px;
    
        width: 476px;
        height: 500px;

        margin-right: 108px;
        padding: 64px;

        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};

      

        h2{
            color:  ${({ theme }) => theme.COLORS.WHITE900};
            margin-bottom: 44px;
        }

       

        p {
        color:  ${({ theme }) => theme.COLORS.WHITE800};
        margin-bottom: 57px;
         text-align-last: center;

        }

`;