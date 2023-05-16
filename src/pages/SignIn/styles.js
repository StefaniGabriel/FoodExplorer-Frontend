import { styled } from "styled-components";
import responsive from "../../styles/responsive";

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

        gap: ${responsive(10)};

        margin-left: ${responsive(135)} ;

        h1 {
        font-size: ${responsive(42)};
        color:  ${({ theme }) => theme.COLORS.WHITE900}
    }

    img {
        width: ${responsive(49)};
        height: ${responsive(49)};
    }
    }

    @media (max-width: 800px) {

    display: flex;
    flex-direction: column;
   justify-content: center;
    

   .title{
    margin: 0 auto;

    h1{
        font-size:  ${responsive(37)};
    }

   }

  

  

}




  


`;

export const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${responsive(32)};
        

        width: ${responsive(476)};
        height: ${responsive(540)};

        margin-right: ${responsive(108)};
        padding: ${responsive(64)};

        background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};

      

        h2{
            color:  ${({ theme }) => theme.COLORS.WHITE900};
            font-size: ${responsive(32)};
            font-weight: 400;
        }

        section{
        display: flex;
        flex-direction: column;
        gap: ${responsive(8)};

        width: 100%;

        span {
        font-size: ${responsive(16)};
        color:  ${({ theme }) => theme.COLORS.WHITE800};
       


        }}

        @media (max-width: 800px) {

        background: none;
        margin: 0 auto;
        margin-bottom: ${responsive(73)} ;

        h2 {
        display: none;
        }



}

        

      


`;