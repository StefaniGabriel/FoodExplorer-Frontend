import { styled } from "styled-components";
import responsive from "../../styles/responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${responsive(10)};
    margin-top: ${responsive(78)};
   

    h1 {
      font-size: clamp(1.5rem, 5vw, 3.2rem);
      color: ${({ theme }) => theme.COLORS.WHITE900};
    }

    img {
      width: clamp(2.5rem, 5vw, 4.9rem);
      height: clamp(2.5rem, 5vw, 4.9rem);
    }
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .title {
      margin: 0 auto;

      h1 {
        font-size: clamp(2.6rem, 5vw, 3.7rem);
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${responsive(32)};
  width: clamp(18rem, 5vw, 32rem);
  height: clamp(18rem, 5vw, 48rem);
  margin-top: ${responsive(73)};
  margin-bottom: ${responsive(73)};
  padding: ${responsive(20)};


 
  background-color: none;

  h2 {
      display: none;
    }


  section {
    display: flex;
    flex-direction: column;
    gap: ${responsive(8)};
    width: 100%;

    span {
      font-size: ${responsive(16)};
      color: ${({ theme }) => theme.COLORS.WHITE800};
    }

  
  }

  @media (min-width: 700px) {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE800};
  margin: 0 auto;

  width: ${responsive(450)};
  height: ${responsive(490)};
  padding:  ${responsive(64)} ;

  .title {
    margin-top: ${responsive(135)};

  }
  
  h2 {
    display: block;
    color: ${({ theme }) => theme.COLORS.WHITE900};
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    font-weight: 400;
  }
}

   
  
`;