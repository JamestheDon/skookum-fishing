import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'

function Spots() {
  const riverSpots = [
    {
      id: 1,
      name: 'Yakima River',
      description: 'A premier blue-ribbon trout stream offering year-round fishing opportunities for rainbow and cutthroat trout.',
      image: '/src/assets/optimized/IMG_9743-preview.HEIC.webp',
      details: {
        species: 'Rainbow trout, Cutthroat trout, Mountain whitefish',
        season: 'Year-round',
        regulations: 'Catch and release, selective gear rules',
        specialSeason: 'Mountain whitefish retention allowed January-February',
        tactics: 'Fly fishing, drift fishing, and other specialized techniques'
      }
    },
    {
      id: 2,
      name: 'Upper Yakima',
      description: 'The upper section of the Yakima River features faster water, pocket water, and beautiful mountain scenery.',
      image: '/src/assets/optimized/IMG_9780-preview.HEIC.webp',
      details: {
        species: 'Rainbow trout, Cutthroat trout',
        season: 'Year-round (best from late spring through fall)',
        regulations: 'Catch and release, selective gear rules',
        tactics: 'Dry fly fishing, nymphing, streamer fishing'
      }
    },
    {
      id: 3,
      name: 'Lower Yakima',
      description: 'The lower section offers slower, deeper water with larger fish and more consistent hatches.',
      image: '/src/assets/optimized/IMG_9921.webp',
      details: {
        species: 'Rainbow trout, Cutthroat trout, Mountain whitefish',
        season: 'Year-round (best in spring and fall)',
        regulations: 'Catch and release, selective gear rules',
        tactics: 'Nymphing, dry fly fishing, indicator fishing'
      }
    }
  ]

  const lakeSpots = [
    {
      id: 1,
      name: 'Lavender Lake',
      description: 'A beautiful alpine lake surrounded by wildflowers in summer, offering excellent trout fishing.',
      image: '/src/assets/optimized/IMG_9279-preview.HEIC.webp',
      details: {
        species: 'Rainbow trout, Brook trout',
        season: 'Late spring through fall',
        regulations: 'Retention allowed (check current limits)',
        tactics: 'Still fishing, trolling, fly fishing from shore or float tube'
      }
    },
    {
      id: 2,
      name: 'Lake Cle-Elum',
      description: 'A large reservoir with diverse fishing opportunities for trout and kokanee salmon.',
      image: '/src/assets/optimized/IMG_9965.webp',
      details: {
        species: 'Rainbow trout, Kokanee salmon, Cutthroat trout',
        season: 'Year-round (best from spring through fall)',
        regulations: 'Retention allowed (check current limits)',
        tactics: 'Trolling, jigging, casting from shore'
      }
    },
    {
      id: 3,
      name: 'Cooper Lake',
      description: 'A scenic mountain lake offering solitude and quality trout fishing.',
      image: '/src/assets/optimized/IMG_3924-preview.HEIC.webp',
      details: {
        species: 'Rainbow trout, Cutthroat trout',
        season: 'Late spring through fall',
        regulations: 'Retention allowed (check current limits)',
        tactics: 'Fly fishing, spinning gear, trolling'
      }
    },
    {
      id: 4,
      name: 'Lake Wenatchee',
      description: 'A large alpine lake known for its beautiful setting and excellent fishing for trout and kokanee.',
      image: '/src/assets/optimized/IMG_7322-preview.HEIC.webp',
      details: {
        species: 'Rainbow trout, Kokanee salmon, Bull trout (catch and release)',
        season: 'Year-round (best from late spring through fall)',
        regulations: 'Varies by species (check current regulations)',
        tactics: 'Trolling, jigging, casting from shore or boat'
      }
    }
  ]

  return (
    <>
      <section className="hero-section">
        <div className="hero-background spots-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Fishing Spots</h1>
          <p className="hero-text">Discover the best fishing locations in the Pacific Northwest</p>
        </div>
      </section>

      <div className="spots-page content-over-bg">
        <div className="container spots-content">
          <section className="spots-section">
            <h2 className="section-title">River Fishing</h2>
            <p className="section-description">
              The Yakima River is Washington's only Blue Ribbon trout stream, offering world-class fishing for wild rainbow and cutthroat trout. With over 75 miles of fishable water, the Yakima provides diverse angling opportunities year-round.
            </p>
            
            <div className="spots-grid">
              {riverSpots.map(spot => (
                <div key={spot.id} className="spot-card">
                  <div className="spot-image">
                    <OptimizedImage src={spot.image} alt={spot.name} />
                  </div>
                  <div className="spot-content">
                    <h3>{spot.name}</h3>
                    <p>{spot.description}</p>
                    <div className="spot-details">
                      <div className="detail-item">
                        <span className="detail-label">Target Species:</span>
                        <span className="detail-value">{spot.details.species}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Season:</span>
                        <span className="detail-value">{spot.details.season}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Regulations:</span>
                        <span className="detail-value">{spot.details.regulations}</span>
                      </div>
                      {spot.details.specialSeason && (
                        <div className="detail-item">
                          <span className="detail-label">Special Season:</span>
                          <span className="detail-value">{spot.details.specialSeason}</span>
                        </div>
                      )}
                      <div className="detail-item">
                        <span className="detail-label">Tactics:</span>
                        <span className="detail-value">{spot.details.tactics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="spots-section">
            <h2 className="section-title">Lake Fishing</h2>
            <p className="section-description">
              From alpine lakes to roadside gravel ponds and reservoirs, our region offers a wide variety of lake fishing opportunities. Many lakes allow fish retention, making them perfect for anglers looking to bring home dinner.
            </p>
            
            <div className="spots-grid">
              {lakeSpots.map(spot => (
                <div key={spot.id} className="spot-card">
                  <div className="spot-image">
                    <OptimizedImage src={spot.image} alt={spot.name} />
                  </div>
                  <div className="spot-content">
                    <h3>{spot.name}</h3>
                    <p>{spot.description}</p>
                    <div className="spot-details">
                      <div className="detail-item">
                        <span className="detail-label">Target Species:</span>
                        <span className="detail-value">{spot.details.species}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Season:</span>
                        <span className="detail-value">{spot.details.season}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Regulations:</span>
                        <span className="detail-value">{spot.details.regulations}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Tactics:</span>
                        <span className="detail-value">{spot.details.tactics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="cta-section">
            <div className="cta-container">
              <h2>Ready to Experience These Fishing Spots?</h2>
              <p>Book a guided tour with our experienced fishing guides and discover the best fishing spots in the Pacific Northwest.</p>
              <Link to="/booking" className="btn btn-primary">Book a Tour</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Spots 