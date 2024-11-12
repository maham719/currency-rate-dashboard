"use client";
import { useState, useEffect } from "react";

interface CoinData {
  rates: { [key: string]: number };
}

export default function CoinMarket() {
  const API_KEY = "1f77a513c5b29cbad1011074d33d62ed"; 
  const [data, setData] = useState<CoinData | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Cryptocurrency Rates</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "15px",
        }}
      >
        {data?.rates &&
          Object.entries(data.rates).map(([coin, rate]) => (
            <div
              key={coin}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ margin: "0 0 5px" }}>{coin}</h2>
              <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                ${rate as number}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
