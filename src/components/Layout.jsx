import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <div>
      <nav className="nav">
        <div className="container nav-content">
          <h1 className="nav-brand">Skookum Fishing</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/spots">Fishing Spots</Link>
            <Link to="/booking">Book a Tour</Link>
          </div>
        </div>
      </nav>
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout 