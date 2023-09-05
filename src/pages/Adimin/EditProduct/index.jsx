import { Container, Form } from "./styles";

import { FiChevronLeft, FiUpload, FiX } from 'react-icons/fi';

import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { NewTag } from "../../../components/NewTag";
import { Textarea } from "../../../components/Textarea";
import { Button } from "../../../components/Button";
import { ButtonLink } from "../../../components/ButtonLink";
import { Header } from "../../../components/Admin/Header";
import { Footer } from "../../../components/Footer";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";


export function EditProduct(){
    const params = useParams();
  
    const navigate = useNavigate();

    const [image, setImage] = useState('')
    const [fileImage, setFileImage] = useState('')
    const [name, setName] = useState('')

    const [category, setCategory] = useState('');
    const [prices, setPrices] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

   
  const loadProduct = () => {
    api.get(`/product/${params.id}`)
      .then((response) => {
        const res = response.data;
        setImage(res.image);
        setName(res.name);
        setCategory(res.category);
        setPrices(res.prices);
        setDescription(res.description);
        setIngredients(res.ingredients.map((ingredient) => {
            return ingredient.name;
        }));
        })
  };
  
  
  useEffect(() => {
    loadProduct();
  }, []);


 
    function handleBack(){
        navigate(-1);
    }

    function handleSelectImage(event){
        if(!event.target.files){
            return;
        }

        const selectedImage = event.target.files[0];
        const selectedImagePreview = URL.createObjectURL(selectedImage);

        setFileImage(selectedImagePreview);
    
        setImage(selectedImage);

    }


    function handleAddIngredient(){
        if(!newIngredient){
            return;
        }

        setIngredients([...ingredients,newIngredient]);

        setNewIngredient('');
    }

    function handleDeleteIngredient(index){
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    }
        
    function handleDataImage(image){
        const ImageUrl = image ? `${api.defaults.baseURL}/files/${image}` : null;
        return ImageUrl;
    }



    async function handleEditProduct(){

        const listIngredients = ingredients.map((ingredient) => {
          
            return ingredient
        })
  
        const data = new FormData();

        data.append('image', image);

        try{
            await api.put(`/product/${params.id}`, {
                name,
                category,
                prices,
                description,
                ingredients: listIngredients
              
    
            });

            if(fileImage){
                await api.patch(`/product/image/${params.id}`, data);
            }

            alert('Produto editado com sucesso!');
            navigate('/admin');
           
        } catch(err){
            alert('Erro ao editar produto, tente novamente.')
        }
      
    }

    function handleExcludeProduct(){
        api.delete(`/product/${params.id}`)
        .then(() => {
            confirm('Deseja excluir o produto?');
            alert('Produto excluído com sucesso!');
            navigate('/admin');
        })
        .catch(() => {
            alert('Erro ao excluir produto, tente novamente.')
        })
    }

 

    return(
       <Container>
        <Header />
        <main>
            
        <div className="back">
        <FiChevronLeft size={30} />
        <ButtonLink 
        onClick={handleBack}
        title="Voltar" />                   
        </div>
         
       <Form>
    
        <h2>Editar produto</h2>
       <div className="row-1">
             <div className="input-wrapper">
                <span className="input-name">Imagem do prato</span>
              {
                 fileImage ?  <div className="file-02">
                    <label htmlFor="image">
                        <span>
                            <img src={fileImage} alt={name} />
                          
                        </span>
                      
                             <p>   <FiX />  Selecione imagem para alterá-la</p>
                      
                    
                        <Input
                        id="image"
                        type="file"
                        className="input-image-product"
                        onChange={handleSelectImage}

                        />
                    </label>
                    </div> : 
                    <div className="file-02">
                    <label htmlFor="image">
                        <span>
                            <img src={handleDataImage(image)} alt={name} />
                          
                        </span>
                      
                             <p>   <FiX />  Selecione imagem para alterá-la</p>
                      
                    
                        <Input
                        id="image"
                        type="file"
                        className="input-image-product"
                        onChange={handleSelectImage}

                        />
                    </label>
                    </div> 


                  
                } 

                
           
        </div>

        <div className="input-wrapper">
            <span className="input-name">Nome do prato</span>
            <Input  
            type="text"
            className="input-name-product"
            placeholder="Insira o nome do prato"
            defaultValue={name}
            onChange={event => setName(event.target.value)}
          
            />
        </div>

        <div className="input-wrapper">
            <span className="input-name">Categoria do prato</span>
            <div className="input-category-product">
            <Select
                value={category}
                onChange={event => setCategory(event.target.value)}
                
               
            />
        </div>
            
        </div>

       </div>

       <div className="row-2">

         <div className="input-wrapper">
            <span className="input-name">Ingredientes</span>
       <div className="ingredients-wrapper">
   

                    {
                       
                   ingredients && ingredients.map((ingredient, index) => {
                      
                        return(
                            <NewTag 
                            key={index}
                            value={ingredient}
                            onClick={() => handleDeleteIngredient(index)}
                           
                            />
                        )

                       
                    }
                    
                    )
                    }

                    <NewTag
                    isNew
                    value={newIngredient}
                    onClick={handleAddIngredient}
                    placeholder='Adicionar'
                    onChange={event => setNewIngredient(event.target.value)}
                    />
                
                </div>
                </div>

            <div className="input-wrapper">
                    <span className="input-name">Preço</span>
                    <Input  
                    type="text"
                    className="input-price-product"
                    placeholder="R$ 00,00"
                    defaultValue={prices}
                    onChange={event => setPrices(event.target.value)}
                    />
            </div>

     </div>
         
                        <div className="input-wrapper">
                        <span className="input-name">Descrição</span>
                        <Textarea
                        type="text"
                        className="input-description-product"
                        placeholder="Insira uma descrição para o prato"
                        defaultValue={description}
                        onChange={event => setDescription(event.target.value)}
                        />
                    </div>
     

        <div className="button">
        
            <Button 
            className="button-exclude-product"
            title="Excluir produto"
            onClick={handleExcludeProduct}
            />

            <Button
             className="button-edit-product"
             title="Salvar alterações" 
            onClick={handleEditProduct}
            />

        </div>
       
       </Form>

     
        </main>
        <Footer />

       </Container>
    )
}