import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Booking from './components/Booking'
import Spots from './components/Spots'
import OptimizedImage from './components/OptimizedImage'
import { initEmailJS } from './emailjs-config'
import IMG_9743 from './assets/optimized/IMG_9743-preview.HEIC.webp';
import IMG_9059 from './assets/optimized/IMG_9059-preview.HEIC.webp';
import IMG_9921 from './assets/optimized/IMG_9921.webp';
import IMG_6615 from './assets/optimized/IMG_6615-preview.HEIC.webp';
import IMG_9825 from './assets/optimized/IMG_9825-preview.HEIC.webp';
import IMG_5261 from './assets/optimized/IMG_5261.webp';
import IMG_8367 from './assets/optimized/IMG_8367.webp';
import IMG_9725 from './assets/optimized/IMG_9725-preview.HEIC.webp';
import IMG_0022 from './assets/optimized/IMG_0022.webp';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background home-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Skookum Fishing</h1>
          <p className="hero-text">Discover the best fishing spots and track your catches in the Pacific Northwest</p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">Book a Tour</Link>
            <Link to="/spots" className="btn btn-outline">Explore Spots</Link>
          </div>
        </div>
      </section>
      
      <div className="container home-content content-over-bg">
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={IMG_9743} alt="Guided fishing tour" />
            </div>
            <div className="card-content">
              <h2>River Tours</h2>
              <p>Experience year-round fishing on the Yakima River targeting rainbow and cutthroat trout with multiple tactics. All catch and release with selective gear rules.</p>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={IMG_9059} alt="Lake fishing" />
            </div>
            <div className="card-content">
              <h2>Lake Tours</h2>
              <p>From alpine lakes to roadside gravel ponds and reservoirs, our lake tours offer a wide range of trout and salmon species throughout the year, often with the ability to retain fish.</p>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={IMG_9921} alt="Seasonal fishing" />
            </div>
            <div className="card-content">
              <h2>Seasonal Specials</h2>
              <p>Target mountain whitefish on the Yakima River (Jan-Feb) with the ability to retain state limits, or join our specialty tours at Lake Cle-Elum, Cooper Lake, and Lake Wenatchee.</p>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
        
        <div className="tour-details-section content-over-bg">
          <h2 className="section-title">Tour Details</h2>
          <div className="tour-details-container">
            <div className="tour-details-card">
              <div className="tour-details-header">
                <h3>River Fishing</h3>
              </div>
              <div className="tour-details-content">
                <ul>
                  <li><strong>Location:</strong> Yakima River</li>
                  <li><strong>Target Species:</strong> Rainbow trout, cutthroat trout, mountain whitefish</li>
                  <li><strong>Season:</strong> Year-round</li>
                  <li><strong>Regulations:</strong> Catch and release, selective gear rules</li>
                  <li><strong>Special Season:</strong> Mountain whitefish retention allowed January-February</li>
                  <li><strong>Tactics:</strong> Fly fishing, drift fishing, and other specialized techniques</li>
                </ul>
              </div>
            </div>
            
            <div className="tour-details-card">
              <div className="tour-details-header">
                <h3>Lake Fishing</h3>
              </div>
              <div className="tour-details-content">
                <ul>
                  <li><strong>Locations:</strong> Lavender Lake, Lake Cle-Elum, Cooper Lake, Lake Wenatchee</li>
                  <li><strong>Target Species:</strong> Various trout and salmon species</li>
                  <li><strong>Season:</strong> Varies by location and species</li>
                  <li><strong>Regulations:</strong> Many allow fish retention for table fare</li>
                  <li><strong>Environments:</strong> Alpine lakes, roadside gravel ponds, reservoirs</li>
                  <li><strong>Tactics:</strong> Wide range of techniques including trolling, casting, and still fishing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="gallery-section content-over-bg">
          <h2 className="section-title">Fishing Adventures</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <OptimizedImage src={IMG_6615} alt="Trout fishing" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_9825} alt="Fishing in the river" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_5261} alt="Caught fish" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_8367} alt="Fishing spot" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_9725} alt="Fishing adventure" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_0022} alt="Beautiful scenery" />
            </div>
          </div>
        </div>
        
        <div className="testimonial-section content-over-bg">
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
  useEffect(() => {
    // Initialize EmailJS when the app starts
    initEmailJS();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/spots" element={<Spots />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
