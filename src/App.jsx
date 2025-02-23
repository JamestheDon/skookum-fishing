import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Booking from './components/Booking'

function Home() {
  return (
    <div className="home-page">
      <div className="hero-background">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Skookum Fishing</h1>
          <p className="hero-text">Discover the best fishing spots and track your catches in the Pacific Northwest</p>
        </div>
      </div>
      
      <div className="container">
        <div className="grid">
          <div className="card">
            <h2>Guided Tours</h2>
            <p>Experience the best fishing spots with our expert guides</p>
          </div>
          
          <div className="card">
            <h2>Weather Forecast</h2>
            <p>Loading weather data...</p>
          </div>
          
          <div className="card">
            <h2>Nearby Spots</h2>
            <p>Discover fishing spots near you</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
