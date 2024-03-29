import { Container, InputSearch } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';
import { Button } from "../../Button";


import logo from "../../../assets/logo/logo.svg"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";

export function Header({ children }){
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function goNewProduct(){
        navigate('/admin/new');
    }

    function goMenu(){
        navigate("/admin/menu");
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
            <span>admin</span>
            </div>

            </div>

           
            <InputSearch>
            
            {children}
            </InputSearch>
        

            <Button
            className="newProduct"
            title={"Novo produto"}
            onClick={goNewProduct}
            />

            <FiLogOut className="FiLogOut" 
            onClick={handleLogout}/>

        </Container>
    )

}