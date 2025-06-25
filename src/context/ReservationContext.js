
import React, { createContext, useContext, useState } from 'react';


const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservation, setReservation] = useState({ 
    date: '', 
    time: '', 
    guests: 1,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!reservation.date) newErrors.date = 'Date is required';
    if (!reservation.time) newErrors.time = 'Time is required';
    if (reservation.guests < 1) newErrors.guests = 'At least 1 guest is required';
    if (!reservation.name) newErrors.name = 'Name is required';
    if (!reservation.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reservation.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!reservation.phone) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Reservation submitted:', reservation);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setReservation({ 
      date: '', 
      time: '', 
      guests: 1,
      name: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
    setIsSubmitted(false);
  };

  return (
    <ReservationContext.Provider value={{ 
      reservation, 
      setReservation,
      errors,
      isSubmitted,
      handleSubmit,
      handleChange,
      resetForm
    }}>
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservation = () => useContext(ReservationContext);

export function ReservationForm() {
  const { 
    reservation, 
    handleChange, 
    handleSubmit, 
    errors, 
    isSubmitted,
    resetForm
  } = useReservation();

  if (isSubmitted) {
    return (
      <div className="reservation-confirmation">
        <h2>Reservation Confirmed!</h2>
        <p>Thank you, {reservation.name}. Your table for {reservation.guests} on {reservation.date} at {reservation.time} has been reserved.</p>
        <p>A confirmation has been sent to {reservation.email}.</p>
        <button onClick={resetForm} className="reservation-button">
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservation.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={reservation.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={reservation.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={reservation.date}
              onChange={handleChange}
              className={errors.date ? 'error' : ''}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={reservation.time}
              onChange={handleChange}
              className={errors.time ? 'error' : ''}
            />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={reservation.guests}
              onChange={handleChange}
              className={errors.guests ? 'error' : ''}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
              <option value="9+">9+ (Please call)</option>
            </select>
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="specialRequests">Special Requests (Optional)</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={reservation.specialRequests}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="reservation-button">
          Reserve Now
        </button>
      </form>
    </div>
  );
}