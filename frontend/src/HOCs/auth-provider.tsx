import { User } from "@/models/user";
import { useServices } from "@/services";
import React, { useContext, useEffect, useState } from "react";
import { from, Subscription } from "rxjs";

interface AuthValue {
  isAuthenticated: boolean;
  user: User | null;
  logout: () => void;
  loading: boolean;
  fetchMyProfile: () => void;
}

const defaultValue = {
  isAuthenticated: false,
  user: null,
  logout: () => {},
  loading: true,
  fetchMyProfile: () => {},
};

const AuthContext = React.createContext<AuthValue>(defaultValue);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC = (props) => {
  const [loading, setLoading] = useState(defaultValue.loading);
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultValue.isAuthenticated
  );
  const [user, setUser] = useState(defaultValue.user);
  const { authService } = useServices();

  const subscriptions: Subscription[] = [];

  useEffect(() => {
    fetchMyProfile();
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const logout = () => {};

  const fetchMyProfile = () => {
    setLoading(true);
    subscriptions.push(
      from(authService().fetchMyProfile()).subscribe(
        (user: any) => {
          setUser(user);
          setIsAuthenticated(true);
          setLoading(false);
        },
        () => {
          setUser(null);
          setIsAuthenticated(false);
          setLoading(false);
        }
      )
    );
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        isAuthenticated,
        user,
        logout,
        fetchMyProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
