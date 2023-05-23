import { Container, Menu } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi'


export function Header(){
    return(
        <Container>
      
            <Menu>
                <FaBars size={24}/>
            </Menu>

            <div className="title" >
         
            <img src="../src/assets/Polygon 1.png" />
            <h1>food explorer</h1>
            <span>Admin</span>
            </div>



        </Container>
    )

}