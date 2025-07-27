import React, { useState } from "react";
import "./App.css";

function App() {
  const [guest, setGuest] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <div style={{ backgroundColor: "#003366", color: "white", padding: "20px" }}>
        <h2>INVOICE</h2>
        <p>Chendering Inn</p>
        <p>3283, Taman Chendering Heights</p>
        <p>21080 Kuala Terengganu, Terengganu</p>
        <p>Phone: 012-922-1334</p>
      </div>
      <br />
      <label>Bill To:</label><br />
      <input type="text" value={guest} onChange={(e) => setGuest(e.target.value)} placeholder="Guest Name" />
      <br /><br />
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>QTY</th>
            <th>DESCRIPTION</th>
            <th>UNIT PRICE (RM)</th>
            <th>AMOUNT (RM)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Room charge (2 nights)</td>
            <td>{amount}</td>
            <td>{amount * 2}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <strong>Subtotal:</strong> RM{amount * 2} <br />
      <strong>Tax (0%):</strong> RM0 <br />
      <strong>TOTAL:</strong> RM{amount * 2} <br /><br />
      <p><strong>Terms & Conditions</strong><br />
      Payment is due within 30 days of invoice date.<br />
      Please make cheques payable to Chendering Inn.<br />
      Thank you for your business!</p>
      <button onClick={() => window.print()}>Print Invoice</button>
    </div>
  );
}

export default App;