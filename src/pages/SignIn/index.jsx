import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";

import logo from "../../assets/logo/logo.svg";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SingIn(){
   const { signIn } = useAuth();
   

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("")

   const navigate = useNavigate();

   function handleGoCreate(){
      navigate("/create");
   };

   function validateLogin(){
      if(!email || !password){
         return alert("Preencha todos os campos!")
       }
       if((email.search("@")==-1)){
          return alert("E-mail informado inválido!")
       }
   };

   async function handleSignUp(){

      validateLogin();

      try{
         const response = await signIn({
            email,
            password,
         });

         
         const userType =response.data.user.type;


         if(userType === "client"){
            navigate("/client");
         }else if(userType === "admin"){
            navigate("/admin");
         }else{
            navigate("/error");
         }


           

      }catch(error){
         if(error.response){
            navigate("/error");
         }
      };
    
   };

 return(
    <Container>
      <div className="title" >
         <img src={logo} />
         <h1>food explorer</h1>
      </div>

      <Form>
      <h2>Faça login</h2>
      <section>
         <span>Email</span>
         <Input
            placeholder="nome@email.com"
            type="text"
            
            onChange={e => setEmail(e.target.value)}
            />
      </section>

      <section>
         <span>Senha</span>
         <Input
            placeholder="Digite sua senha"
            type="password"
            maxLength={6}
            onChange={e => setPassword(e.target.value)}
            />
      </section>

      <Button
      title="Entrar"
      onClick={handleSignUp}
      />

      <ButtonLink
      onClick={handleGoCreate}
      title="Criar uma conta"
      />

      
      
      
      </Form>
     
    </Container>
 )
}