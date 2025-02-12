import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { bookSeat } from "../api";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [trainId, setTrainId] = useState(queryParams.get("trainId"));
  const [source, setSource] = useState(queryParams.get("source"));
  const [destination, setDestination] = useState(
    queryParams.get("destination")
  );
  const [seatsToBook, setSeatsToBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Get the JWT token
      const seatsBooked = parseInt(seatsToBook, 10);

      if (!seatsBooked || seatsBooked <= 0) {
        alert("Please enter a valid number of seats.");
        return;
      }

      await bookSeat({ trainId, seatsBooked }, token); // Call the Booking API
      alert("Seats booked successfully!");
      navigate("/trains"); // Redirect back to the trains page
    } catch (error) {
      // Handle errors gracefully
      console.error("Booking Error:", error); // Log the error for debugging
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className="container">
      <h2>Book Seats</h2>
      <p>
        <strong>Train ID:</strong> {trainId}
      </p>
      <p>
        <strong>Route:</strong> {source} → {destination}
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Number of Seats:
          <input
            type="number"
            value={seatsToBook}
            onChange={(e) => setSeatsToBook(e.target.value)}
            required
          />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
