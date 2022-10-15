import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/auth"
import { CensusProvider } from "./contexts/census"
import { PartnerProvider } from "./contexts/partner"
import Router from "./router"

const App = () => { 
  return (
    <BrowserRouter>
      <AuthProvider>
        <PartnerProvider>
          <CensusProvider>
            <Router />
          </CensusProvider>
        </PartnerProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
