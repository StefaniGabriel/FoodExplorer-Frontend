import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
   

    .back {
        display: flex;
        align-items: center;

        margin-top: ${responsive(11)};
        margin-left: ${responsive(28)};
        margin-bottom: ${responsive(35)};

        span {
            font-family: 'Poppins', sans-serif;
        }
        
        svg {
            font-size: ${responsive(24)};
            color: ${({ theme }) => theme.COLORS.WHITE700};
        }
    }

   

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${responsive(24)};
    color: ${({ theme }) => theme.COLORS.WHITE700};
    padding: 0 ${responsive(32)};
    margin-bottom: ${responsive(40)};
    
    h2 {
        font-size: ${responsive(28)};
        font-weight: normal;
    }

    .file {
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
      

        width: 100%;
        height: ${responsive(48)};
       
       
        background-color: ${({ theme }) => theme.COLORS.GRAY400};

        input {
            display: none;

        }

        span {
            display: flex;
            align-items: center;
            gap: ${responsive(8)};
            font-size: ${responsive(12)};
            margin: ${responsive(12)};
        }

        svg {
            font-size: ${responsive(24)};
        }
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: ${responsive(16)};
        input {
            background-color: ${({ theme }) => theme.COLORS.GRAY400};
        }
    }

    .input-name {
        color: ${({ theme }) => theme.COLORS.GRAY800};
    }

    .ingredients-wrapper {
        display: flex;
        flex-direction: row;
        gap: ${responsive(16)};
        flex-wrap: wrap;
        
        width: 100%;
        height: 100%;
       
        background-color: ${({ theme }) => theme.COLORS.GRAY400};
        border-radius: ${responsive(8)};
        padding: ${responsive(8)};
        margin-top: ${responsive(12)};
    }


    .input-image-product{
      
        
    }


   
     .button {
        > button {
            background-color: ${({ theme }) => theme.COLORS.ROSE900};
        }
    }

`;

