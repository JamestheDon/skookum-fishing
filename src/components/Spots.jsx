import { Link } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'

// Import all images used in the component
import IMG_9743 from '/assets/optimized/IMG_9743-preview.HEIC.webp';
import IMG_9921 from '/assets/optimized/IMG_9921.webp';
import IMG_9279 from '/assets/optimized/IMG_9279-preview.HEIC.webp';
import IMG_9180 from '/assets/optimized/IMG_9180-preview.HEIC.webp';
import IMG_0910 from '/assets/optimized/IMG_0910.HEIC.webp';
import IMG_5209 from '/assets/optimized/IMG_5209.webp';
import IMG_9238 from '/assets/optimized/IMG_9238-preview.webp';
import riverCrossing from '/assets/optimized/river-crossing.webp';
import lakeWenatcheeMorning from '/assets/optimized/lake-wenatchee-morning.webp';
import IMG_3924 from '/assets/optimized/IMG_3924-preview.HEIC.webp';
import IMG_7322 from '/assets/optimized/IMG_7322-preview.HEIC.webp';
import lavenderLake from '/assets/optimized/Lavender-Lake.webp';
import cooperLake from '/assets/optimized/Cooper-lake.webp';

function Spots() {
  const riverSpots = [
    {
      id: 1,
      name: 'Yakima River',
      description: 'Washington\'s only Blue Ribbon trout stream offering year-round fishing for rainbow and cutthroat trout. With over 75 miles of fishable water, including fast upper sections with pocket water and mountain scenery, and slower, deeper lower sections with larger fish and consistent hatches.',
      image: IMG_9743,
      details: {
        species: 'Rainbow trout, Cutthroat trout, Mountain whitefish',
        season: 'Year-round (best varies by section and season)',
        regulations: 'Catch and release, selective gear rules',
        specialSeason: 'Mountain whitefish retention allowed January-February',
        tactics: 'Dry fly fishing, nymphing, streamer fishing, indicator fishing, and other specialized techniques',
        sections: [
          { name: 'Upper Yakima', description: 'Faster water, pocket water, and beautiful mountain scenery. Best from late spring through fall.' },
          { name: 'Lower Yakima', description: 'Slower, deeper water with larger fish and more consistent hatches. Best in spring and fall.' }
        ]
      }
    }
  ]

  const lakeSpots = [
    {
      id: 1,
      name: 'Lavender Lake',
      description: 'A beautiful alpine lake surrounded by wildflowers in summer, offering excellent trout fishing.',
      image: lavenderLake,
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
      image: IMG_7322,
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
      image: cooperLake,
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
      image: lakeWenatcheeMorning,
      details: {
        species: 'Rainbow trout, Kokanee salmon, Bull trout (catch and release)',
        season: 'Year-round (best from late spring through fall)',
        regulations: 'Varies by species (check current regulations)',
        tactics: 'Trolling, jigging, casting from shore or boat'
      }
    }
  ]

  const seasonalSpots = [
    {
      id: 1,
      name: 'Spring Creek',
      description: 'A small creek that comes alive during spring runoff, offering excellent fishing for native cutthroat.',
      image: IMG_9180,
      details: {
        species: 'Cutthroat trout',
        season: 'Spring (April-June)',
        regulations: 'Catch and release, single barbless hook',
        tactics: 'Small dry flies, nymphs'
      }
    },
    {
      id: 2,
      name: 'Summer Run River',
      description: 'Known for its summer steelhead runs and beautiful canyon scenery.',
      image: IMG_0910,
      details: {
        species: 'Steelhead, Rainbow trout',
        season: 'Summer (June-September)',
        regulations: 'Selective gear rules, catch and release for wild steelhead',
        tactics: 'Swinging flies, spoons, spinners'
      }
    },
    {
      id: 3,
      name: 'Fall Salmon Creek',
      description: 'A tributary that sees significant salmon runs in the fall months.',
      image: IMG_5209,
      details: {
        species: 'Coho salmon, Chinook salmon',
        season: 'Fall (September-November)',
        regulations: 'Check current regulations for salmon retention limits',
        tactics: 'Drift fishing, fly fishing, spinners'
      }
    },
    {
      id: 4,
      name: 'Winter Steelhead Run',
      description: 'A challenging but rewarding winter fishery for dedicated anglers seeking steelhead.',
      image: IMG_9238,
      details: {
        species: 'Winter steelhead',
        season: 'Winter (December-February)',
        regulations: 'Selective gear rules, barbless hooks',
        tactics: 'Indicator nymphing, swinging flies, drift fishing'
      }
    },
    {
      id: 5,
      name: 'High Country Fishing',
      description: 'Experience pristine alpine fishing in remote mountain streams and lakes, offering a true wilderness adventure.',
      image: riverCrossing,
      details: {
        species: 'Rainbow trout, Brook trout, Cutthroat trout',
        season: 'Summer and early Fall (weather dependent)',
        regulations: 'Various regulations depending on location',
        tactics: 'Dry fly fishing, nymphing, small streamers'
      }
    }
  ]

  return (
    <>
      <section className="hero-section">
        <div className="hero-background spots-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Fishing Trips</h1>
          <p className="hero-text">Experience some of the best fishing in the Pacific Northwest</p>
        </div>
      </section>

      <div className="spots-page content-over-bg">
        <div className="container spots-content">
          <section className="spots-section">
            <h2 className="section-title">Fishing Trips</h2>
            <p className="section-description">
              From pristine rivers to alpine lakes, our guided fishing trips offer diverse angling experiences for all skill levels. Explore Washington's premier fishing destinations with our experienced guides.
            </p>
            
            <div className="spots-grid">
              {/* Yakima River Card */}
              <div className="spot-card">
                <div className="spot-image">
                  <OptimizedImage src={IMG_9743} alt="Yakima River" />
                </div>
                <div className="spot-content">
                  <h3>Yakima River</h3>
                  <p>Washington's only Blue Ribbon trout stream offering year-round fishing for rainbow and cutthroat trout.</p>
                  <div className="spot-details">
                    <div className="detail-item">
                      <span className="detail-label">Target Species:</span>
                      <span className="detail-value">Rainbow trout, Cutthroat trout, Mountain whitefish</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Season:</span>
                      <span className="detail-value">Year-round</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Regulations:</span>
                      <span className="detail-value">Catch and release, selective gear rules</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Tactics:</span>
                      <span className="detail-value">Fly fishing, drift fishing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Country Fishing Card */}
              <div className="spot-card">
                <div className="spot-image">
                  <OptimizedImage src={riverCrossing} alt="High Country Fishing" />
                </div>
                <div className="spot-content">
                  <h3>High Country Fishing</h3>
                  <p>Experience pristine alpine fishing in remote mountain streams and lakes, offering a true wilderness adventure.</p>
                  <div className="spot-details">
                    <div className="detail-item">
                      <span className="detail-label">Target Species:</span>
                      <span className="detail-value">Rainbow trout, Brook trout, Cutthroat trout</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Season:</span>
                      <span className="detail-value">Summer and early Fall</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Regulations:</span>
                      <span className="detail-value">Various regulations depending on location</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Tactics:</span>
                      <span className="detail-value">Dry fly fishing, nymphing, small streamers</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Lake Spots */}
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
              <h2>Ready to Experience These Fishing Trips?</h2>
              <p>Book a guided fishing trip with our experienced fishing guides and discover some of the best fishing in the Pacific Northwest.</p>
              <Link to="/booking" className="btn btn-primary">Book a Guide</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Spots 