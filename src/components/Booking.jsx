import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import OptimizedImage from './OptimizedImage'
import IMG_9709 from '/assets/optimized/IMG_9709-preview.HEIC.webp';
import IMG_7322 from '/assets/optimized/IMG_7322-preview.HEIC.webp';
import IMG_3924 from '/assets/optimized/IMG_3924-preview.HEIC.webp';
import IMG_9965 from '/assets/optimized/IMG_9965.webp';

function Booking() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guideType: 'river',
    groupSize: '1',
    experience: 'beginner',
    preferences: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    // Get the guide type text for the email
    const guideTypeText = {
      'river': 'Yakima River Trout',
      'whitefish': 'Yakima River Whitefish (Jan-Feb)',
      'alpine': 'Alpine Lakes',
      'lavender': 'Lavender Lake',
      'cleelum': 'Lake Cle-Elum',
      'cooper': 'Cooper Lake',
      'wenatchee': 'Lake Wenatchee'
    }[formData.guideType];
    
    // Get the experience level text
    const experienceText = {
      'beginner': 'Beginner',
      'intermediate': 'Intermediate',
      'advanced': 'Advanced'
    }[formData.experience];
    
    // Get the group size text
    const groupSizeText = formData.groupSize === '5' ? '5+ People' : `${formData.groupSize} ${formData.groupSize === '1' ? 'Person' : 'People'}`;
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      date: formData.date,
      guide_type: guideTypeText,
      group_size: groupSizeText,
      experience: experienceText,
      preferences: formData.preferences,
      has_preferences: formData.preferences.trim().length > 0,
      reply_to: formData.email
    };
    console.log(import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID)
    // Send the email using EmailJS
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from environment variables
      import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID, // Notification template ID from environment variables
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key from environment variables
    )
    .then((result) => {
      console.log('Notification email sent successfully:', result.text);
      
      // Send confirmation email to the customer
      return emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from environment variables
        import.meta.env.VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID, // Confirmation template ID from environment variables
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key from environment variables
      );
    })
    .then((result) => {
      console.log('Confirmation email sent successfully:', result.text);
      setFormSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          guideType: 'river',
          groupSize: '1',
          experience: 'beginner',
          preferences: ''
        })
      }, 5000)
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setSubmitError('Failed to send your booking request. Please try again or contact us directly.');
      setIsSubmitting(false);
    });
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-background booking-hero"></div>
        <div className="hero-content">
          <h1 className="hero-title">Book a Guided Fishing Trip</h1>
          <p className="hero-text">Experience the best fishing spots with our expert guides</p>
        </div>
      </section>

      <div className="container content-over-bg">
        <div className="booking-container">
          <div className="booking-form-container">
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h2>Thank You!</h2>
                <p>Your booking request has been submitted successfully. We'll contact you shortly to confirm your reservation. A confirmation email has been sent to {formData.email}.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="booking-form">
                <h2 className="form-title">Reservation Details</h2>
                
                {submitError && (
                  <div className="error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                    {submitError}
                  </div>
                )}
                
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
                    <label htmlFor="guideType">
                      <span className="form-icon">🎣</span> Guide Type
                    </label>
                    <select
                      id="guideType"
                      name="guideType"
                      value={formData.guideType}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="river">Yakima River Trout</option>
                      <option value="whitefish">Yakima River Whitefish (Jan-Feb)</option>
                      <option value="alpine">Alpine Lakes</option>
                      <option value="lavender">Lavender Lake</option>
                      <option value="cleelum">Lake Cle-Elum</option>
                      <option value="cooper">Cooper Lake</option>
                      <option value="wenatchee">Lake Wenatchee</option>
                    </select>
                  </div>

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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="experience">
                      <span className="form-icon">📊</span> Experience Level
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
                    placeholder="Tell us about any special requirements, preferred fishing techniques, or equipment needs..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span className="button-icon">📨</span> Request Booking
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="booking-info">
            <h2>Guide Information</h2>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">🎯</span>
                <h3>Guide Options</h3>
              </div>
              <ul>
                <li><strong>River Guides:</strong> Yakima River fishing for rainbow and cutthroat trout (year-round, catch and release)</li>
                <li><strong>Seasonal Whitefish:</strong> Target mountain whitefish with retention allowed (Jan-Feb)</li>
                <li><strong>Lake Guides:</strong> Various locations from alpine lakes to reservoirs with different species available</li>
              </ul>
            </div>
            
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
                <li>Multiple fishing tactics based on conditions</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">ℹ️</span>
                <h3>Important Notes</h3>
              </div>
              <ul>
                <li>Guided trips are available year-round with seasonal specialties</li>
                <li>Suitable for all skill levels</li>
                <li>48-hour cancellation policy</li>
                <li>Weather-dependent scheduling</li>
                <li>River fishing is catch and release with selective gear rules</li>
                <li>Lake fishing often allows retention of fish (limits apply)</li>
              </ul>
            </div>
            
            <div className="info-card">
              <div className="info-card-header">
                <span className="info-icon">📸</span>
                <h3>Gallery</h3>
              </div>
              <div className="info-gallery">
                <OptimizedImage src={IMG_9709} alt="Trout fishing" />
                <OptimizedImage src={IMG_7322} alt="Fishing adventure" />
                <OptimizedImage src={IMG_3924} alt="Fishing spot" />
                <OptimizedImage src={IMG_9965} alt="Caught fish" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking 