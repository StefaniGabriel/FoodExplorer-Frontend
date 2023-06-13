import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${responsive(50)};

    width: 100%;
    height: 100vh;

  
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(9)};

        h1 {
        color:  ${({ theme }) => theme.COLORS.WHITE900}
    }
    }

    @media (min-width: 800px) {
        flex-direction: row;
        
        justify-content: space-between;
        padding: 0 ${responsive(100)};
        margin-top: 0;

    
       

    }


  


`;

export const Section = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${responsive(34)};
    
        width: ${responsive(250)};
        height: ${responsive(200)};
        background-color:  transparent;

        margin-top: ${responsive(100)};

        h2{
            color:  ${({ theme }) => theme.COLORS.WHITE900};
            margin-bottom: ${responsive(12)};
        }

       

        p {
        color:  ${({ theme }) => theme.COLORS.WHITE800};
        margin-bottom: ${responsive(23)};
        text-align-last: center;

        }


        @media (min-width: 800px) {
            width: ${responsive(400)};
            height: ${responsive(450)};

            margin-top: ${responsive(20)};

           margin-right: ${responsive(30)};
           padding: ${responsive(30)};

            background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};
            
            border-radius:  ${responsive(10)};

            h2 {
                margin-bottom: ${responsive(44)};
            }

            p {
                margin-bottom: ${responsive(57)};
            }
        }

`;