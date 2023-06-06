import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE700};
    color: ${({ theme }) => theme.COLORS.GRAY700 };

    
    border-radius: ${responsive(5)};
  

    input {
        height: ${responsive(48)};
        width: 100%;
        padding: ${responsive(16)};
        
        color: ${({ theme }) => theme.COLORS.WHITE700};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY900};
        }

        > svg {
          font-size: 2.0rem;
            margin-left: ${responsive(16)};
        }
    }

`;