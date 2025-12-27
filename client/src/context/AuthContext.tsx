import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as auth from '../services/api/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for token on mount using centralized auth service
    const storedToken = auth.getAuthToken();
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newToken: string) => {
    // Use centralized auth service to store token
    auth.setAuthToken(newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Use centralized auth service to clear token
    auth.setAuthToken(''); // Clear from localStorage
    localStorage.removeItem('auth_token'); // Ensure it's removed
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
