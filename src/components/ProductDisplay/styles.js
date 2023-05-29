import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    .carousel-product{
        display: flex;
        flex-direction: row;
        gap: ${responsive(12)};
      
        overflow-x: auto; 
        scroll-behavior: smooth;
    }

   


`;

