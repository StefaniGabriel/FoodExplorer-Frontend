import { useEffect, useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiPlus, FiMinus} from "react-icons/fi";


import { Container, Product} from "./styles";
import { Section } from "../../Section";

import { api } from "../../../services/api";

import { useNavigate } from "react-router-dom";

import { Favorite } from "../Favorite";
import { SelectOrder } from "../SelectOrder";

export function ProductDisplay({search}){
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    
    const carouselRef = useRef(null);

    const categories = data.map(product => product.category);
    const uniqueCategories = [...new Set(categories)];
   
    const navigate = useNavigate();


    const categoryFilter = data.filter((product) => {

        if(selectedCategory === ''){
            return product;
        }else if(product.category === selectedCategory){
        }

        
    });

    const showButton = (category) => {
        const categoryCounts = categoryFilter.reduce((counts, product) => {
          const { category } = product;
          counts[category] = (counts[category] || 0) + 1;
          return counts;
        }, {});
      
        return categoryCounts[category] > 3;
      };

    
    function handleNextClick(category) {
        const prod = categoryFilter.filter((product) => product.category === category);
        const prodLength = prod.length;
        const carouselWidth = carouselRef.current.offsetWidth;
        const scrollWidth = carouselRef.current.scrollWidth;
        const scrollLeft = carouselRef.current.scrollLeft;
        const maxScroll = scrollWidth - carouselWidth;
        const itemWidth = scrollWidth / prodLength;
        const nextItem = Math.round((scrollLeft + itemWidth) / itemWidth) * itemWidth;
        
        if (scrollLeft < maxScroll) {
            carouselRef.current.scrollLeft = nextItem;
        }



    }

    function handlePrevClick(category) {
        const prod = categoryFilter.filter((product) => product.category === category);
        const prodLength = prod.length;
        const scrollLeft = carouselRef.current.scrollLeft;
        const itemWidth = scrollLeft / prodLength;
        const prevItem = Math.round((scrollLeft - itemWidth) / itemWidth) * itemWidth;

        if (scrollLeft > 0) {
            carouselRef.current.scrollLeft = prevItem;
        }


    }

    function GoDetails(product){
        navigate(`/client/details/${product.id}`)
    }


    useEffect(() => {
        async function fetchProduct(){
            const response = await api.get(`/product?name=${search}?ingredients=${search}`);
           
            setData(response.data);
            
        }
       
        console.log(data);
        fetchProduct();
     
    },[search]);




    return (
        <Container>
          

        {   data.length === 0 ?
            <div className="loading">
                <h1>Ainda não há produtos cadrastrado</h1>
            
              
            </div>
            :
          
            <section>

            {
                uniqueCategories.map((category, index) => {
                    const toUpperCategory = category.charAt(0).toUpperCase() + category.slice(1);
                   
                    return (
                        <Product key={index}>
                        <Section title={toUpperCategory} />
                        <div className="carousel-product"  ref={carouselRef}>

                        <div
                        className="carousel-buttons"
                        >
                            <div className={`carousel-prev ${showButton(category) ? '' : 'hidden'}`}>
                                <button
                                 onClick={() => handleNextClick(category)}
                                
                                > <FiChevronRight /> </button>
                            </div>
                            <div className={`carousel-next ${showButton(category) ? '' : 'hidden'}`}>
                                <button
                                onClick={() => handlePrevClick(category)}
                                > <FiChevronLeft /> </button>
                            </div>
                           

                        </div>
                
                            {
                                categoryFilter.map((product, index) => {
                                    if(product.category === category){
                                        const toUpperName = product.name.charAt(0).toUpperCase() + product.name.slice(1);
                                        const toUpperDescription = product.description.charAt(0).toUpperCase() + product.description.slice(1);
                                        product.name = toUpperName;
                                        product.description = toUpperDescription;
                                        const ImageUrl = product.image ? `${api.defaults.baseURL}/files/${product.image}` : null;


                                        return (
                                            <div className="preview-product" 
                                            key={index}>
                                                <Favorite
                                                product={product}
                                                />
                                                <img src={ImageUrl} alt={product.name} />
                                                <div className="name-container"
                                                 onClick={() => GoDetails(product)}
                                                >
                                                    <span className="name-product"> {product.name} </span>
                                                    <FiChevronRight /> 
                                                            </div>
                                              
                                                <span className="description-product">{product.description}</span>
                                                <span className="price-product">R${product.prices}</span>

                                                <SelectOrder
                                                titleButton="Incluir"
                                                product={product}
                                               
                                                />
                                            </div>
                                        )
                                    } 
                                    
                                        
                                }
                                )
                }
                            
                        </div>
                        </Product>

                    )
               
                })
            }

            
        </section>
        }
          
        

 
           
      
      
        </Container>
    )
}

