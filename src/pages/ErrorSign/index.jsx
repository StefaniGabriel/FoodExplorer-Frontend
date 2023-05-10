import { Container, Section } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

export function ErrorSign(){
 return(
    <Container>
      <div className="title" >
         <img src="../../assets/Polygon 1.svg" />
         <h1>food explorer</h1>
      </div>

      <Section>
         <h2>Ops</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugit reprehenderit laboriosam fugiat vel. Voluptatem earum libero quam, debitis repudiandae molestias distinctio accusantium enim aliquid, natus cupiditate itaque harum sapiente!</p>
    <Button
      title="Tentar novamente"
      />

      <ButtonLink
      title="Criar uma conta"
      />
      
      </Section>

  
      
    
     
    </Container>
 )
}