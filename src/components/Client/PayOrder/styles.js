import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.div`

    .credit {
        display: none;
       
    }

    .pix {
        display: none;
    }

    .active {
        display: block;
        background-color: transparent;
    }

    .pix,  .btn-credit , .btn-pix, .credit, input {
        border: 1px solid  ${({ theme }) => theme.COLORS.GRAY600};

    }

    .pix , .credit{
    
        padding: ${responsive(48)} ${responsive(130)};
        justify-content: center;
        align-items: center;

        border-radius: ${responsive(0)} ${responsive(0)} ${responsive(8)} ${responsive(8)};

    }
    .pix {
        width: ${responsive(530)};
        height: ${responsive(364)};
    }

    .credit {
        height: ${responsive(381)};
        width: ${responsive(530)};
        padding: ${responsive(59)} ${responsive(91)} ;

        display: flex;
        flex-direction: column;
        gap: ${responsive(20)};

       
    }

    .pix-code {

        img {
            width: ${responsive(250)};
            height: ${responsive(250)};
        }
    }

    .btn-payment {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .btn-active {
        background-color: transparent;
    }

    .btn-no-active {
        background-color: ${({ theme }) => theme.COLORS.GRAY200};

    }

    .title-card {
        font-size: ${responsive(16)};
        color: ${({ theme }) => theme.COLORS.GRAY800};
    }

    .row-2 {
        display: flex;
        flex-direction: row;
        gap: ${responsive(17)};
    }

    input {
        width: 100%;
        height: ${responsive(48)};
        padding: ${responsive(12)} ${responsive(14)};

        font-size: ${responsive(16)};
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.GRAY800};
        background: transparent;

    }

    #btn {
        width: 100%;
        height: ${responsive(81)};
        color: ${({ theme }) => theme.COLORS.WHITE700};
        font-size: ${responsive(16)};
        font-family: 'Roboto', sans-serif;

        padding: ${responsive(12)} ${responsive(14)};
        justify-content: center;
        align-items: center;

        &:hover {
            opacity: 0.5;
        }

    }

  
`;