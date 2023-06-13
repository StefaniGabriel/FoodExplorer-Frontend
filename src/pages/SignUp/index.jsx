import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp(){
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("")

   console.log(email)
   const navigate = useNavigate();

   function handleSignUp(){
      if(!name || !email || !password){
         alert("Preencha todos os campos")
      }

      if(password ==! isNaN){
         alert("Preencha todos os campos")
      }
      

      
   }

   function handleBack(){
      navigate("/");
   }

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
            onChange={e => setName(e.target.value)}
            />
            
      </section>

      <section>
         <span>Email</span>
         <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
            />
      </section>

      <section>
         <span>Senha</span>
         <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="password"
            maxLength={6}
            onChange={e => setPassword(e.target.value)}
            />
            
      </section>

      <Button
      title="Criar conta"
      onClick={handleSignUp}
      />

      <ButtonLink
      onClick={handleBack}
      title="Já tenho uma conta"
      />
      
      
      </Form>
     
    </Container>
 )
}