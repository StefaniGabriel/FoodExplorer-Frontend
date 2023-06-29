import styled from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : `${theme.COLORS.GRAY300}`};
    color: ${({ theme }) => theme.COLORS.GRAY300};

    border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY300}`: "none"};
    border-radius: ${responsive(8)};

     button {
        border: transparent;
        background:  transparent;
       

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

     input {
        border: transparent;
        background:  transparent;

        height: ${responsive(32)};
    
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE900};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY900}; 
        }

        &:focus {
            outline: none;
        }

        
    }
`