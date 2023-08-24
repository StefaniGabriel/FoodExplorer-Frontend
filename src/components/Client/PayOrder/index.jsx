import { Container } from "./styles";
import { Button } from "../../Button";
import qrCode from "../../../assets/istockphoto-1095468748-612x612.jpg"

export function PayOrder() {
    const status = "Aguardando pagamento";
    const credit = document.querySelector(".btn-credit");
    const pix = document.querySelector(".btn-pix");

    function displayCredit() {


        credit.classList.add("active");
        pix.classList.remove("active");


    }

    function displayPix() {
        pix.classList.add("active");
        credit.classList.remove("active");

    
    }

   
    return (
        <Container>
            <div className="btn-payment">
                <button className="btn-pix btn-no-active"
                id="btn"
                onClick={displayPix}
                >Pix</button>
                <button className="btn-credit btn-active "
                id="btn"
                onClick={displayCredit}
                >Crédito</button>
            </div>

           
                    <div className="credit active">
                      
                            <div className="card-number">
                                <span className="title-card">
                                Número do Cartão
                                </span>
                                <input type='text' />
                                <label htmlFor="number-card"></label>
                                </div>
                            <div className="row-2">
                            <div className="card-date">
                            <span className="title-card">
                                Número do Cartão
                                </span>
                                <input type="text" />
                                <label htmlFor="date-card"></label>
                                </div>
                            <div className="card-code">
                            <span className="title-card">
                                Número do Cartão
                                </span>
                                <input type="text" />
                                <label htmlFor="code-card"></label>
                                </div>

                              
                        
                            </div>
                            <Button
                                title="Finalizar pagamento"
                                />
                    </div>
              
                    
                        <div className="pix ">
                            <div className="pix-code">
                                <img src={qrCode}/>
                            </div>
                             </div>
                        
                    

                  
                


            
        </Container>
    )
}