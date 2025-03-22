import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Booking from './components/Booking'
import Spots from './components/Spots'
import ScrollToTop from './components/ScrollToTop'
import OptimizedImage from './components/OptimizedImage'
import { initEmailJS } from './emailjs-config'
import fishOfALifetime from '/assets/optimized/fish-of-a-lifetime.webp';
import lakeWenatcheeMorning from '/assets/optimized/lake-wenatchee-morning.webp';
import riverCrossing from '/assets/optimized/river-crossing.webp';
import crainFlyEye from '/assets/optimized/crain-fly-eye.webp';
import bloodyBrownTrout from '/assets/optimized/bloody-brown-trout.webp';
import IMG_6615 from '/assets/optimized/IMG_6615-preview.HEIC.webp';
import IMG_5261 from '/assets/optimized/IMG_5261.webp';
import IMG_8367 from '/assets/optimized/IMG_8367.webp';
import IMG_9725 from '/assets/optimized/IMG_9725-preview.HEIC.webp';
import IMG_0022 from '/assets/optimized/IMG_0022.webp';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background home-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Skookum Fishing LLC</h1>
          <p className="hero-text">Fishing in the Pacific Northwest</p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">Book a Guide</Link>
            <Link to="/spots" className="btn btn-outline">Explore Spots</Link>
          </div>
        </div>
      </section>
      
      <div className="container home-content content-over-bg">
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={fishOfALifetime} alt="Guided fishing trip" />
            </div>
            <div className="card-content">
              <h2>Yakima River Trips</h2>
              <p>Fishing the the tiny headwaters to the the mouth.</p>
              <ul>
                <li>Rainbow and cutthroat trout</li>
                <li>Mountain whitefish</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={lakeWenatcheeMorning} alt="Lake fishing at Lake Wenatchee" />
            </div>
            <div className="card-content">
              <h2>Lakes and Ponds</h2>
              <p>From alpine lakes to roadside gravel ponds and the reservoirs in between.</p>
              <ul>
                <li>Rainbow trout</li>
                <li>Cutthroat trout</li>
                <li>Brown trout</li>
                <li>Brook trout</li>
                <li>Sockeye salmon</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="card-image">
              <OptimizedImage src={riverCrossing} alt="High country fishing" />
            </div>
            <div className="card-content">
              <h2>High Country Fishing</h2>
              <p>Hiking, camping and multi day trips fishing creeks and lakes.</p>
              <ul>
                <li>Custom guided fishing packages</li>
                <li>Hosting</li>
                <li>You name the adventure.</li>
              </ul>
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
            </div>
          </div>
        </div>
        {/*}
        <div className="guide-details-section content-over-bg">
          <h2 className="section-title">Guide Details</h2>
          <div className="guide-details-container">
            <div className="guide-details-card">
              <div className="guide-details-header">
                <h3>River Fishing</h3>
              </div>
              <div className="guide-details-content">
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
            
            <div className="guide-details-card">
              <div className="guide-details-header">
                <h3>Lake Fishing</h3>
              </div>
              <div className="guide-details-content">
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
        */}
        <div className="gallery-section content-over-bg">
          <h2 className="section-title">Trophy Reel</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <OptimizedImage src={IMG_6615} alt="Trout fishing" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={crainFlyEye} alt="Close up of a crain fly" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_5261} alt="Caught fish" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={IMG_8367} alt="Fishing spot" />
            </div>
            <div className="gallery-item">
              <OptimizedImage src={bloodyBrownTrout} alt="Brown trout catch" />
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
      <ScrollToTop />
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
