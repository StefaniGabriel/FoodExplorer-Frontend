import { styled } from "styled-components";

export const Container = styled.button`
   
    align-items: center;
    padding: 12px 32px;

    border: none;

    background: none;
    color:  ${({ theme }) => theme.COLORS.WHITE900};
    font-size: 14px;

    &:hover{
      opacity: 0.5;
    }

 

`;