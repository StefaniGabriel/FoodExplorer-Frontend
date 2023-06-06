import { FaChevronRight} from "react-icons/fa";

import { Container} from "./styles";



export function ProductItems(product){
    const {id, name, description, prices, image} = product;

    return (
        <Container>

           <div className="preview-product" key={id}>
        
                   <div className="product-title">
                   <img src={image} />
                    <span className="name-product">{name}</span>
                   </div>
                    <FaChevronRight className="icon" />
            </div>
       
      
        </Container>
    )
}

