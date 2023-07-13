import { Container } from "./styles";

import {  FiChevronLeft } from 'react-icons/fi';

import { ButtonLink } from "../../../components/ButtonLink"
import { Tag } from "../../../components/Tag";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";



export function Details(){
    const [data, setData] = useState(null);
  
    const params = useParams();

    const navigate = useNavigate();

 
    function handleBack(){
        navigate('/admin');
    }

    function handleEditProduct(){
        navigate(`/admin/edit/${params.id}`);
    }

    function handleDataImage(image){
        const ImageUrl = data.image ? `${api.defaults.baseURL}/files/${data.image}` : null;
        return ImageUrl;

    }

   function handleUpperCaseFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    useEffect(() => {
        async function getProduct(){
            const response = await api.get(`/product/${params.id}`);
            setData(response.data);
        }

        getProduct(); 
         
    }
    , [params.id]);

  
    return(
       <Container>
        <Header/>
         <main>
            <div className="back">
            <FiChevronLeft size={20} />
            <ButtonLink title="Voltar"
            onClick={handleBack}
            />                   
            </div>

            { data && (
                    
                        <div className="details-container">

                    <div className="image-container">
                        <img src={handleDataImage()} alt={data.name} />
                    </div>

              <div className="row">
              <div className="info-container">
                        <span className="name-product">{handleUpperCaseFirstLetter(data.name)}</span>
                        <span className="description-product">{handleUpperCaseFirstLetter(data.description)} </span>
                    </div>
                    
                    {
                        data.ingredients && (
                            <div className="details-tags">
                                {
                                    data.ingredients.map((ingredient) => (
                                        
                                        <Tag key={ingredient.id} title={handleUpperCaseFirstLetter(ingredient.name)} />
                                    ))
                                }
                            </div>

                        )
                    }

                <div className="button">
                 <Button 
                  title="Editar produto"
                  onClick={handleEditProduct}
                  />
                 </div>

                    
              </div>

             
                </div>
                
        ) }

       
         </main>

         <Footer/>
       

       </Container>
    )
}