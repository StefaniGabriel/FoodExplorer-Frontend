import { Container } from "./styles";
import { ButtonLink } from "../../ButtonLink";

export function DisplayCard() {
  return (
    <Container>
      
          <div className="order">
          <div className="order-image">
                <img src="https://avatars.githubusercontent.com/u/111387502?v=4" alt="" />
            </div>
            <div className="order-infos">
                <div className="order-details">
                <span className="order-name">1x Salada Radish</span>
                <span  className="order-price">R$ 20,00</span>
                </div>
               
                <ButtonLink 
                title="Excluir"
                className="btn-remove"
                />
            
              
            </div>
         
           
            
           

        </div>

    </Container>
  )
}