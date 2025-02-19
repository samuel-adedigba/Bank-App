import React from "react";
import { Navigate} from "react-router-dom";
import { useAppSelector } from "../store/hook";

interface ProtectedRouteProps {
    allowedRoles: string[]; 
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) =>{
    const user = useAppSelector(state =>state.auth.user)
    
    if (!user){
        return <Navigate to="/login" />;
    }
    if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" />;

    return <>{children}</>;
}
export default ProtectedRoute