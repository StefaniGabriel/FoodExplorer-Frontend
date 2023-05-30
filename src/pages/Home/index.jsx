import { Container, Image } from "./styles";
import { Header } from "../../components/Header";

import { FiSearch } from 'react-icons/fi';

import { ProductDisplay } from "../../components/ProductDisplay";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

export function Home(){
    const navigate = useNavigate();

    const [search, setSearch] = useState('');


    useEffect(() => {
        const token = localStorage.getItem('@Foodexplorer:token');
        const user = localStorage.getItem('@Foodexplorer:user');

        if(!token && !user) {
            navigate('/');
        }



    }, []);

    useEffect(() => {
        async function fetchMovies(){
            const response = await api.get(`/product?title=${search}?category=${search}?ingredients=${search}`);
           
            setMovies(response.data);
            
        }
       
  
        fetchMovies();
  
    },[search]);

    




    return(
        <Container>
            <Header>
            <Input 
            className="search"
            placeholder="Pesquisar pelo título"
            type="search"
            icon={FiSearch}
            onChange={(e) => setSearch(e.target.value)}
            />
            </Header>

        
            <div className="banner">
               <Image/> 
                <section className="banner-text">
                <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              

                </section>
            </div>

            <Section title="Refeições">
                <ProductDisplay />
               
            </Section>

            <Section title="Sobremesas">
                <ProductDisplay />
            </Section>

              <Section title="Bebidas">
                <ProductDisplay />
            </Section>

         <Footer/>

    
          
        </Container>
    )
}
