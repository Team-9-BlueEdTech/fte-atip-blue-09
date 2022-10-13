import { BrowserRouter } from "react-router-dom"
import { CensusProvider } from "./contexts/census"
import { PartnerProvider } from "./contexts/partner"
import Router from "./router"

const App = () => { 
  return (
    <BrowserRouter>
      <PartnerProvider>
        <CensusProvider>
          <Router />
        </CensusProvider>
      </PartnerProvider>
    </BrowserRouter>
  )
}

export default App
