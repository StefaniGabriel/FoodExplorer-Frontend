import { Container, InputSearch } from "./styles";

import { useContext } from 'react';

import { FaBars } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';

import logo from "../../../assets/logo/logo.svg"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

import { Order } from "../Order";

import { OrderContext } from "../../../Provider";


export function Header({ children}){

    const { quantity } = useContext(OrderContext);

    const { signOut } = useAuth();
    const navigate = useNavigate();


    function goMenu(){
        navigate("/client/menu");
    }

   function goHome(){
         navigate("/client")
    }

    function handleLogout(){
        signOut();
        navigate("/");
    }

 
    return(
        <Container>

            <FaBars className="FaBars" onClick={goMenu} />
    
            <div className="logo" 
            onClick={goHome}
            >
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