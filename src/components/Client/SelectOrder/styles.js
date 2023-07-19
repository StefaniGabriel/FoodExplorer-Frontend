import responsive from "../../../styles/responsive";

import { styled } from "styled-components";

export const Container = styled.div`

        .select-order {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: ${responsive(10)};

          
        }
       

        .select {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: ${responsive(10)};
        }

        #select-value{
            color: ${({ theme }) => theme.COLORS.WHITE900};
            font-size: clamp(1rem, 2vw, 1.4rem);
            font-weight: 400;
        }

        #add-button{
            height: ${responsive(40)};
        }

        svg {
            font-size: clamp(1.2rem, 2vw, 1.6rem);
        }

        .new-order {
            width: 100%;
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


    @media (min-width: 700px) {
        .select-order {
            flex-direction: row;
        }
    }


`;