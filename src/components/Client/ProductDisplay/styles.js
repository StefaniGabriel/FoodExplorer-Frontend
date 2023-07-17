import { styled } from "styled-components";
import responsive from "../../../styles/responsive";


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
        gap: ${responsive(8)};

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK900};
        width: ${responsive(180)};
        height: ${responsive(260)};

        border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_BLACK800};
        border-radius: 0.8rem;  
        flex: none;
        flex-shrink: 0;
        padding: 0 ${responsive(24)} ${responsive(24)} ${responsive(24)};

    }

    .icons-container {
          margin-top: 16px;
          align-self: self-end;
          

            svg {
                font-size: clamp(1.2rem, 2vw, 1.6rem);
                color: ${({ theme }) => theme.COLORS.WHITE700};
                &:hover {
                    opacity: 0.5;
                }
            }
        }

        .name-container{
            display: flex;
            align-items: center;
            justify-content: space-between;

            
            svg{
                color: ${({ theme }) => theme.COLORS.WHITE700};
                font-size: clampq(1.2rem, 2vw, 1.6rem);
                margin-top: 0.3rem;
            }
        }


    .name-product{
        display: flex;
        align-items: center;
        font-size: clamp(1rem, 2vw, 1.4rem);
        color: ${({ theme }) => theme.COLORS.WHITE700};

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;


    }
  
    .price-product {
       
        font-size: clamp(1.2rem, 2vw, 1.6rem);
        font-weight: 400;
        
        color: ${({ theme }) => theme.COLORS.BLUE600};
    }

    .description-product{
        display: none;
    }

    img {
        width: clamp(4.4rem, 10vw, 8.8rem);
        height: clamp(4.4rem, 10vw, 8.8rem);
        border-radius: 50%;
        object-fit: cover;
    }

    .select-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${responsive(10)};

   

        .select {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: ${responsive(10)};
        }

        #select-value{
            color: ${({ theme }) => theme.COLORS.WHITE900};
            font-size: clamp(1rem, 2vw, 1.4rem);
            font-weight: 400;
        }

        #add-button{
            height: ${responsive(40)};
        }

        svg {
            font-size: clamp(1.2rem, 2vw, 1.6rem);
        }

       
    }

    .carousel-buttons {
        display: none;
    }
   

    @media (min-width: 700px) {
        .carousel-product {
            margin: 0 ${responsive(100)};

            
        
        }
      
        .preview-product {
        height: ${responsive(350)};
        width: ${responsive(230)};
        gap: ${responsive(10)};

        padding: 0 ${responsive(20)};


        }

        .select-container{
            flex-direction: row;
        }


        .description-product{
            display: block;
            font-size: clamp(0.6rem,0.6rem + 2vw, 0.8rem);
            color: ${({ theme }) => theme.COLORS.GRAY800};

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient: vertical;
        }

    

        .name-product {
            font-size: clamp(0.8rem, 2vw, 1.6rem);
            font-weight: 700;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;

        }

        .price-product {
            font-size: clamp(1rem, 2vw, 1.6rem);
            
        }

        .carousel-buttons {
        position: relative;
        
        }

        
    
        .carousel-next,
        .carousel-prev {
            position: absolute;
            top: 0;
            bottom: 0;
            right: auto;
            left: 0;
            z-index: 1;

            background: linear-gradient(to left, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            display: flex;

            width: ${responsive(300)};

            button {
                position: absolute;
                background-color: transparent;
                border: none;
                align-self: center;
            
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

        .carousel-prev  {
            position: absolute;
            left: 870px;
           
            background: linear-gradient(to right, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
            
            svg {
                margin-left: ${responsive(120)};
            }
        }}

        .carousel-next{
            svg{
                margin-left: ${responsive(20)};
            }

        }

        .hidden {
            display: none;
            }

      

`;

export const Product = styled.div``;


