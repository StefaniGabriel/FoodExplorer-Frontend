import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

export function SignUp(){
 return(
    <Container>
      <div className="title" >
         <img src="../../assets/Polygon 1.svg" />
         <h1>food explorer</h1>
      </div>

      <Form>
      <h2>Crie sua conta</h2>

      <section>
         <span>Nome</span>
         <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            />
      </section>

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
      title="Criar conta"
      />

      <ButtonLink
      title="Já tenho uma conta"
      />
      
      
      </Form>
     
    </Container>
 )
}