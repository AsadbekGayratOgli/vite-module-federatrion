// src/RemotePage.jsx
import React from 'react';
import Button from 'remote/Button'; // Imported from the remote app

const RemotePage = () => {
  return (
    <div>
      <h2>Remote App Page</h2>
      <p>This page loads a remote component from the remote app:</p>
      <Button />
    </div>
  );
};

export default RemotePage;
