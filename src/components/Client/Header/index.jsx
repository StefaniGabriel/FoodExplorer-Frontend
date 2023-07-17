import { Container, InputSearch } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';


import list from "../../../assets/icon/list.svg"
import logo from "../../../assets/logo/logo.svg"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

export function Header({ children }){
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
        

            <button 
            className="new-order"
            >
            <img src={list} />
            Pedido (0)
                
            </button>

            <div 
            className="list-mobile">
            <img src={list} />
            <span id="number-order">0</span>
                
            </div>

            <FiLogOut className="FiLogOut" 
            onClick={handleLogout}/>

        </Container>
    )

}