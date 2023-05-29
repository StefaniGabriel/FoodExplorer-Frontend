import { Container, Image } from "./styles";
import { Header } from "../../components/Header";

import { ProductDisplay } from "../../components/ProductDisplay";
import { Section } from "../../components/Section";

export function Home(){
    return(
        <Container>
            <Header/>

        
            <div className="banner">
               <Image/> 
                <section>
                <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              

                </section>
            </div>

            <Section title="Refeições">

            </Section>

         


    
          
        </Container>
    )
}
