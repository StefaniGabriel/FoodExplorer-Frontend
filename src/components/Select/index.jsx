import { Container } from "./styles";

export function Select({ icon: Icon, options, ...rest}){
    return(
        <Container>
            <select {...rest}>
            <option value="meals">Refeição</option>
            <option value="drinks">Sobremesa</option>
            <option value="desserts">Bebida</option>
            {Icon && <Icon />}
            </select>
        </Container>
    )
}