import React, { useState } from "react";
import { addTrain } from "../api";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [trainData, setTrainData] = useState({
    name: "",
    source: "",
    destination: "",
    totalSeats: "",
  });
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setTrainData({ ...trainData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrain(trainData, token);
      alert("Train added successfully!");
      setTrainData({ name: "", source: "", destination: "", totalSeats: "" });
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || "Something went wrong"}`);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Train Name"
          value={trainData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="source"
          placeholder="Source Station"
          value={trainData.source}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination Station"
          value={trainData.destination}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalSeats"
          placeholder="Total Seats"
          value={trainData.totalSeats}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Train</button>
      </form>
    </div>
  );
};

export default AdminPanel;
