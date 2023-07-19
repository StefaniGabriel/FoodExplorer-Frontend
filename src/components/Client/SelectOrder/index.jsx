import { useContext, useState } from "react";
import { Container } from "./styles";

import { Button } from "../../Button";
import { ButtonLink } from "../../ButtonLink";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Header } from "../Header";
import { OrderContext } from "../../../Provider";



    export function SelectOrder({product, titleButton, icon}){
    const [selectValue, setSelectValue] = useState(0);
    const [order, setOrder] = useState([]);
    
    const { quantity, updateQuantity } = useContext(OrderContext);


    function handleSelectValue(value){
        

        if(value === 0){
            setSelectValue(0);
        }if(value < 0){
            setSelectValue(0);
        }
        else{
          
            setSelectValue(value);
        }

    }

    function handleOrder(){
        const newOrder = {
            id: product.id,
          
        }

        setOrder([...order, newOrder]);
    }

    function addOrder(){
        handleOrder();

        updateQuantity(quantity + selectValue);

        setSelectValue(0);

    }

   
 return(
        <Container>
                <div 
                className="select-order"
                >
                <span className="select" >
                    <ButtonLink
                    title={<FiMinus/>}
                    onClick={() => handleSelectValue(selectValue - 1)}
                    />
                    <p id="select-value">
                        {selectValue}
                    </p>
                    <ButtonLink
                    onClick={() => handleSelectValue(selectValue + 1)}
                    title={<FiPlus/>} />
                </span>
                <button 
                className="new-order"
                onClick={addOrder}
                >
                {
                    icon ?  <img src={icon} /> : null
                }
                {titleButton}
                
                    
                </button>

                </div>
              
        </Container>
 )


};




