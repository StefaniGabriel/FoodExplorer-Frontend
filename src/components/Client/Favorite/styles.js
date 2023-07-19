import { styled } from "styled-components";
import responsive from "../../../styles/responsive";

export const Container = styled.span`
position: relative;
align-self: flex-end;
margin-top: ${responsive(5)};
margin-right: ${responsive(8)};

.icons-container {
          position: absolute;
            

          

            svg {
                font-size: clamp(1.2rem, 2vw, 1.6rem);
                color: ${({ theme }) => theme.COLORS.WHITE700};
                &:hover {
                    opacity: 0.5;
                }
            }
        }

     
`;