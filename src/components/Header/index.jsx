import { Container } from "./styles";
import { FaBars } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi'


export function Header(){
    return(
        <Container>
      
            <FaBars />

            <div className="title" >
         
            <img src="../src/assets/Polygon 1.png" />
            <h1>food explorer</h1>
            <span>Admin</span>
            </div>



        </Container>
    )

}