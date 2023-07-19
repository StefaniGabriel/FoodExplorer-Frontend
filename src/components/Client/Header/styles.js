import { styled } from "styled-components";
import responsive from "../../../styles/responsive";


export const Container = styled.div`
    display: flex;
    gap: ${responsive(16)};
    align-items: center;
    padding: ${responsive(28)};


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};
    width: 100%;
    height: clamp(7rem, 5vw, 14rem);


    .FaBars {
        color: ${({ theme }) => theme.COLORS.WHITE900};
        font-size:clamp(1rem, 5vw, 2.5rem);

        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
  

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(8)};

        margin-right: ${responsive(80)};

      
        img {
        width: clamp(1.4rem, 2vw, 2.5rem);
        height: clamp(1.4rem, 2vw, 2.5rem);

        }


        h1 {
            white-space: nowrap;
        font-size: clamp(1rem, 2vw, 2.1rem);
        color:  ${({ theme }) => theme.COLORS.WHITE900};
        }

        span {
        font-size: clamp(0.3rem, 2vw, 0.8rem);
        color:  ${({ theme }) => theme.COLORS.BLUE600}

        }


    }

    .logo-text{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(10)};

    }
  
    .FiLogOut{
        display: none;
    }

 

   


    @media (min-width: 800px) {
        height: ${responsive(96)};
        gap: ${responsive(32)};

        padding: ${responsive(24)} ${responsive(100)};

   
        .logo {
            flex-direction: row;
            gap: ${responsive(10)};

            align-items: flex-start;
            margin-right: ${responsive(0)};

        }

        .logo-text {
            flex-direction: column;
            justify-content: flex-end; 
            align-items: flex-end; 

            gap: 0;
        }

        .FaBars{
            display: none;
        }

        .newProduct {
            display: block;
            width: 21.6rem;
        }

        .FiLogOut{
            display: block;
            color: ${({ theme }) => theme.COLORS.WHITE900};
            font-size: 4rem;

            cursor: pointer;

            &:hover {
                opacity: 0.8;
            
            }
        }

        

 

        }

`;

export const InputSearch = styled.div`
    background: transparent;
    width: 100%;
    display: none;

    @media (min-width: 700px) {

    display: block;
   

   svg {
        color: ${({ theme }) => theme.COLORS.GRAY800};
        font-size: 2.4rem;
        margin-left: ${responsive(16)};
       
   }
    

   }
`;

