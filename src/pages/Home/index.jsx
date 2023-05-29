import { Container, Image } from "./styles";
import { Header } from "../../components/Header";

import { ProductDisplay } from "../../components/ProductDisplay";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home(){
   

    useEffect(() => {

    }, [])


    return(
        <Container>
            <Header/>

        
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
