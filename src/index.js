
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => (
  <div className="invoice">
    <header>
      <div className="branding">
        <img src="https://i.imgur.com/AFnGv4X.png" alt="Logo" className="logo"/>
        <div>
          <h2>Chendering Inn</h2>
          <p>3283, Taman Chendering Heights<br/>21080 Kuala Terengganu, Terengganu<br/>Phone: 012-922 1334</p>
        </div>
      </div>
      <h1>INVOICE</h1>
      <div className="invoice-details">
        <p><strong>Invoice #:</strong> CI2025-001</p>
        <p><strong>Invoice Date:</strong> 2025-07-27</p>
        <p><strong>Due Date:</strong> 2025-08-26</p>
        <p><strong>Terms:</strong> Net 30</p>
      </div>
    </header>
    <section className="bill-to">
      <strong>Bill To</strong>
    </section>
    <table className="invoice-table">
      <thead>
        <tr>
          <th>QTY</th><th>DESCRIPTION</th><th>UNIT PRICE (RM)</th><th>AMOUNT (RM)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Room Charges</td><td>100</td><td>100</td></tr>
      </tbody>
    </table>
    <div className="totals">
      <p><strong>Subtotal:</strong> RM 100</p>
      <p><strong>Tax (0%):</strong> RM 0</p>
      <p><strong>TOTAL:</strong> RM 100</p>
    </div>
    <footer>
      <strong>Terms & Conditions</strong>
      <p>Payment is due within 30 days of invoice date.<br/>Please make cheques payable to Chendering Inn.<br/>Thank you for your business!</p>
    </footer>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
