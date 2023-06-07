import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('token') !== null
  );

  // Function to update the authentication state when the user logs in or out
  const updateAuthState = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
