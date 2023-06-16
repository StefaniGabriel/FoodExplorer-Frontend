import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: fit-content;
   
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY300};
    color: ${({ theme }) => theme.COLORS.GRAY300};

    border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY300}`: "none"};
    border-radius: ${responsive(8)};

    > button {
        border: none;
        background:  none;

        display: flex;
        align-items: center;
        justify-content: center;

        
      

        &:focus {
            outline: none;
        }
      
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.WHITE900};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.GRAY900};
    }

    > input {
        height: ${responsive(32)};
        max-width: fit-content;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE900};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY900}; 
        }

        &:focus {
            outline: none;
        }

        
    }
`