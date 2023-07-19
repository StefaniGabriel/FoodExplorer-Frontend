import { Routes, Route } from "react-router-dom";

import { AdminRoutes } from "./app.admin.routes";
import { ClientRoutes } from "./app.client.routes";
import { useAuth } from "../hooks/auth";


export function AppRoutes() {
    const { user } = useAuth();
    const isAdmin = user && user.type === "admin"; 
    const isClient = user && user.type === "client";

    return (
        <Routes>
            {
                isAdmin && <Route path="/admin/*" element={<AdminRoutes />} />

            }
           
           {
                isClient && <Route path="/client/*" element={<ClientRoutes />} />
           }
            

        </Routes>
    );
}
