import { Container } from "./styles";
import { Input } from "../../components/Input";
import {  FiChevronLeft } from 'react-icons/fi';
import { ButtonLink } from "../../components/ButtonLink";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";


export function Details(){
    const [data, setData] = useState(null);

   

    const params = useParams();

    const navigate = useNavigate();

 
    function handleBack(){
        navigate(-1);
    }

   

    useEffect(() => {
        async function getProduct(){
            const response = await api.get(`/product/${params.id}`);
            setData(response.data);
        }

        getProduct();  
    }
    , []);

    console.log(data);

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
                        <img src={data.image} alt={data.name} />
                    </div>

                    <div className="info-container">
                        <h2>{data.name}</h2>
                        <p>{data.description} </p>
                    </div>
                    
                    {
                        data.ingredients && (
                            <div className="details-tags">
                                {
                                    data.ingredients.map((ingredient) => (
                                        <Tag key={ingredient.id} title={ingredient.name} />
                                    ))
                                }
                            </div>

                        )
                    }

                <div className="button">
                 <Button 
                  title="Editar produto"
                  />
                 </div>
                </div>
                
        ) }

       
         </main>

         <Footer/>
       

       </Container>
    )
}