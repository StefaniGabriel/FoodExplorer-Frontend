import { Container } from "./styles";

export function Select({ icon: Icon, options, ...rest}){
    return(
        <Container>
            <select {...rest}>
            <option value="meals">Refeição</option>
            <option value="desserts">Sobremesa</option>
            <option value="drinks">Bebida</option>
            {Icon && <Icon />}
            </select>
        </Container>
    )
}