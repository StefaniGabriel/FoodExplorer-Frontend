import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo/logo.svg"

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api"

export function SignUp(){
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { signIn } = useAuth();

   const navigate = useNavigate();

   function handleErrorSignUp(){
      if(!name || !email || !password){
         alert("Preencha todos os campos")
      }

      if((email.search("@")==-1)){
         return alert("E-mail informado inválido!")
      }

      if(password ==! isNaN){
         alert("Somente Números!")
      }

      if(password.length < 6){
         alert("Senha deve ter 6 caracteres!")
      }


      
   }

   function handleSignUp(){
      handleErrorSignUp();

      api.post("/users", { 
         name,
         email,
         password,
         type: "client"
      })
      .then(() => {
          alert("Usuário cadrastrado com sucesso!");
          
         signIn({ email, password });
     

      })
      .catch(error => {
          if(error.response){
              alert(error.response.data.message);
             
              alert("Não foi possível cadastrar");
          }
      });

   
   }

   function handleBack(){
      navigate("/");
   }

 return(
    <Container>
      <div className="title" >
         <img src={logo} 
         className="logo"
         />
         <h2>food explorer</h2>
      </div>

      <Form>
      
      <h2>Crie sua conta</h2>

      <section>
         <span>Nome</span>
         <Input
            placeholder="Nome completo"
            type="text"
            onChange={e => setName(e.target.value)}
            />
            
      </section>

      <section>
         <span>Email</span>
         <Input
            placeholder="nome@exemplo.com.br"
            type="text"
            onChange={e => setEmail(e.target.value)}
            />
      </section>

      <section>
         <span>Senha</span>
         <Input
            placeholder="Somente 6 caracteres númericos"
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