import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  height: ${responsive(48)};
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE700};

  input {
    
    width: 100%;
    height: ${responsive(48)};
    border: 0;
    padding: 19px 24px;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE900};
    font-size: ${responsive(16)};
  
  }

  &placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY900};
    font-size: 14px;
  }

  svg {
   
    margin-right: 14px;
    font-size: ${responsive(18)};
    color: ${({ theme }) => theme.COLORS.GRAY800};
    
  }

  @media (max-width: 600px) {
    input {
      text-align: start;
      padding: ${responsive(10)} ${responsive(10)};
    }
  }
`;