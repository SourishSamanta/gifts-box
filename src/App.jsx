import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import KidsPage from './views/KidsPage'
import ProductDetail from './views/ProductDetail'
// import more pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
