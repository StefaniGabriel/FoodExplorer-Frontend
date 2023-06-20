import { useEffect, useState } from "react";
import { api } from "../services/api";

function useProduct() {
  const [product, setProduct] = useState(null)



  async function createProduct({ name, description, price, category, image }) {

    try{
      const response = await api.post('/product', {
        name: name,
        category: category,
        description: description,
        prices: price,
         
      });

      updatedImage({id: response.data.id, image: image});

      const data =  await response.json();
    
      setProduct([...product, data]);
    }
    catch(error){
      alert(error.response.data.message);
    }
  }

    async function updatedImage(id, image) {
        const response = await api.patch(`/product/id=${id}`, {
            image
        });
        const data = await response.json();
        setProduct([...product, data]);
    }

    async function deleteProduct(id){
        await api.delete(`/product/${id}`);
        const newProduct = product.filter((product) => product.id !== id);
        setProduct(newProduct);
    }

    async function updateProduct({ id, name, description, price, category, image }) {
        const response = await api.put(`/product/${id}`, {
            name,
            description,
            price,
            category,
            image
        });
        const data = await response.json();
        setProduct([...product, data]);
    }

    async function imageProduct({ id, image }) {
        const response = await api.patch(`/product/${id}`, {
            image
        });
        const data = await response.json();
        setProduct([...product, data]);
    }

    return {
        product,
        createProduct,
        deleteProduct,
        updateProduct,
        updatedImage

    }
 
}

export { useProduct }