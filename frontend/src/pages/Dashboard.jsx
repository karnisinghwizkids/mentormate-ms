import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [gurukulas, setGurukulas] = useState([]);

  useEffect(() => {
    fetch('/api/gurukulas') // Uses proxy to avoid CORS
      .then(res => res.json())
      .then(data => setGurukulas(data))
      .catch(err => console.error('Error loading gurukulas:', err));
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      background: 'linear-gradient(to bottom right, #f7b267, #f79d84, #a774bc, #452a4d)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#fff',
    }}>
      <h2 style={{ marginBottom: '10px' }}>Welcome, Mentor!</h2>
      <p style={{ marginBottom: '30px', opacity: 0.9 }}>Here are your assigned Gurukulas:</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}>
        {gurukulas.map(g => (
          <Link to={`/students/${g.id}`} key={g.id} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '16px',
              padding: '20px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              color: '#fff',
              transition: 'transform 0.3s ease',
            }}>
              <h3 style={{ color: '#ffdc91', marginBottom: '10px' }}>{g.name}</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Click to view students →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
