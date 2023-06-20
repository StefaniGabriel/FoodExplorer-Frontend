import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { ProductDetails } from "../pages/ProductDetails";
import { Menu } from "../pages/Menu";



export function AdminRoutes(){
    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewProduct /> } />
            <Route path="/details/:id" element={<ProductDetails />} />
            <Route path="/menu" element={<Menu />} />

      </Routes>
       
    )
}