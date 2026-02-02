import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "./constants/routes"
import Layout from "./WeatherProject/Layout"
import Home from "./WeatherProject/Home/Home"
import Weathers from "./WeatherProject/Weathers/Weathers"



function App() {
  return (
    <BrowserRouter>      
      <Layout>
        <Routes>
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={ROUTES.WEATHERS} element={<Weathers/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    
  )
}

export default App
