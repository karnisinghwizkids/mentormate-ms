import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      navigate('/dashboard');
    } else {
      alert(data.message || 'Login failed');
    }
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #f7b267, #f79d84, #a774bc, #452a4d)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 15s ease infinite',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#fff'
    }}>
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }
          input:focus {
            outline: none;
            border-color: #fff;
          }
        `}
      </style>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '30px',
        borderRadius: '16px',
        width: '90%',
        maxWidth: '360px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Login to your Account</h2>
        <p style={{ marginBottom: '20px', fontSize: '0.9rem', opacity: 0.8 }}>Welcome back, please enter your details</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '999px',
              marginBottom: '15px',
              backgroundColor: '#000',
              border: '1px solid #333',
              color: '#fff'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '999px',
              marginBottom: '10px',
              backgroundColor: '#000',
              border: '1px solid #333',
              color: '#fff'
            }}
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            marginBottom: '20px'
          }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={keepLoggedIn}
                onChange={(e) => setKeepLoggedIn(e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Keep me logged in
            </label>
            <a href="#" style={{ color: '#fbb' }}>Forgot Password?</a>
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            borderRadius: '999px',
            background: 'linear-gradient(to right, #f78fb3, #fbcaa2)',
            border: 'none',
            color: '#000',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
