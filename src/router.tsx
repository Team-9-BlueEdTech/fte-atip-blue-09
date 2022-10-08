import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Collab from './pages/Collab';
import Login from './pages/Login';
import Partner from './pages/Partner';
import Home from './pages/Home';
import { useState } from "react";
import NewPartner from "./pages/Admin/NewPartner";
// import { useAuth } from './contexts/auth';

const Router = () => {

  // const { logged } = useAuth();
  const [logged, setLogged] = useState(true);  

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/collab" element={<Collab />}></Route>
          <Route path="/partner/new" element={<NewPartner />} />
          <Route path="/partner/:id" element={<Partner />}></Route>
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
