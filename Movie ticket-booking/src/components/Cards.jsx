import React from "react";

const Cards = ({ onBook, onView, onMovies, onCancel }) => {
  return (
    <section className="cards">
      <div className="card">
        <div className="icon">🎟️</div>
        <h3>Book Tickets</h3>
        <p>Choose your movie and reserve your seats instantly</p>
        <button className="btn primary" onClick={onBook}>
          Book Now
        </button>
      </div>

      <div className="card">
        <div className="icon">👁️</div>
        <h3>View Tickets</h3>
        <p>Check your bookings and download e-tickets</p>
        <button className="btn" onClick={onView}>
          View Details
        </button>
      </div>

      <div className="card">
        <div className="icon">🎬</div>
        <h3>Available Movies</h3>
        <p>Browse all currently showing films</p>
        <button className="btn" onClick={onMovies}>
          Browse Movies
        </button>
      </div>

      <div className="card">
        <div className="icon">❌</div>
        <h3>Cancel Tickets</h3>
        <p>Easy cancellation and instant refunds</p>
        <button className="btn" onClick={onCancel}>
          Cancel Booking
        </button>
      </div>
    </section>
  );
};

export default Cards;
