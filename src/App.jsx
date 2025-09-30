import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import KidsPage from './views/KidsPage'
import ProductDetail from './views/ProductDetail'
import AdultsPage from './views/AdultsPage'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CorporatePage from './views/CorporatePage'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/adults" element={<AdultsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
