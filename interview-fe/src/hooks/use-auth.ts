import { useContext } from "react";
import { AuthContext, AuthContextType } from "@/contexts/auth/jwt-context";


export const useAuth = <T = AuthContextType>() => useContext(AuthContext) as unknown as T;
