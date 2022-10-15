import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Collab from './pages/Collab';
import Login from './pages/Login';
import Home from './pages/Home';
import PartnerPage from "./pages/Partner";
import { useState } from "react";
import NewPartner from "./pages/Admin/NewPartner";
import CensusPage from "./pages/Partner/Census";
// import { useAuth } from './contexts/auth';

const Router = () => {
  
  //const { logged } = useAuth();
  const [logged, setLogged] = useState(true);
  return (
    <Routes>
      {
        logged ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/census/:censusId" element={<CensusPage />} />
            <Route path="/collab" element={<Collab />} />
            <Route path="/login" element={<Login />} />
            <Route path="/partner/new" element={<NewPartner />} />
            <Route path="/partner/:partnerId" element={<PartnerPage />} />
            
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )
      }     
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/"} replace />}
      />
    </Routes>  
  )
}

export default Router
