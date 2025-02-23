import { useState } from 'react'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    groupSize: '1',
    experience: 'beginner',
    preferences: ''
  })

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
    alert('Thank you for your booking request! We will contact you soon.')
  }

  return (
    <div className="booking-page">
      <div className="hero-background">
        <div className="hero-content">
          <h1 className="hero-title">Book a Guided Fishing Tour</h1>
          <p className="hero-text">Experience the best fishing spots with our expert guides</p>
        </div>
      </div>

      <div className="booking-container">
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
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

          <div className="form-group">
            <label htmlFor="groupSize">Group Size</label>
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
            <label htmlFor="experience">Experience Level</label>
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

          <div className="form-group">
            <label htmlFor="preferences">Special Requests or Preferences</label>
            <textarea
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              className="form-input"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Request Booking
          </button>
        </form>

        <div className="booking-info">
          <h2>Tour Information</h2>
          <div className="info-card">
            <h3>What's Included</h3>
            <ul>
              <li>Professional fishing guide</li>
              <li>All necessary equipment</li>
              <li>Safety gear</li>
              <li>Fishing license for the day</li>
              <li>Light refreshments</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Important Notes</h3>
            <ul>
              <li>Tours are available year-round</li>
              <li>Suitable for all skill levels</li>
              <li>48-hour cancellation policy</li>
              <li>Weather-dependent scheduling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking 