import { Container, Image } from "./styles";
import { Header } from "../../components/Header";

import { ProductDisplay } from "../../components/ProductDisplay";

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

                <ProductDisplay/>
                 
            </div>
        
          
        </Container>
    )
}
