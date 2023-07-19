import { useState } from "react";
import { Container } from "./styles";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";

export function Favorite({product}){

    const [favorite, setFavorite] = useState(false);

    function handleFavorite(product) {
        const favoriteProduct = product.id;
        
        const isFavorite = favoriteProduct === favorite.id;
        
        if (isFavorite) {
          removeFavorite(favoriteProduct);
        } else {
          addFavorite(favoriteProduct);
         
        }
      }
      
      function addFavorite(productId) {
        const newFavorite = {
            id: productId
        }   
        setFavorite(newFavorite);
      }
      
      function removeFavorite(productId) {
        const removedFavorite = {
            id: productId
        }
        setFavorite('')
      }
      
    return(
        <Container>
             <span className="icons-container"  id="favorite"
                                                onClick={() => handleFavorite(product)}
                                                >
                                                   {
                                                    favorite ? <VscHeartFilled /> : <VscHeart />
                                                   }
                                                </span>
        </Container>
    )
}

