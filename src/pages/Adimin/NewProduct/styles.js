import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.div`
    
    main {
        padding: 0 ${responsive(32)};
    }
   
    .back {
        display: flex;
        align-items: center;

        margin-top: ${responsive(11)};
       
        margin-bottom: ${responsive(35)};

        button {
            font-family: 'Poppins', sans-serif;
            
        }
        
        svg {
            font-size: clamp(1.8rem, 1.8rem + 2vw, 4rem);
            color: ${({ theme }) => theme.COLORS.WHITE700};
        }
    }

    @media (min-width: 800px) {
        main {
            padding: 0 ${responsive(129)};
        }
        

        .back {
           
            margin-top: ${responsive(40)};
            margin-bottom: ${responsive(24)};
            
            button {
                font-size: clamp(1.8rem, 1.8rem + 2vw, 2rem);

              
            }

          
          
        }

        
    }

   

`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
  
    color: ${({ theme }) => theme.COLORS.WHITE700};
 
    margin-bottom: ${responsive(40)};
    
    h2 {
        font-size: clamp(1rem, 1rem + 2vw, 1.8rem);
        font-weight: normal;
        margin-bottom: ${responsive(24)};
    }

    .file {
        label{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        border-radius: ${responsive(8)};

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
            white-space: nowrap;

         
        }

        svg {
            font-size: ${responsive(24)};
        }
    }}


    .file-02 {
    
        label{
        display: flex;
        flex-direction: row;
        align-items: center;
       

        white-space: nowrap;
        width: 100%;
        height: ${responsive(48)};
       
       
        background-color: $transparent;
        
        input {
            display: none;

        }

        }
    
        img {
            width: clamp(2rem, 2rem + 10vw, 4rem);
            height: clamp(2rem, 2rem + 10vw, 4rem);
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: ${responsive(5)};
            margin-left: ${responsive(15)};

            background-color: transparent;
            border:  1px dashed ${({ theme }) => theme.COLORS.GRAY900};
            color: ${({ theme }) => theme.COLORS.GRAY900};

            svg {
                font-size: ${responsive(16)};
            }

            &:hover {
                opacity: 0.5;
            }
        }

        span {
            display: flex;
            align-items: center;
            gap: ${responsive(8)};

        }
 
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        gap: ${responsive(16)};
        input {
            background-color: ${({ theme }) => theme.COLORS.GRAY400};
        }
      
        margin-bottom: ${responsive(24)};

        
    }

    .input-name {
        color: ${({ theme }) => theme.COLORS.GRAY800};
        font-size: clamp(1rem, 1rem + 2vw, 1rem);
    
    }
    .input-name-product {
        border-radius: ${responsive(8)};
    }

    .input-price-product {
        border-radius: ${responsive(8)};
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
        
    }
   
    .button {
     
        > button {
           
            background-color: ${({ theme }) => theme.COLORS.ROSE900};
        }
    }



    @media (min-width: 800px) {
     

        h2 {
            font-size: clamp(1.8rem, 1.8rem + 2vw, 2.8rem);
        }


        .row-1 {
            display: grid;
            grid-template-columns: 0.5fr 1fr 1fr;
            gap: ${responsive(32)};
            align-items: center;

            width: 100%;
        }

        .row-2 {
            display: grid;
            grid-template-columns: 1fr 0.2fr ;
            gap: ${responsive(32)};

            align-items: center;
        }
        
        .button {
        text-align: end;
        > button {
            width: 25%;
        }
    }
       
    }

`;

