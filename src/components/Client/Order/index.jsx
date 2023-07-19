import { Container } from "./styles";

import list from "../../../assets/icon/list.svg";

export function Order({numberOrder}){
  
    return(
        <Container>
             <button 
            className="new-order"
            >
            <img src={list} />
            Pedido ({numberOrder})
                
            </button>

            <div 
            className="list-mobile">
            <img src={list} />
            <span id="number-order">{numberOrder}</span>
                
            </div>
        </Container>
    )
};

