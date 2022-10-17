import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/index";
import api from "../../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

interface LoginParams {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/admin");
    swal("Login bem sucedido!");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/");
  };

  const checkTokenExpiration = () => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/admin/${user.id}`, headers)
      .then(() => {
        setLogged(true);
        navigate("/admin");
      })
      .catch(() => {
        logout();
        swal("Necessário fazer login novamente");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
