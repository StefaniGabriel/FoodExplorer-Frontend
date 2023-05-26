import { Container } from "./styles";

const ProductDisplay = () => {
    return (
        <Container>
        
        <div className="infosProduct">
        <img src="../../assets/Card.svg" alt="" />
        <p>Salada Ravanello </p>
        <span>R$ 49,97</span>
        </div>
        </Container>
    );
}

module.exports = ProductDisplay;