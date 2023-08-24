import { Routes, Route} from "react-router-dom";

import { Menu } from "../pages/Client/Menu";
import { Home } from "../pages/Client/Home";
import { Details } from "../pages/Client/Details";
import { CartOrder } from "../pages/Client/CartOrder"

export function ClientRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/cart" element={<CartOrder/>}/>
           
        
        </Routes>
    )
}

