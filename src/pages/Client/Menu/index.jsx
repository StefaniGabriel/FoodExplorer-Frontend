import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { Input } from "../../../components/Input";
import { Container, Content, ProductSearch} from "./styles";
import { ButtonLink } from "../../../components/ButtonLink";
import { Button } from "../../../components/Button";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';

import { useEffect } from 'react';
import { api } from '../../../services/api';
import { FaChevronRight } from 'react-icons/fa';


export function Menu(){
    const { signOut } = useAuth();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [product, setProduct] = useState([]);

    const productFilter = product.filter((product) => {
        const { name, ingredients} = product;
        String.prototype.includes = function(search, start) {
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
        
        if(search === ""){
            return null;
        }else if(String(name).toLowerCase().includes(search.toLowerCase())){
            return product;

        }else if(String(ingredients.name).toLowerCase().includes(search.toLowerCase())){
            return product;
        };

    });

    function goHome(){
        navigate(-1);
    }

    
    function handleLogout(){
        signOut();
        navigate("/");
    }

    function handleNavigateToProduct(id){
        navigate(`/admin/details/${id}`);
    }

   


    useEffect(() => {
        async function fetchProduct(){
            const response = await api.get(`/product`);
           
            setProduct(response.data);
            
        }
       
  
        fetchProduct();
     
    },[search]);

    


   

    return(
        <Container>
            
         <header>
         <div className='menu-whapper'>
                <AiOutlineClose onClick={goHome} />
                <p>Menu</p>
            </div>
         </header>

          <Content>
          <Input 
          
            placeholder="Busque por pratos ou ingredientes"
            type="search"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
            />
  
        
            <ButtonLink
            className="button-logout"
            onClick={handleLogout} title="Sair" />

            <div className='border'></div>

                    
          </Content>

         


          <div className='search-result'>
            { 
            productFilter.map((product) => {
                const ImageUrl = product.image ? `${api.defaults.baseURL}/files/${product.image}` : null;
                const { id, name} = product;

                return (
                <ProductSearch>
                        <div className="preview-product" key={id}>
        
                            <div className="product-title">
                            <img src={ImageUrl} />
                            <span className="name-product">{name}</span>
                            </div>
                            <FaChevronRight 
                            onClick={() => handleNavigateToProduct(id)}
                            className="icon" />
                    </div>
                                    </ProductSearch>
                    
                )
            })
            }
      </div>
      

        </Container>
    )
}