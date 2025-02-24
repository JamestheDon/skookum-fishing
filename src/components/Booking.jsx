import { useState } from 'react'
import OptimizedImage from './OptimizedImage'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    groupSize: '1',
    experience: 'beginner',
    preferences: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement booking submission
    console.log('Booking submitted:', formData)
    setFormSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        groupSize: '1',
        experience: 'beginner',
        preferences: ''
      })
    }, 5000)
  }

  return (
    <>
      <div className="hero-background booking-hero"></div>
      <div className="booking-page">
        <div className="hero-content">
          <h1 className="hero-title">Book a Guided Fishing Tour</h1>
          <p className="hero-text">Experience the best fishing spots with our expert guides</p>
        </div>

        <div className="container">
          <div className="booking-container">
            <div className="booking-form-container">
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h2>Thank You!</h2>
                  <p>Your booking request has been submitted successfully. We'll contact you shortly to confirm your reservation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="booking-form">
                  <h2 className="form-title">Reservation Details</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        <span className="form-icon">👤</span> Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <span className="form-icon">✉️</span> Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">
                        <span className="form-icon">📞</span> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="date">
                        <span className="form-icon">📅</span> Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="groupSize">
                        <span className="form-icon">👥</span> Group Size
                      </label>
                      <select
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5+ People</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="experience">
                        <span className="form-icon">🎣</span> Experience Level
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="preferences">
                      <span className="form-icon">📝</span> Special Requests or Preferences
                    </label>
                    <textarea
                      id="preferences"
                      name="preferences"
                      value={formData.preferences}
                      onChange={handleChange}
                      className="form-input"
                      rows="4"
                      placeholder="Tell us about any special requirements or preferences..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    <span className="button-icon">📨</span> Request Booking
                  </button>
                </form>
              )}
            </div>

            <div className="booking-info">
              <h2>Tour Information</h2>
              
              <div className="info-card">
                <div className="info-card-header">
                  <span className="info-icon">✅</span>
                  <h3>What's Included</h3>
                </div>
                <ul>
                  <li>Professional fishing guide</li>
                  <li>All necessary equipment</li>
                  <li>Safety gear</li>
                  <li>Fishing license for the day</li>
                  <li>Light refreshments</li>
                </ul>
              </div>
              
              <div className="info-card">
                <div className="info-card-header">
                  <span className="info-icon">ℹ️</span>
                  <h3>Important Notes</h3>
                </div>
                <ul>
                  <li>Tours are available year-round</li>
                  <li>Suitable for all skill levels</li>
                  <li>48-hour cancellation policy</li>
                  <li>Weather-dependent scheduling</li>
                </ul>
              </div>
              
              <div className="info-card">
                <div className="info-card-header">
                  <span className="info-icon">📸</span>
                  <h3>Gallery</h3>
                </div>
                <div className="info-gallery">
                  <OptimizedImage src="/src/assets/optimized/IMG_9709-preview.HEIC.webp" alt="Trout fishing" />
                  <OptimizedImage src="/src/assets/optimized/IMG_7322-preview.HEIC.webp" alt="Fishing adventure" />
                  <OptimizedImage src="/src/assets/optimized/IMG_3924-preview.HEIC.webp" alt="Fishing spot" />
                  <OptimizedImage src="/src/assets/optimized/IMG_9965.webp" alt="Caught fish" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking 