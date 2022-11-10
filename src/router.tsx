import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/Admin';
import Collab from './pages/Collab';
import Login from './pages/Login';
import Home from './pages/Home';
import ChangePassPage from "./components/ChangePassword";
import NewPartner from "./pages/Admin/NewPartner";
import PartnerPage from "./pages/Partner";
import { useAuth } from './contexts/auth';
import Questions from './pages/Questions';
import CensusQuestions from './pages/Partner/questions';

const Router = () => {
  const { logged, admin } = useAuth();

  return (
    <Routes>
      {
        logged && (
          <>
            <Route path="/census/:censusId" element={<PartnerPage />} />
            <Route path="/census/:censusId/questions" element={<CensusQuestions />} />
            <Route path="/partner/:partnerId" element={<PartnerPage />} />
            <Route path="/partner/:partnerId/firstlogin" element={<ChangePassPage />} />
            {
              admin &&
              <>
                <Route path="/admin/questions" element={<Questions />}/>
                <Route path="/admin" element={<Admin />} />
                <Route path="/partner/new" element={<NewPartner /> } />
              </>
            }
          </>
        )
      }
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="*" element={<Navigate to={admin ? "/admin" : "/"} replace />} />
      </>      
    </Routes>  
  )
}

export default Router
