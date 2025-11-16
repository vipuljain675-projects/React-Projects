import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ movies, onSubmit, onCancel }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [movie, setMovie] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !movie || count <= 0) {
      alert("❌ Please fill all fields correctly.");
      return;
    }
    onSubmit(name, phone, movie, parseInt(count));
  };

  return (
    <div className="booking-container">
      <h2>🎟️ Reserve Your Seat</h2>
      <p>Fill in your details to book your movie ticket</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label>Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 9876543210"
        />

        <label>Select Movie *</label>
        <select value={movie} onChange={(e) => setMovie(e.target.value)}>
          <option value="">Choose a movie</option>
          {Object.keys(movies).map((m) => (
            <option key={m} value={m}>
              {m} ({movies[m].tickets} left)
            </option>
          ))}
        </select>

        <label>Tickets *</label>
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <div className="buttons">
          <button type="submit" className="btn primary">
            Confirm Booking
          </button>
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
