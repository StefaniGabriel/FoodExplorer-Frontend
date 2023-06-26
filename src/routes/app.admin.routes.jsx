import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { NewProduct } from "../pages/NewProduct";
import { Details } from "../pages/Details";
import { Menu } from "../pages/Menu";
import { EditProduct } from "../pages/EditProduct";



export function AdminRoutes(){
    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<NewProduct /> } />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            <Route path="/menu" element={<Menu />} />

      </Routes>
       
    )
}