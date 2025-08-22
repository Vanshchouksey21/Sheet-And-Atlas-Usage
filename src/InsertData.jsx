import React, { useState, useEffect } from "react";
import axios from "axios";

const InsertData = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const handleSubmit = async () => {
    let api = "http://localhost:5001/api/update";
    try {
      let res = await axios.post(api, formData);
      console.log(res.data);
      alert("Data Submitted Successfully ✅");
      setFormData({ id: "", name: "", email: "" }); // clear form after submit
    } catch (err) {
      console.error("API error:", err.message);
      alert("Failed to submit ❌");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4A6CF7, #D5E6FB)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Insert Data Form
        </h2>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ fontWeight: "600", color: "#555" }}>
            Enter your ID:
          </label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label style={{ fontWeight: "600", color: "#555" }}>
            Enter your Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px", textAlign: "left" }}>
          <label style={{ fontWeight: "600", color: "#555" }}>
            Enter your Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4A6CF7",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
            width: "100%",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#3a56c7")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4A6CF7")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InsertData;
