import { Container } from "./styles";
import { Input } from "../../components/Input";
import { FiArrowUpLeft } from 'react-icons/fi';
import { Select } from "../../components/Select";
import { Tag } from "../../components/Tag";


export function NewProduct(){
    return(
       <Container>
        <div className="back">
        <FiArrowUpLeft size={20} />
        <span>Voltar</span>
        </div>

        <h1>Novo Prato</h1>
        <div className="input-wrapper">
            <span className="input-name">Imagem do prato</span>
            <Input
            type="file"
            className="input-image-product"
            placeholder="Selecione imagem para alterá-la"
           
            />

        </div>

        <div className="input-wrapper">
            <span className="input-name">Nome do prato</span>
            <Input  
            type="text"
            className="input-name-product"
            placeholder="Insira o nome do prato"
            />
        </div>

        <div className="select-wrapper">
            <span className="input-name">Categoria do prato</span>
            <Select
            
            />
        </div>

        <div className="ingredients-wrapper">

            <Tag title="arroz" />
            
        </div>

       



       </Container>
    )
}