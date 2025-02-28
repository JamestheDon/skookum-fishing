import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Import using a different approach
// import logoImage from '../assets/optimized/bluefish-with-stars.webp'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" onClick={closeMobileMenu}>
            <img 
              src="/logo-fish.webp" 
              alt="Skookum Fishing Logo" 
              className="navbar-logo" 
              onError={(e) => {
                console.error('Error loading logo image');
                e.target.style.display = 'none';
              }}
            />
          </Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link 
            to="/spots" 
            className={`nav-link ${location.pathname === '/spots' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Fishing Spots
          </Link>
          <Link 
            to="/booking" 
            className={`nav-link ${location.pathname === '/booking' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Book a Tour
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 