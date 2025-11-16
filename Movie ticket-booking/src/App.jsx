import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";
import BookingForm from "./components/BookingForm.jsx";
import "./App.css";

function App() {
  const [movies, setMovies] = useState({
    Inception: { tickets: 50, price: 150 },
    Interstellar: { tickets: 40, price: 180 },
    Oppenheimer: { tickets: 30, price: 200 },
    Dirtypitcure: { tickets: 34, price: 69 },
  });

  // bookings will store object like:
  // { movieName: { name, phone, count, price } }
  const [bookings, setBookings] = useState({});
  const [showForm, setShowForm] = useState(false);

  // BILL UI
  const [billData, setBillData] = useState(null);

  // MOVIES UI
  const [showMoviesUI, setShowMoviesUI] = useState(false);

  // ------------------------------------------------------------------------------------

  const handleBooking = (name, phone, movie, count) => {
    if (!movies[movie]) {
      alert("❌ Movie not found!");
      return;
    }
    if (count > movies[movie].tickets) {
      alert("❌ Not enough tickets available!");
      return;
    }

    const updatedMovies = { ...movies };
    updatedMovies[movie].tickets -= count;

    const updatedBookings = { ...bookings };

    updatedBookings[movie] = {
      count: (updatedBookings[movie]?.count || 0) + count,
      name,
      phone,
      price: movies[movie].price,
    };

    setMovies(updatedMovies);
    setBookings(updatedBookings);
    setShowForm(false);

    alert(
      `✅ ${count} tickets booked for ${movie}!\nTotal cost = ₹${
        count * movies[movie].price
      }\nThank you ${name}!`
    );
  };

  // BILL UI OPEN
  const viewTickets = () => {
    if (Object.keys(bookings).length === 0) {
      alert("❌ No bookings yet.");
      return;
    }
    setBillData({ bookings });
  };

  // MOVIES UI OPEN
  const showMovies = () => {
    setShowMoviesUI(true);
  };

  const cancelTickets = () => {
    if (Object.keys(bookings).length === 0) {
      alert("❌ No bookings yet.");
      return;
    }

    const movie = prompt("Enter movie name to cancel:").trim();
    if (!bookings[movie]) {
      alert("❌ You have not booked this movie.");
      return;
    }

    const cancelCount = parseInt(prompt("Enter number of tickets to cancel:"));
    if (isNaN(cancelCount) || cancelCount <= 0) {
      alert("❌ Invalid number entered!");
      return;
    }

    if (cancelCount > bookings[movie].count) {
      alert("❌ You can't cancel more than booked.");
      return;
    }

    const updatedBookings = { ...bookings };
    const updatedMovies = { ...movies };

    updatedBookings[movie].count -= cancelCount;
    updatedMovies[movie].tickets += cancelCount;

    if (updatedBookings[movie].count === 0) {
      delete updatedBookings[movie];
    }

    setBookings(updatedBookings);
    setMovies(updatedMovies);

    alert(`✅ ${cancelCount} tickets cancelled for ${movie}`);
  };

  // ------------------------------------------------------------------------------------

  return (
    <>
      <Hero />

      {/* BILL UI */}
      {billData && (
        <div className="bill-container">
          <h2>🎟️ Your Booking Summary</h2>

          <div className="bill-box">
            {Object.keys(billData.bookings).map((movie) => {
              const b = billData.bookings[movie];
              return (
                <div key={movie} className="bill-item">
                  <strong>🎬 Movie:</strong> {movie} <br />
                  <strong>👤 Name:</strong> {b.name} <br />
                  <strong>📞 Phone:</strong> {b.phone} <br />
                  <strong>🎟️ Tickets:</strong> {b.count} <br />
                  <strong>💰 Total:</strong> ₹{b.count * b.price}
                </div>
              );
            })}
          </div>

          <button className="btn" onClick={() => setBillData(null)}>
            Close
          </button>
        </div>
      )}

      {/* MOVIES UI */}
      {showMoviesUI && (
        <div className="bill-container">
          <h2>🎬 Now Showing</h2>

          <div className="movies-row">
            {Object.keys(movies).map((movie) => (
              <div key={movie} className="movie-card">
                <strong>{movie}</strong> <br />
                Tickets Left: {movies[movie].tickets} <br />
                Price: ₹{movies[movie].price}
              </div>
            ))}
          </div>

          <button className="btn" onClick={() => setShowMoviesUI(false)}>
            Close
          </button>
        </div>
      )}

      {/* MAIN UI */}
      {!showForm ? (
        <Cards
          onBook={() => setShowForm(true)}
          onView={viewTickets}
          onMovies={showMovies}
          onCancel={cancelTickets}
        />
      ) : (
        <BookingForm
          movies={movies}
          onSubmit={handleBooking}
          onCancel={() => setShowForm(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
