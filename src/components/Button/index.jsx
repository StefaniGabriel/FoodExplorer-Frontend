import { Container } from "./styles";

export function Button({ icon: Icon ,title, loading = false, icon, ...rest }){
    return(
        <Container 
        type="button"
        disabled={loading}
        icon
        {...rest}
        >
        {Icon && <Icon size={20} />}
       
         {title}
        </Container>
    )
}