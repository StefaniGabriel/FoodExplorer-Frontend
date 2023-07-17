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

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";


export function NewProduct(){
    const [image, setImage] = useState('');
    const [fileImage, setFileImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    const navigate = useNavigate();

    function handleGoBack(){
        navigate(-1);
    }


    function handleSelectImage(event){
        if(!event.target.files){
            return;
        }

        const selectedImage = event.target.files[0];
     
        const selectedImagePreview = URL.createObjectURL(selectedImage);

        setImage(selectedImage);
        setFileImage(selectedImagePreview);

    }


    function handleDeleteImage(){
        setImage(null);
    }

    function handleAddIngredient(){
        if(!newIngredient){
            return;
        }

        setIngredients([...ingredients, newIngredient]);
        setNewIngredient('');
    }

    function handleDeleteIngredient(index){
        const newIngredients = ingredients.filter((ingredient, i) => i !== index);

        setIngredients(newIngredients);
    }

    function handleErrorCreateProduct(){
        
        if(!name || !category || !ingredients || !price || !description || !image){
            alert('Preencha todos os campos');
            return;
        }

        const correctPrice = price.replace(',', '.');

        if(isNaN(correctPrice)){
            alert('Insira um valor válido');
            return;
        }

        const priceNumber = Number(correctPrice);

        if(priceNumber < 0){
            alert('Insira um valor válido');
            return;
        }
    }


    async function handleCreateProduct(){

        handleErrorCreateProduct();
    

        
        const data = new FormData();

        data.append('image', image);

        try{
            const response = await api.post("/product", {
                name,
                category,
                prices: price,
                description,
                ingredients

            });

        console.log(response.data);

            
            const { id } = response.data;

            console.log(id);

            if(fileImage){
                await api.patch(`/product/image/${id}`, data);
            }

            alert('Produto cadastrado com sucesso!');
            navigate(`/admin/details/${id}`);
           
        } catch(err){
            alert('Erro ao cadrastrar produto, tente novamente.')
        }
        

    }


       

       
    

    return(
       <Container>
        <Header />
        <main>
            
        <div className="back"
        >
        <FiChevronLeft size={20}
          onClick={handleGoBack} 
        />
        <ButtonLink title="Voltar" 
        onClick={handleGoBack} 
        />                   
        </div>
         
       <Form>
      

        <h2>Adicionar produto</h2>
       <div className="row-1">
             <div className="input-wrapper">
                <span className="input-name">Imagem do prato</span>
              {
                    image ?   <div className="file-02">
                    <label htmlFor="image">
                        <span>
                            <img src={fileImage} alt="Imagem do produto" />
                            <button
                            onClick={handleDeleteImage}
                            > 
                                <FiX />Excluir
                            </button>
                        </span>
                    
                        <Input
                        id="image"
                        type="file"
                        className="input-image-product"
                        onChange={handleSelectImage}

                        />
                    </label>
                    </div> : <div className="file">
                    <label htmlFor="image">
                        <span>
                            <FiUpload />
                            Selecione uma imagem

                        </span>

                        <Input
                        id="image"
                        type="file"
                        className="input-image-product"
                        onChange={e => handleSelectImage(e)}

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
            onChange={event => setName(event.target.value)}
            />
        </div>

        <div className="input-wrapper">
            <span className="input-name">Categoria do prato</span>
            <div className="input-category-product">
            <Select
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
                            onChange={event => setIngredients(event.target.value)}
                            
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
                    onChange={event => setPrice(event.target.value)}
                    />
            </div>

     </div>
         

         <div className="input-wrapper">
                <span className="input-name">Nome do prato</span>
                <Textarea 
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={event => setDescription(event.target.value)}
                />
        </div>

        <div className="button">
            <Button title="Cadastrar produto" 
            onClick={handleCreateProduct}
            />
        </div>
       </Form>

     
        </main>
        <Footer />

       </Container>
    )
}