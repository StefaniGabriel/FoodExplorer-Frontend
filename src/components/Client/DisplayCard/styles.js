import { styled } from "styled-components";
import responsive from "../../../styles/responsive";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    padding: ${responsive(18)};
    padding-left: 0;
    

    .order{
        display: flex;
        flex-direction: row;
        gap: ${responsive(12)};
        align-items: center;
    
        color : ${({ theme }) => theme.COLORS.WHITE700};

   
        .order-price {
            color: ${({ theme }) => theme.COLORS.GRAY800};
            font-size: ${responsive(12)};
            margin-left: ${responsive(8)};
        }

        .order-name {
            font-family: 'Poppins', sans-serif;
            font-size: ${responsive(18)};
            font-weight: 500;
        }

        .order-image {
       
       img {
        width: ${responsive(72)};
        height: ${responsive(72)};
        border-radius: 50%;
       }

        }
    }
   

    .btn-remove{
    color: ${({ theme }) => theme.COLORS.RED700};
    font-size: ${responsive(12)};
    
   }
  

`;