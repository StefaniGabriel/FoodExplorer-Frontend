import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { ProductDetails } from "../pages/ProductDetails";
import { Menu } from "../pages/Menu";



export function AdminRoutes(){
    return(
         <Routes>
                <Route path="/" element={<NewProduct />} />
                <Route path='/new' element={<NewProduct />} />
                <Route path="/details" element={<ProductDetails />} />
                <Route path="/menu" element={<Menu />} />

         </Routes>
       
    )
}