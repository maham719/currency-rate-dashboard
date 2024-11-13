"use client";
import { useState, useEffect } from "react";

type CryptoData = {
  rates: {
    [key: string]: number; 
  };
};

export default function CoinMarket() {
  const API_KEY = "1f77a513c5b29cbad1011074d33d62ed";
  const [data, setData] = useState<CryptoData | null>(null); 

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: CryptoData) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <>
      <div className="table-container">
        <h1>Cryptocurrency Rates</h1>
        <table className="table">
          <thead className="heading">
            <tr>
              <th>Currency</th>
              <th>Rate (USD)</th>
            </tr>
          </thead>
          <tbody>
            {data?.rates &&
              Object.entries(data.rates).map(([coin, rate]) => (
                <tr key={coin}>
                  <td>
                    <strong>
                      <b>{coin}</b>
                    </strong>
                  </td>
                  <td>${rate as number}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
