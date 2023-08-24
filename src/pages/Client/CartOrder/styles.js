import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: ${responsive(123)};
        margin-top: ${responsive(34)};
        margin-right: ${responsive(196)};

        h2 {
            margin-bottom: ${responsive(32)};

            font-size: ${responsive(32)};
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE700};
        }

        .total {
            .total-span {
                font-size: ${responsive(20)};
            }
        }


        
    }
`;