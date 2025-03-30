import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <Navbar />
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
                <Link to="/spots">Fishing Trips</Link>
                <Link to="/booking">Book a Trip</Link>
                {/* E-commerce links commented out
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
                */}
              </div>
              <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: skookum-fishing@gmail.com</p>
                <p>Phone: (509) 260-0327</p>
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