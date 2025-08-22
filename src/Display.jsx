import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fd = async () => {
      try {
        const api = "http://localhost:5001/api/check";
        const res = await axios.get(api);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fd();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4A6CF7, #D5E6FB)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          padding: "30px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Database Records
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#4A6CF7", color: "#fff" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr
                key={e._id || i}
                style={{
                  backgroundColor: i % 2 === 0 ? "#f9f9f9" : "#fff",
                  transition: "0.3s",
                }}
                onMouseOver={(row) =>
                  (row.currentTarget.style.backgroundColor = "#eef3ff")
                }
                onMouseOut={(row) =>
                  (row.currentTarget.style.backgroundColor =
                    i % 2 === 0 ? "#f9f9f9" : "#fff")
                }
              >
                <td style={tdStyle}>{e.id}</td>
                <td style={tdStyle}>{e.name}</td>
                <td style={tdStyle}>{e.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 🎨 Styles for table cells
const thStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: "16px",
};

const tdStyle = {
  padding: "12px 15px",
  textAlign: "left",
  fontSize: "15px",
  color: "#333",
  borderBottom: "1px solid #ddd",
};

export default Display;
