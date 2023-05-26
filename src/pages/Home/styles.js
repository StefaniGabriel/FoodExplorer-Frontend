import { styled } from "styled-components";
import responsive from "../../styles/responsive";
import image from "../../assets/pngegg_2-removebg-preview.png";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  

    .banner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 83%;
        height: clamp(6rem, 5vw, 12rem);
    
        margin-right: ${responsive(16)};
        margin-left: ${responsive(30)};
        margin-top: ${responsive(27)};

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

     


    }

   

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        margin-right: ${responsive(22)};

        width: clamp(11rem, 5vw , 21.5rem);
        
        h2 {

        font-size: clamp(1rem, 1vw, 1rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE700};
        }

        p{
        font-size: clamp(0.7rem, 1vw, 0.8rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};
        margin-bottom: ${responsive(22)};
        }

      @media (max-width: 700px) {

        .banner{
            height: clamp(13rem, 5vw, 26rem);

       
        }

        .banner-text {

            h2 {
                font-size: clamp(2rem, 5vw, 4rem);
            }
        }
      }
    }



`;

export const Image = styled.div`

    width: clamp(10rem, 2vw, 19.1rem);
    height: clamp(7.3rem, 2vw, 14.9rem);
    margin-top: ${responsive(-20)};
    margin-left: ${responsive(-16)};
    

    
    
    transform: matrix(1, 0, 0, 1, 0, 0);
    
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    img {
    width: 100%;
    height: 100%;
    
   
    }

`;