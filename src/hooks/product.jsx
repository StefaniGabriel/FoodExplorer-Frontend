import { useEffect, useState } from "react";
import { api } from "../services/api";

function useProduct() {
  const [product, setProduct] = useState("")



  async function createProduct({ name, category, description,ingredients, price }) {

    try{
      const response = await api.post('/product', {
        name: name,
        category: category,
        description: description,
        ingredients: ingredients,
        prices: price,
      });

    
      
      setProduct([...product, data]);
      
      return data;
    }
    catch(error){
      alert(console.log(error));
    }
  }


    async function imageUpload({ id, image }) {
        const formData = new FormData();
        formData.append("image", image);

        
        const response = await api.patch(`/product/image/${id}`, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: image,
        });

        product.image = response.data.image;
      

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



    return {
        product,
        createProduct,
        deleteProduct,
        updateProduct,
      imageUpload

    }
 
}

export { useProduct }