// src/Button.jsx
import React from 'react';

const Button = () => (
  <button style={{ padding: '10px', fontSize: '16px' }} onClick={() => alert('Button clicked')}>
    Remote Button
  </button>
);

export default Button;
