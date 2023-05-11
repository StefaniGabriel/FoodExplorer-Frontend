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
         <p>
         Não foi possível confirmar seus dados! <br /> Você pode criar uma conta ou redefinir <br /> sua senha, para redefinir sua senha, envie um <br /> e-mail para lucas.tec@protonmail.com
         </p>
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