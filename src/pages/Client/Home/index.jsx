import { Container, Image } from "./styles";
import { Header } from "../../../components/Client/Header";

import { FiSearch} from 'react-icons/fi';

import { ProductDisplay } from "../../../components/Client/ProductDisplay"
import { ButtonLink } from "../../../components/ButtonLink";

import { Footer } from "../../../components/Footer"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components/Input";


export function Home(){
    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('@Foodexplorer:token');
        const user = localStorage.getItem('@Foodexplorer:user');

        if(!token && !user) {
            navigate('/');
        }


        console.log(user);

    }, []);

    
 



    return(
        <Container>
            <Header>
           
            <Input 
            className="search"
            placeholder="Busque por pratos ou ingredientes"
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

            <ProductDisplay
            search={search}
            />

         <Footer/>

    
          
        </Container>
    )
}
