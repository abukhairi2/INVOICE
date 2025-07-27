
import React, { useState } from 'react';

function App() {
  const [guest, setGuest] = useState('');
  const [amount, setAmount] = useState('');
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div>
      <h1>Chendering Inn Invoice</h1>
      <p>Please fill in the guest and invoice details:</p>
      <input placeholder="Guest Name" value={guest} onChange={e => setGuest(e.target.value)} />
      <input placeholder="Amount (RM)" value={amount} onChange={e => setAmount(e.target.value)} type="number" />
      <button onClick={() => setShowInvoice(true)}>Generate Invoice</button>
      {showInvoice && (
        <div style={{ marginTop: 20, border: '1px solid #ccc', padding: 10 }}>
          <h2>Invoice</h2>
          <p><strong>Guest:</strong> {guest}</p>
          <p><strong>Amount:</strong> RM {amount}</p>
          <button onClick={() => window.print()}>Print</button>
        </div>
      )}
    </div>
  );
}

export default App;
