import { styled } from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 48px;

    align-items: center;
    padding: 12px 32px;

    border: none;

    background-color:  ${({ theme }) => theme.COLORS.BACKGROUND_RED900};
    color: ${({ theme }) => theme.COLORS.WHITE900};
    border-radius: 5px;

     &:hover{
      opacity: 0.7;
    }

 

`;