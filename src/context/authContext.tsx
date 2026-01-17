import React, { useEffect, useReducer, useRef } from "react";
import AuthService from "../services/auth.service";
import type { IAuthContext, IAuthProvider, IAuthState } from "../types/context";
import { authReducer } from "./reducers";

const AuthContext = React.createContext<IAuthContext | undefined>(undefined);

const initialState: IAuthState = {
  currentUser: null,
  role: null,
  permissions: [],
  isAuthenticated: false,
  isLoading: true,
};

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const initialize = async () => {
      if (hasInitialized.current) return;
      hasInitialized.current = true;

      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          const user = await AuthService.getCurrentUser();
          if (user) {
            dispatch({
              type: "SET_USER",
              payload: {
                user: user,
                role: user.role,
                permissions: user.permissions,
              },
            });
          } else { 
            dispatch({ type: "LOGOUT" });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          dispatch({ type: "LOGOUT" });
        }
      } else {
        dispatch({ type: "LOGOUT" });
      }

      dispatch({ type: "SET_LOADING", payload: false });
    };
    initialize();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("accessToken", response.access_token);
      localStorage.setItem("refreshToken", response.refresh_token);
      
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: response.user,
          role: response.user.role,
          permissions: response.user.permissions,
        },
      });
      
      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async (): Promise<boolean> => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await AuthService.logout(refreshToken);
      }
      
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      
      dispatch({ type: "LOGOUT" });
      
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  };

  const authContextValue: IAuthContext = { currentUser: state.currentUser, role: state.role, isAuthenticated: state.isAuthenticated, permissions: state.permissions, isLoading: state.isLoading, login, logout, dispatch };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };