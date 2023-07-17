import { styled } from "styled-components";
import responsive from "../../../styles/responsive";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
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

        

        .list-mobile{
            display: none;
        }

        .new-order {
            width: ${responsive(300)};
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

