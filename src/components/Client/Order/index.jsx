import { Container } from "./styles";

import list from "../../../assets/icon/list.svg";
import { useNavigate } from "react-router-dom";

export function Order({numberOrder}){

    const navigate = useNavigate();

    function goCart(){
        navigate("/client/cart");
    }
  
    return(
        <Container>
             <button 
            className="new-order"
            onClick={goCart}
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

