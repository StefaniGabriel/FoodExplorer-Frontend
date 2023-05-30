import { styled } from "styled-components";
import responsive from "../../styles/responsive";


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
        font-size:clamp(1rem, 5vw, 2.5rem);;  
    }
  

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: ${responsive(10)};

      
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

        margin-right: ${responsive(93)};
        
    }

    .search{
        display: none;

    }
   
    
    .newProduct {
        display: none;
    }

    .FiLogOut{
        display: none;
    }

  

    @media (min-width: 700px) {
        height: ${responsive(96)};
        gap: ${responsive(32)};

        padding: ${responsive(24)} ${responsive(100)};

   
        .logo {
            flex-direction: row;
            gap: ${responsive(10)};

            align-items: flex-start;

        }

        .logo-text {
            flex-direction: column;
            justify-content: flex-end;

          
            
        }

        .search{
            display: block;
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
            font-size: 4.8rem;

            cursor: pointer;
        }

    }

`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

