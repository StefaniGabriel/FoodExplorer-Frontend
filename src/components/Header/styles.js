import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: row;


    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};
    width: 100%;
    height: ${responsive(114)};
  

    .title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: ${responsive(10)};
        margin-left: ${responsive(65)};


        h1 {
        font-size: ${responsive(21)};
        color:  ${({ theme }) => theme.COLORS.WHITE900}
    }

        span {
        font-size: ${responsive(12)};
        color:  ${({ theme }) => theme.COLORS.BLUE600}
        }

    img {
        width: ${responsive(49)};
        height: ${responsive(49)};
    }
    }
`;

export const Menu = styled.div`
    color: ${({ theme }) => theme.COLORS.WHITE900};
   
  


`;