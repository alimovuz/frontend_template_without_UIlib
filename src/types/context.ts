interface IAuthContext {
  currentUser: any;
  role: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  permissions: string[];
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  dispatch: React.Dispatch<AuthAction>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthState {
  currentUser: any;
  role: string | null;
  permissions: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
}

type AuthAction = { type: "SET_USER"; payload: { user: any; role: string; permissions: string[] } } | { type: "SET_LOADING"; payload: boolean } | { type: "LOGOUT" } | { type: "LOGIN_SUCCESS"; payload: { user: any; role: string; permissions: string[] } };

export type { IAuthContext, IAuthState, AuthAction, IAuthProvider };