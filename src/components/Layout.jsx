import { useState } from 'react'
import { Link } from 'react-router-dom'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="layout">
      <nav className="nav">
        <div className="container nav-content">
          <Link to="/" className="nav-brand-link">
            <h1 className="nav-brand">Skookum Fishing</h1>
          </Link>
          
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/spots" onClick={() => setMobileMenuOpen(false)}>Fishing Spots</Link>
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>Book a Tour</Link>
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