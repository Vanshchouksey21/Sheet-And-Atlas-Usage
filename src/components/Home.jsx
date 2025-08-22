import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
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
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px" }}>
          Welcome to <span style={{ color: "#4A6CF7" }}>SheetInsert</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
          This project integrates <strong>MongoDB Atlas</strong> and{" "}
          <strong>Google Sheets</strong> for seamless data storage and
          management.
        </p>
        <button
         onClick={() => navigate("/insert")}
          style={{
            backgroundColor: "#4A6CF7",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#3a56c7")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4A6CF7")}
          
        >
            
        SEE DEMO
        </button>
      </div>
    </div>
  );
};

export default Home;
