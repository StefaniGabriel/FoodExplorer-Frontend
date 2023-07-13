import { Container } from "./styles";
import logoGray from "../../assets/logo/logoGray.svg"

export function Footer(){
    return(
        <Container>
            <footer>
            <div className="footer-content">
            <img src={logoGray} alt="" />
            <span className="footer-name">food explorer</span>
            </div>
            <span className="footer-rights">© 2023 - Todos os direitos reservados.</span>

            </footer>
        </Container>
    )
}