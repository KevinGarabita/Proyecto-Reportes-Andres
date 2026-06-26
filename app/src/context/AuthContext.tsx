import { createContext } from "react";
import type { AuthUser } from "../types/auth";

type AuthContextType = {
  user: AuthUser | null;

  isAuthenticated: boolean;

  loading: boolean;

  login: (user: AuthUser) => void;

  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
