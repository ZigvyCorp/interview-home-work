import { createContext, ReactNode, useContext } from "react";

type AuthContext = {}

const authContext = createContext<AuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  return <authContext.Provider value={{}}>
    {children}
  </authContext.Provider>;
};


export default AuthProvider;

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("useAuth should be used inside AuthProvider");
  return context;
};