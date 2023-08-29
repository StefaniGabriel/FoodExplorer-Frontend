import { Container } from "./styles";

import qrCode from "../../../assets/istockphoto-1095468748-612x612.jpg"
import pixIcon from "../../../assets/icon/pix.svg";
import list from "../../../assets/icon/list.svg";
import cutlery from "../../../assets/icon/cutlery.svg";

import { FiClock } from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineCreditCard } from "react-icons/ai";
import { TbCircleCheck } from "react-icons/tb";

import { OrderContext } from "../../../Provider";


export function PayOrder() {
    const [status, setStatus] = useState(null); 
    const credit = document.querySelector(".credit");
    const pix = document.querySelector(".pix");
    const btnPix = document.querySelector(".btn-pix");
    const btnCredit = document.querySelector(".btn-credit");

    const navigate = useNavigate();

    function displayCredit() {
        pix.classList.remove("active");
        btnPix.classList.remove("selected");
        btnCredit.classList.remove("no-selected");

        credit.classList.add("active");
        btnCredit.classList.add("selected");
        btnPix.classList.add("no-selected");
    }

    function displayPix() {
        btnPix.classList.remove("no-selected");
        btnCredit.classList.remove("selected");
        credit.classList.remove("active");

        pix.classList.add("active");
        btnPix.classList.add("selected");
        btnCredit.classList.add("no-selected");
    }

    function handleOrderPayment(){
        const statuses = ["1", "2", "3"];
        statuses.forEach((stat, index) => {
            setTimeout(() => {
                setStatus(stat);
        
            }, 3000 * index);

        });
        
    }

  
    return (
        <Container>
            <div className="btn-payment">
                <button className="btn-pix selected"
                id="btn"
                onClick={displayPix}
                >
                    <img src={pixIcon} alt="" />
                   PIX
                </button>

                <button className="btn-credit no-selected"
                id="btn"
                onClick={displayCredit}
                >
                    <AiOutlineCreditCard/>Crédito
                </button>
            </div>
                
           {
                status === null ? (
                   <div className="card-null">
                         
                         <div className="credit">
                      
                      <div className="card-number">
                          <span className="title-card">
                          Número do Cartão
                          </span>
                          <input type='text'
                          placeholder="0000 0000 0000 0000"
                          />
                          <label htmlFor="number-card"></label>
                          </div>
                      <div className="row-2">
                      <div className="card-date">
                      <span className="title-card">
                              Validade
                          </span>
                          <input type="text"
                          placeholder="00/00"
                          />
                          <label htmlFor="date-card"></label>
                          </div>
                      <div className="card-code">
                      <span className="title-card"
                      >
                              CVC
                          </span>
                          <input type="text" 
                          placeholder="000"
                          />
                          <label htmlFor="code-card"></label>
                          </div>
  
                        
                  
                      </div>
                      <button 
                          className="order-btn"
                          onClick={handleOrderPayment}
                          >
                          <img src={list} />
                          Finalizar pagamento
                              
                          </button>
              </div>
        
              
                  <div className="pix active">
                      <div className="pix-code">
                          <img src={qrCode}/>
                      </div>
                       </div>
                   </div>
                ): (
                
                    <div className="infos-order-container">
                        <div className="infos-order-img">
                           {
                                 status === "1" ? (
                                    <FiClock/>
                                ): status === "2" ? (
                                    <TbCircleCheck/>
                                ):(
                                    <img src={cutlery} />
                                )
                            }
                        </div>
                        <div className="infos-order-status">
                        {
                            status === "1" ? (
                                <span>Aguardando pagamento no caixa</span>
                            ): status === "2" ? (
                                <span>Pagamento aprovado!</span>
                            ):  (
                                <span>Pedido entregue!</span>
                        )

                        }
                        </div>
                    </div>
                )
           }
                        
                    

                  
                


            
        </Container>
    )
}