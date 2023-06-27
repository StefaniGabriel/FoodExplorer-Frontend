import { styled } from "styled-components";
import responsive from "../../styles/responsive";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .loading {
        margin: 0 auto;
        margin-top: ${responsive(50)};
        margin-bottom: ${responsive(150)};

        h1 {
            color: ${({ theme }) => theme.COLORS.GRAY900};
            font-weight: 500;
        }
    }
    

    .carousel-product {
        display: flex;
        flex-direction: row;
        gap: ${responsive(12)};
        
        overflow-x: scroll; 
        scroll-behavior: smooth;
    
    }

    ::-webkit-scrollbar {
        display: none;
    }


    .preview-product {
       
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: ${responsive(12)};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK900};
        width: ${responsive(180)};
        height: ${responsive(220)};

        border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_BLACK800};
        border-radius: 0.8rem;  
        flex: none;

    }

    .name-product{
        display: flex;
        align-items: center;
        font-size: clamp(1rem, 2vw, 1.4rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};

    }
  
    .price-product {
        font-family: Poppins , sans-serif;
        font-size: ${responsive(16)};
        color: ${({ theme }) => theme.COLORS.BLUE600};
    }

    .description-product{
        display: none;
    }

    img {
        margin-left: ${responsive(10)};
        width: clamp(4.4rem, 10vw, 8.8rem);
        height: clamp(4.4rem, 10vw, 8.8rem);
        border-radius: 50%;
        object-fit: cover;
    }

    .buttonRight {
            display: none;
        }

    .buttonLeft {
            display: none;
        }

   

    @media (min-width: 700px) {
        .carousel-product {
            margin: 0 ${responsive(100)};

            
        
        }
      
        .preview-product {
        position: relative;
        height: ${responsive(350)};
        width: ${responsive(230)};
        gap: ${responsive(15)};

        padding: ${responsive(20)};

        }

        .description-product{
            display: block;
            font-size: clamp(0.6rem,0.6rem + 2vw, 0.8rem);
            color: ${({ theme }) => theme.COLORS.GRAY800};

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .name-product {
            font-size: clamp(0.8rem, 2vw, 1.6rem);
            font-weight: 700;

            svg{
                font-size: 0.8rem;
                
            }
        }

        .price-product {
            font-size: clamp(1rem, 2vw, 1.6rem);
            
        }
    
        .buttonRight {
            position: absolute;
            z-index: 1;

            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            transform: matrix(-1, 0, 0, 1, 0, 0);
            
            display: flex;
          
            width: 19rem;
            height: 26rem;;

            button {
                background-color: transparent;
                border: none;
                align-self: center;
                    
                margin-left: ${responsive(200)};

                &:hover {
                    opacity: 0.5;
                }
            }

            svg{
                z-index: 2;
                color: ${({ theme }) => theme.COLORS.WHITE900};
                font-size: 3.5rem;

            }
         
        }

        .buttonLeft {
            position: absolute;

            z-index: 1;

            background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            
            display: flex;
            margin-left: ${responsive(760)};
           
            width: 19rem;
            height: 26rem;;
            
            button {
                background-color: transparent;
                border: none;
                align-self: center;
                margin-left: ${responsive(130)};
              

                &:hover {
                    opacity: 0.5;
                }
            }

            svg{
                z-index: 2;
               
                color: ${({ theme }) => theme.COLORS.WHITE900};
                font-size: 3.5rem;

            }

         
        }}

        .hidden {
            display: none;
            }

   


`;

export const Product = styled.div``;

export const PenIcon = styled.span`
    position: relative;
    margin-top: ${responsive(16)};
    margin-left: ${responsive(130)};

    svg {
        width: clamp(1.2rem, 2vw, 2.4rem);
        height: clamp(1.2rem, 2vw, 2.4rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};
        margin-right: ${responsive(10)};
    }


    @media (min-width: 700px) {
        margin-left: ${responsive(170)};
    }

`;
