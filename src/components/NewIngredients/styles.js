import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({ theme}) => theme.COLORS.WHITE_200};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

    
    border-radius: 8px;

    > button {
        background: none;
        border: none;
        color: ${({ theme}) => theme.COLORS.PINK};

    svg {
        margin: 0 16px;
    }

    }


    > input {
        height: 56px;
      
        padding: 16px;

        color: ${({ theme}) => theme.COLORS.WHITE_200};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme}) => theme.COLORS.GRAY_300};

        }
    }

`;