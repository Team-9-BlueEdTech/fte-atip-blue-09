import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Collab from './pages/Collab';
import Login from './pages/Login';
import Partner from "./pages/Partner";
import { useAuth } from 'contexts/auth/index';


const Router = () => {
  const { logged } = useAuth();  
    return (
        <Routes>
          {logged ? (
        <>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/collab" element={<Collab />}></Route>
        <Route path="/partner" element={<Partner />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        </>
      ) : (
        <Route path="/" element={<Login />} />
      )}     
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/"} replace />}
      />
        </Routes>
    
  )
}

export default Router
