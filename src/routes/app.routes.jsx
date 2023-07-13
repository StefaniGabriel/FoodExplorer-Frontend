import { Routes, Route } from "react-router-dom";

import { AdminRoutes } from "./app.admin.routes";
import { ClientRoutes } from "./app.client.routes";
import { useAuth } from "../hooks/auth";


export function AppRoutes() {
    const { user } = useAuth();
    const isAdmin = user && user.type === "admin"; 

    return (
        <Routes>
            {
                isAdmin && <Route path="/admin/*" element={<AdminRoutes />} />

            }
           
            <Route path="/client/*" element={<ClientRoutes />} />

        </Routes>
    );
}
