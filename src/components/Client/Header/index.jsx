import { Container, InputSearch } from "./styles";

import React, { useContext } from 'react';

import { FaBars } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';

import logo from "../../../assets/logo/logo.svg"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

import { Order } from "../Order";



export function Header({ children}){

    const { quantity } = useContext(OrderContext);

    
    const { signOut } = useAuth();
    const navigate = useNavigate();


    function goMenu(){
        navigate("/client/menu");
    }


    function handleLogout(){
        signOut();
        navigate("/");
    }

 
    return(
        <Container>

            <FaBars className="FaBars" onClick={goMenu} />
    
            <div className="logo" >
            <img src={logo} />

            <div className="logo-text">
            <h1>food explorer</h1>
          
            </div>

            </div>

            <InputSearch>
            {children}
            </InputSearch>

            <Order
            numberOrder={quantity}
            
            />

            <FiLogOut className="FiLogOut" 
            onClick={handleLogout}/>

        </Container>
    )

}