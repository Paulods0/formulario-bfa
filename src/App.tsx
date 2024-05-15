import { Route, Routes } from "react-router-dom"
import PageOne from "./pages/page-1"
import PageTwo from "./pages/page-2"
import LangingPage from "./pages/landing-page"
import Submited from "./pages/submited"


function App() {
  
  return (
    <main className="w-full h-screen p-8">
      <Routes>
        <Route index element={<LangingPage />} />
        <Route path="/particulares" element={<PageOne />} />
        <Route path="/empresas" element={<PageTwo />} />
        <Route path="/submited" element={<Submited />} />
      </Routes>
    </main>
  )
}

export default App
