import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from our API endpoint /api
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => setMessage(data))
      .catch(error => {
        console.error('Error fetching API:', error);
        setMessage('Error fetching API');
      });
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App;
