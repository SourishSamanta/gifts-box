import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import KidsPage from './views/KidsPage'
// import more pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kids" element={<KidsPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
