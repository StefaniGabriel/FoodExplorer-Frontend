import { Container } from "./styles";
import { DisplayCard } from "../../../components/Client/DisplayCard";
import { Header } from "../../../components/Client/Header";
import { PayOrder } from "../../../components/Client/PayOrder";
import { Footer } from "../../../components/Footer";
export function CartOrder() {
    return (
        <Container>
        <Header/>
        <main>
         <div className="row-cart">
         <h2 className="title">Meu pedido</h2>
        <DisplayCard/>
     
        <div className="total">
            <h2 className="total-span">Total: 103,50</h2>
        </div>
         </div>
            <div className="row-pay">
                <h2 className="title">Pagamento</h2>
                <PayOrder/>

            </div>
        </main>

        <Footer/>
        </Container>
    );
}

