import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-logo">
            <img 
              src="/logo-fish.webp" 
              alt="Skookum Fishing Logo" 
              className="navbar-logo" 
              onError={(e) => {
                console.error('Error loading logo image');
                e.target.style.display = 'none';
              }}
            />
            <span className="company-name">Skookum Fishing</span>
          </Link>
          
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/spots" className={`nav-link ${isActive('/spots')}`} onClick={() => setMobileMenuOpen(false)}>Fishing Spots</Link>
            <Link to="/booking" className={`nav-link ${isActive('/booking')}`} onClick={() => setMobileMenuOpen(false)}>Book a Tour</Link>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h2>Skookum Fishing</h2>
              <p>Discover the best fishing spots in the Pacific Northwest</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h3>Navigation</h3>
                <Link to="/">Home</Link>
                <Link to="/spots">Fishing Spots</Link>
                <Link to="/booking">Book a Tour</Link>
              </div>
              <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: info@skookumfishing.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Skookum Fishing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 