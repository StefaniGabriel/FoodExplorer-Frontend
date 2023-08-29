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
        display: flex;
        background-color: transparent;
    }

    .pix,  #btn, .credit, input, .infos-order-container {
        border: 1px solid  ${({ theme }) => theme.COLORS.GRAY600};

    }

    .pix , .credit, .infos-order-container{
        height: ${responsive(364)};
        width: ${responsive(530)};
        justify-content: center;
        align-items: center;

        border-radius: ${responsive(0)} ${responsive(0)} ${responsive(8)} ${responsive(8)};

    }
    .pix {
        padding: ${responsive(48)} ${responsive(130)};

    }

    .credit {
        
        padding: 0 ${responsive(91)};

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

    .selected {
        background-color: transparent;
    }

    .no-selected {
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
        height: ${responsive(45)};
        padding: ${responsive(12)} ${responsive(14)};

        font-size: ${responsive(16)};
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.GRAY800};
        background: transparent;

    }

    button {
        font-family: 'Roboto', sans-serif;
    }

    #btn {
        width: 100%;
        height: ${responsive(70)};
        color: ${({ theme }) => theme.COLORS.WHITE700};
        font-size: ${responsive(16)};
        

        padding: ${responsive(12)} ${responsive(14)};
        display: flex;
        flex-direction: row;
        gap: ${responsive(14)};
        justify-content: center;
        align-items: center;

     
        &:hover {
            opacity: 0.5;
        }

        svg {
            font-size: ${responsive(22)};
            color: ${({ theme }) => theme.COLORS.WHITE700};
        }

    }


    .order-btn {
        width: 100%;
        height: ${responsive(48)};

        display: flex;
        align-items: center;
        justify-content: center;
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

        .infos-order-container {
            display: flex;
            flex-direction: column;
            gap: ${responsive(20)};
            justify-content: center;
            align-items: center;

            color: ${({ theme }) => theme.COLORS.GRAY700};
           
            span {
                font-size: ${responsive(24)};
            }

            svg {
                font-size: ${responsive(90)};
            }
        }

  
`;