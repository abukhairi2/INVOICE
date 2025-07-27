import React, { useState } from 'react';

function App() {
  const [guestName, setGuestName] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Chendering Inn Invoice</h1>
      <div>
        <label>Guest Name: </label>
        <input value={guestName} onChange={(e) => setGuestName(e.target.value)} />
      </div>
      <div>
        <label>Amount (RM): </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={() => window.print()}>Print Invoice</button>
      <hr />
      <div style={{ border: '1px solid black', padding: '1rem', width: '21cm', height: '29.7cm' }}>
        <h2>INVOICE</h2>
        <p><strong>Guest:</strong> {guestName}</p>
        <p><strong>Amount:</strong> RM {amount}</p>
        <p><strong>Thank you for staying with us!</strong></p>
      </div>
    </div>
  );
}

export default App;