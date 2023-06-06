import { Container, InputSearch } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiLogOut} from 'react-icons/fi';
import { Button } from "../Button";


import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Header({ children }){
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function goNewProduct(){
        navigate("/new")
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
            <img src="../src/assets/Polygon 1.png" />

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
            title={"Novo prato"}
            onClick={goNewProduct}
            />

            <FiLogOut className="FiLogOut" 
            onClick={handleLogout}/>

        </Container>
    )

}