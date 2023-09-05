import { Container } from "./styles";
import { ButtonLink } from "../../ButtonLink";
import { OrderContext } from "../../../Provider";
import { api } from "../../../services/api";
import { useState, useEffect, useContext } from "react";


export function DisplayCard() {
  const { cart } = useContext(OrderContext);
  
  const [data, setData] = useState([]);

  const products = cart.map((item) => item.id);
  console.log(products);
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await api.get("/product");
      setData(data);
    }
    getProduct();
  }, []);

  return (
    <Container>
      
         {
          data.map((item, index) => {
            
            const { id, name, prices, image } = item;
            const ImageUrl = image ? `${api.defaults.baseURL}/files/${image}` : null;          
              return (
              <div className="order" key={index}>
              <div className="order-image">
                    <img src={ImageUrl} />
                </div>
                <div className="order-infos">
                    <div className="order-details">
                    <span className="order-name">1x {name}</span>
                    <span  className="order-price">R$ {prices}</span>
                    </div>
                   
                    <ButtonLink 
                    title="Excluir"
                    className="btn-remove"
                    />
                
                  
                </div>
            
            </div>
            )
          })
         }

    </Container>
  )
}