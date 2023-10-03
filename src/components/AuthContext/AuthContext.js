import React, { createContext, useState } from 'react';

// Crie o contexto
export const AuthContext = createContext({});

// Crie o provedor do contexto
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Armazena informações do usuário
  const [authenticated, setAuthenticated] = useState(false); // Armazena o estado de autenticação

  // Função para fazer login e definir o usuário e autenticação
  async function login(userData) {
    setUser(userData);
    setAuthenticated(true);
    //console.log(user)
    // console.log(authenticated)

  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

