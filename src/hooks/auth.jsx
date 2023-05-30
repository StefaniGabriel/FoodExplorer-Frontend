import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
       

    async function signIn({ email, password}) {
        try{
            const response = await api.post('/sessions', {
                email,
                password
                
            })
            const { token, user } = response.data;

            localStorage.setItem("@Foodexplorer:user", JSON.stringify(user));
            localStorage.setItem('@Foodexplorer:token', token);
            
            api.defaults.headers.common['Authorization']= `Bearer ${token}`;
    
            setData({ token, user });

            alert("Login realizado com sucesso!");

        } catch(error) {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível fazer login.");
            }
        }}
    

    async function signOut() {
        localStorage.removeItem('@Foodexplorer:token');
        localStorage.removeItem('@Foodexplorer:user');

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem('@Foodexplorer:token');
        const user = localStorage.getItem('@Foodexplorer:user');

        if(token && user) {
            api.defaults.headers.common['Authorization']= `Bearer ${token}`;

            setData({ token, user: JSON.parse(user) });

        }
    }, []);



    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
        }}>
            {children}
                        
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };