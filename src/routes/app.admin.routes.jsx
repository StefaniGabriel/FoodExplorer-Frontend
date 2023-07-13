import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Adimin/Home";
import { NewProduct } from "../pages/Adimin/NewProduct";
import { Details } from "../pages/Adimin/Details";
import { Menu } from "../pages/Adimin/Menu";
import { EditProduct } from "../pages/Adimin/EditProduct";



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