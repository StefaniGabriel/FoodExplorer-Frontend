import { Container, Section } from "./styles";

import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { useNavigate } from "react-router-dom";

export function ErrorSign(){
   const navigate = useNavigate();

   function goToHome(){
      navigate("/");
   }

   function goToCreateAccount(){
      navigate("/create");
   }


 return(
    <Container>
      <div className="title" >
         <img src="../src/assets/Polygon 1.png" />
         <h1>food explorer</h1>
      </div>

      <Section>
         <h2>Ops...</h2>
         <p>
         Não foi possível confirmar seus dados! <br /> Você pode criar uma conta ou redefinir <br /> sua senha, para redefinir sua senha, envie um <br /> e-mail para lucas.tec@protonmail.com
         </p>
    <Button
      title="Tentar novamente"
      onClick={goToHome}
      />

      <ButtonLink
      title="Criar uma conta"
      onClick={goToCreateAccount}
      />
      
      </Section>

  
      
    
     
    </Container>
 )
}