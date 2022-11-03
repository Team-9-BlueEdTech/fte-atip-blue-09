import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Partner, User } from "../../types/index";
import api from "../../services/api"

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  admin: boolean;
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
  const [admin, setAdmin] = useState<boolean>(false);

  console.log("Logged", logged, "Admin", admin);  

  const login = ({ token, user }: LoginParams) => {

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    swal("Login bem sucedido!");

    if (user.isAdmin) {
      setAdmin(true);
      navigate("/admin");
    } else {
      navigate(`/partner/${user.id}${user.firstLogin && "/firstlogin"}`);
    }
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    setAdmin(false);
    navigate("/");
  };

  const checkTokenExpiration = () => {
    // const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`/auth`, headers)
      .then((res) => {          
        setLogged(true);
        if (res.data.isAdmin) {
          setAdmin(true);
          navigate("/admin");
        } else {
          navigate(`/partner/${res.data.id}${res.data.firstLogin && "/firstlogin"}`)
        }
      })
      .catch((e) => {
        logout();        
        swal("Necessário fazer login novamente");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, admin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
