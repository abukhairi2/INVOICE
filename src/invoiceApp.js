import React, { useState } from "react";
import "./invoiceApp.css";

const InvoiceApp = () => {
  const [guestName, setGuestName] = useState("");
  const [amount, setAmount] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-container">
      <div className="form-section no-print">
        <label>Guest Name:</label>
        <input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <label>Amount (RM):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => setShowInvoice(true)}>Generate Invoice</button>
      </div>

      {showInvoice && (
        <div className="invoice">
          <div className="header">
            <img src="logo.png" alt="Logo" className="logo" />
            <div className="company-info">
              <h2>INVOICE</h2>
              <p>Chendering Inn</p>
              <p>3283, Taman Chendering Heights</p>
              <p>21080 Kuala Terengganu, Terengganu</p>
              <p>Phone: 012-922-1334</p>
            </div>
            <div className="invoice-meta">
              <p><strong>Invoice #:</strong> CI2025-001</p>
              <p><strong>Invoice Date:</strong> 2025-07-27</p>
              <p><strong>Due Date:</strong> 2025-08-26</p>
              <p><strong>Terms:</strong> Net 30</p>
            </div>
          </div>

          <div className="bill-to">
            <strong>Bill To:</strong> {guestName}
          </div>

          <table className="invoice-table">
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

          <div className="totals">
            <p><strong>Subtotal:</strong> RM{amount * 2}</p>
            <p><strong>Tax (0%):</strong> RM0</p>
            <p><strong>TOTAL:</strong> RM{amount * 2}</p>
          </div>

          <div className="terms">
            <strong>Terms & Conditions</strong>
            <p>Payment is due within 30 days of invoice date.</p>
            <p>Please make cheques payable to Chendering Inn.</p>
            <p>Thank you for your business!</p>
          </div>

          <div className="no-print">
            <button onClick={handlePrint}>Print Invoice</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceApp;
