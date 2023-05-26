import { Container } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { Input } from "../Input";
import { Button } from "../Button";

export function Header(){

    return(
        <Container>

            <FaBars className="FaBars" />  
    
            <div className="logo" >
            <img src="../src/assets/Polygon 1.png" />

            <div className="logo-text">
            <h1>food explorer</h1>
          
          <span>admin</span>
            </div>
            </div>

            <Input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            icon={FiSearch}
            />

            <Button
            className="newProduct"
            title={"Novo prato"}
            
            />

            <FiLogOut className="FiLogOut" />

        </Container>
    )

}