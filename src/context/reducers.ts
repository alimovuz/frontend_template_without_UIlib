import type { AuthAction, IAuthState } from "../types/context";

const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload.user,
        role: action.payload.role,
        permissions: action.payload.permissions,
        isAuthenticated: true
      };
    
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case "LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: action.payload.user,
        role: action.payload.role,
        permissions: action.payload.permissions,
        isAuthenticated: true,
      };
    
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        role: null,
        permissions: [],
        isAuthenticated: false,
      };
    
    default:
      return state;
  }
};

export { authReducer };