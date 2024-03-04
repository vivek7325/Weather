import React from 'react';
// import './ErrorDisplay.css'; 

const ErrorDisplay = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">Error: {message}</p>
    </div>
  );
};

export default ErrorDisplay;
