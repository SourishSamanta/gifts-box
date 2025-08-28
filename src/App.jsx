import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import KidsPage from './views/KidsPage'
import ProductDetail from './views/ProductDetail'
import AdultsPage from './views/AdultsPage'
import Nav from './components/Nav'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/adults" element={<AdultsPage />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
