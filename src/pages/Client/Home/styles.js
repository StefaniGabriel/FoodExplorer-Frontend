import { styled } from "styled-components";
import responsive from "../../../styles/responsive";
import image from "../../../assets/frutas.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
   
  
    width: 100%;
    height: 100vh;

    .banner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: clamp(6rem, 5vw, 12rem);
    
        margin-right: ${responsive(16)};
        margin-left: ${responsive(15)};
        margin-top: ${responsive(27)};

        border-radius: 0.8rem;

        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);


    }

   

    .banner-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

   
        margin-top: ${responsive(22)};

        width: clamp(11rem, 5vw , 21.5rem);
        
        h2 {

        font-size: clamp(0.7rem, 3vw, 1rem);
        font-weight:normal;
        color: ${({ theme }) => theme.COLORS.WHITE700};
        flex-wrap: nowrap;
        }

        p{
        font-size: clamp(0.5rem, 2vw, 0.8rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};
        margin-bottom: ${responsive(22)};
        }

     
    }

    @media (min-width: 700px) {
        


    .banner{
        position: relative;
       
        padding: ${responsive(100)};
        margin: 0 auto;
        margin-top: ${responsive(100)};
        height: clamp(13rem, 5vw, 26rem);
        width: 85%;
        justify-content: center;

    }

    .banner-text {
            
        width: clamp(29rem, 2vw, 42.1rem);
        margin-left: ${responsive(280)};
 

        h2 {
            font-size: clamp(1.8rem, 2vw, 2rem);
            white-space: nowrap;
        }

        p {
            font-size: clamp(0.8rem, 3vw, 1.2rem);
            white-space: nowrap;
        
        }
}
}



`;

export const Image = styled.div`

    width: clamp(15rem, 2vw, 22rem);
    height: clamp(7.3rem, 2vw, 14.9rem);
    margin-top: ${responsive(-16)};
    margin-left: ${responsive(-16)};
    
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  
    img {
    width: 100%;
    height: 100%;
    }

    @media (min-width: 700px) {

        position: absolute;
        left: 100px;
        bottom: 0;
        width: clamp(32.6rem, 2vw, 65.6rem);
        height: clamp(21rem, 2vw, 41.2rem);
        
        margin-left: ${responsive(-160)};
        margin-top: ${responsive(-100)};
        
    }
`;