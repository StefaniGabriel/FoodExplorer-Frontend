import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./app.admin.routes";
import { ClientRoutes } from "./app.client.routes";
import { useAuth } from "../hooks/auth";


export function AppRoutes() {
    const { user } = useAuth();
    const isAdmin = user && user.type === "admin"; 
 
    return (
        <Routes>
        <Route path="*" element={<AuthRoutes />} />
        <Route path="/admin/*" element={isAdmin ? <AdminRoutes /> : <h1>Not Found</h1>} />
        <Route path="/client/*" element={isAdmin ? <h1>Not Found</h1> : <ClientRoutes />} />
    
        </Routes>
    );
}
