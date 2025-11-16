import LandingPage from "./components/LandingPage"
import ProductSelection from "./components/ProductSelection"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route 
        path="/" 
        element={
        <LandingPage/>
        }/>

        <Route 
        path="/product-selection" 
        element={
        <ProductSelection />
        }>
        </Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
