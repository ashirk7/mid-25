import React, { useState, useEffect } from 'react';

const CountdownLightSwitch = () => {
  const [theme, setTheme] = useState('dark'); 
  const [seconds, setSeconds] = useState(30);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.className = theme; 
  }, [theme]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(prev => prev - 1);
        setProgress(((30 - (seconds - 1)) / 30) * 100);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Countdown Light Switch</h1>
          <div className="toggle-container">
            <label className="toggle-switch">
              <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
              <span className="slider"></span>
            </label>
            <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
          </div>
        </div>

        <div className="timer-section">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="timer">{seconds}s</div>
        </div>
      </div> 
      <style>{` 
        :root {
          --bg-color: #1e1e1e;
          --text-color: #f1f1f1;
          --accent-color: #4caf50;
          --container-bg: #2a2a2a;
          --btn-bg: #4caf50;
          --btn-hover: #45a049;
        }
        body.light {
          --bg-color: #f8f8f8;
          --text-color: #333;
          --accent-color: #ff9800;
          --container-bg: #fff;
          --btn-bg: #ff9800;
          --btn-hover: #e68900;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: var(--bg-color);
          color: var(--text-color);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: background 0.5s, color 0.5s;
        }

        .container {
          background: var(--container-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 90%;
          max-width: 400px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .header h1 {
          font-size: 1.6rem;
          margin: 0;
        }

        .toggle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.8rem;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 26px;
          margin-bottom: 4px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: background-color 0.4s;
          border-radius: 26px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 3px;
          bottom: 3px;
          background-color: #fff;
          transition: transform 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: var(--accent-color);
        }

        input:checked + .slider:before {
          transform: translateX(24px);
        }

        .timer-section {
          text-align: center;
        }

        .progress-bar {
          width: 100%;
          height: 20px;
          background: #ddd;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .progress {
          height: 100%;
          width: 0%;
          background: var(--accent-color);
          transition: width 1s linear;
        }

        .timer {
          font-size: 2rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .btn-group {
          margin-top: 1rem;
        }

        button {
          padding: 0.7rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          background: var(--btn-bg);
          color: var(--text-color);
          cursor: pointer;
          transition: background 0.3s;
          margin: 0 0.3rem;
        }

        button:hover {
          background: var(--btn-hover);
        }

        .message {
          margin-top: 1rem;
          font-size: 1.1rem;
        }
      `}</style>
    </>
  );
};

export default CountdownLightSwitch;
