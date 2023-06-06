import { Container } from "./styles";


export function Footer(){
    return(
        <Container>
            <footer>
            <div className="footer-content">
            <img src="../src/assets/Polygon-gray.png" alt="" />
            <span className="footer-name">food explorer</span>
            </div>
            <span className="footer-rights">© 2023 - Todos os direitos reservados.</span>

            </footer>
        </Container>
    )
}