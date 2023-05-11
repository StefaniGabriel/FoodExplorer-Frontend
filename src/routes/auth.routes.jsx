import { Routes, Route } from "react-router-dom";
import { ErrorSign } from "../pages/ErrorSign";
import { SingIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";


export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/create" element={<SignUp />} />
            <Route path="/error" element={<ErrorSign />} />
        </Routes>
    )
}