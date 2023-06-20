import { Container } from "./styles";

export function Select({ icon: Icon, options, ...rest}){
    return(
        <Container>
            <select {...rest}>
            <option></option>
            <option value="refeição">Refeição</option>
            <option value="sobremesa">Sobremesa</option>
            <option value="bebidas">Bebida</option>
            {Icon && <Icon />}
            </select>
        </Container>
    )
}