import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./app.admin.routes";


export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}
