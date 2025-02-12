import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTrains } from "../api";

const TrainList = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [trains, setTrains] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(`Fetching trains between ${source} and ${destination}`);
      const response = await getTrains(source, destination);
      setTrains(response.data);
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className="container">
      <h2>Check Trains</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Display trains or a "No trains available" message */}
      {trains.length > 0 ? (
        <ul>
          {trains.map((train) => (
            <li key={train.id}>
              <strong>{train.name}</strong> - Seats Available:{" "}
              {train.availableSeats}
              <button
                onClick={() =>
                  navigate(
                    `/book?trainId=${train.id}&source=${source}&destination=${destination}`
                  )
                }
              >
                Book Now
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No trains available between {source} and {destination}.
        </p>
      )}
    </div>
  );
};

export default TrainList;
