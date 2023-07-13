import { Routes, Route} from "react-router-dom";

import { Home } from "../pages/Client/Home";

export function ClientRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
           
        
        </Routes>
    )
}

