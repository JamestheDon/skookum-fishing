import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from './components/Layout'
import Booking from './components/Booking'
import OptimizedImage from './components/OptimizedImage'

function Home() {
  return (
    <div className="home-page">
      <div className="hero-background home-hero"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Skookum Fishing</h1>
        <p className="hero-text">Discover the best fishing spots and track your catches in the Pacific Northwest</p>
        <div className="hero-buttons">
          <Link to="/booking" className="cta-button primary">Book a Tour</Link>
          <Link to="/spots" className="cta-button secondary">Explore Spots</Link>
        </div>
      </div>
      
      <div className="container home-content">
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src="/src/assets/optimized/IMG_9743-preview.HEIC.webp" alt="Guided fishing tour" />
            </div>
            <div className="card-content">
              <h2>Guided Tours</h2>
              <p>Experience the best fishing spots with our expert guides who know all the local secrets</p>
              <Link to="/booking" className="card-button">Book Now</Link>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src="/src/assets/optimized/IMG_9059-preview.HEIC.webp" alt="Weather forecast" />
            </div>
            <div className="card-content">
              <h2>Weather Forecast</h2>
              <p>Get real-time weather updates and fishing conditions for your favorite spots</p>
              <button className="card-button">Check Weather</button>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src="/src/assets/optimized/IMG_9780-preview.HEIC.webp" alt="Nearby fishing spots" />
            </div>
            <div className="card-content">
              <h2>Nearby Spots</h2>
              <p>Discover top-rated fishing locations near you with our interactive map</p>
              <Link to="/spots" className="card-button">Find Spots</Link>
            </div>
          </div>
        </div>
        
        <div className="gallery-section">
          <h2 className="section-title">Fishing Adventures</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_5209.webp" alt="Trout fishing" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_9825-preview.HEIC.webp" alt="Fishing in the river" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_5261.webp" alt="Caught fish" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_8367.webp" alt="Fishing spot" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_9725-preview.HEIC.webp" alt="Fishing adventure" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src="/src/assets/optimized/IMG_0022.webp" alt="Beautiful scenery" />
            </div>
          </div>
        </div>
        
        <div className="testimonial-section">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>"The guided tour was amazing! Our guide knew exactly where to find the best catches and made the experience unforgettable."</p>
              <div className="testimonial-author">
                <span className="author-name">Michael T.</span>
                <span className="author-location">Seattle, WA</span>
              </div>
            </div>
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
