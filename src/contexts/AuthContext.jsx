import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula a verificação de um token no localStorage ou sessão
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simula uma chamada de API para login
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password } ),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token); // Armazena o token
        return { success: true };
      } else {
        return { success: false, message: data.message || "Erro no login" };
      }
    } catch (error) {
      console.error("Erro de rede ou servidor:", error);
      return { success: false, message: "Erro ao conectar com o servidor." };
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      // Simula uma chamada de API para registro
      const response = await fetch("http://localhost:5001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData ),
      });

      const data = await response.json();

      if (response.ok) {
        // Opcional: logar o usuário após o registro
        // setUser(data.user);
        // localStorage.setItem("user", JSON.stringify(data.user));
        return { success: true, message: data.message };
      } else {
        return { success: false, message: data.message || "Erro no registro" };
      }
    } catch (error) {
      console.error("Erro de rede ou servidor:", error);
      return { success: false, message: "Erro ao conectar com o servidor." };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
