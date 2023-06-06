import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { Input } from "../../components/Input";
import { Container, Content} from "./styles";
import { ButtonLink } from "../../components/ButtonLink";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { Header } from '../../components/Header';
import { useEffect } from 'react';
import { api } from '../../services/api';
import { ProductDisplay } from '../../components/ProductDisplay';
import { ProductItems } from '../../components/ProductItems';


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
        }

    });

    function goHome(){
        navigate('/admin');
    }

    
    function handleLogout(){
        signOut();
        navigate("/");
    }


    useEffect(() => {
        async function fetchProduct(){
            const response = await api.get(`/product?title=${search}?ingredients=${search}`);
           
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

            <ButtonLink onClick={handleLogout} title="Sair" />

            <div className='border'></div>

                    
          </Content>

          <div className='search-result'>
            { 
            productFilter.map((product) => {
                return (
                    <ProductItems
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    />
                   
                    
                )
            })
            }
      </div>
      

        </Container>
    )
}