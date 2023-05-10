import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

export function SignIn(){
 return(
    <Container>
      <div className="title" >
         <img src="../../assets/Polygon 1.svg" />
         <h1>food explorer</h1>
      </div>

      <Form>
      <h2>Faça login</h2>
      <section>
         <span>Email</span>
         <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            />
      </section>

      <section>
         <span>Senha</span>
         <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="password"
            />
      </section>

      <Button
      title="Entrar"
      />

      <ButtonLink
      title="Criar uma conta"
      />
      
      
      </Form>
     
    </Container>
 )
}