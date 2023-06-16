import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('user')) || null;
    
    if(!usuarioLogueado)
    {
        return <Navigate to={'/login'}></Navigate>;
    }else
    {
        return children;
    }
};

export default RutasProtegidas;