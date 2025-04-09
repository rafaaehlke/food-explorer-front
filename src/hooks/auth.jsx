import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      // Armazenando os dados no localStorage
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));  //JSON.stringify transforma de objeto para texto
      localStorage.setItem("@foodexplorer:token", token);

      // Configurando o token no header da API
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Atualiza o estado
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);

      } else {
        alert("Não foi possivel fazer login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({});
  }

  // verificar se há token e usuário no localStorage ao montar o componente
  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);


  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;}  
export { AuthProvider, useAuth };