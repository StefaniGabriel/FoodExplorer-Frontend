import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { FiChevronLeft, FiUpload, FiX } from 'react-icons/fi';
import { Select } from "../../components/Select";
import { NewTag } from "../../components/NewTag";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState } from "react";


export function NewProduct(){
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [newIngredient, setNewIngredient] = useState('');

  



    function handleSelectImage(event){
        if(!event.target.files){
            return;
        }

        const selectedImage = event.target.files[0];
        const selectedImagePreview = URL.createObjectURL(selectedImage);

        setImage(selectedImagePreview);
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


    return(
       <Container>
        <Header />
        <div className="back">
        <FiChevronLeft size={20} />
        <ButtonLink title="Voltar" />                   
        </div>
         
       <Form>
      

        <h2>Novo Prato</h2>
        <div className="input-wrapper">
            <span className="input-name">Imagem do prato</span>
            <div className="file">
                <label htmlFor="image">
                   
                    <span><FiUpload /> Selecione imagem</span>
                <Input
                type="file"
                className="input-image-product"
                placeholder="Insira a imagem do prato"
                onChange={handleSelectImage}
                />
                </label>
            </div>

                
           
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
            <Select
            
            />
        </div>

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
            onChange={event => setNewIngredient(event.target.value)}
            onClick={handleAddIngredient}
            />
            
        </div>

        <div className="input-wrapper">
            <span className="input-name">Preço</span>
            <Input  
            type="number"
            className="input-price-product"
            placeholder="R$ 00,00"
            onChange={event => setPrice(event.target.value)}
            />
        </div>

         <div className="input-wrapper">
            <span className="input-name">Nome do prato</span>
            <Textarea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={event => setDescription(event.target.value)}
            />
        </div>

        <div className="button">
        <Button title="Cadastrar prato" />
        </div>
       </Form>

       <Footer />

       </Container>
    )
}