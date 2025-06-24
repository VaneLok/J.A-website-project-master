import React from 'react';

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 80, // Adjust as needed to fit your monitor
  left: 80, // Adjust as needed to fit your monitor
  color: '#fff',
  fontFamily: 'monospace',
  fontSize: '2em',
  background: 'rgba(0,0,0,0.7)',
  padding: '10px 30px',
  borderRadius: '8px',
  pointerEvents: 'none',
  zIndex: 1000,
};

export default function MonitorOverlay() {
  return (
    <div style={overlayStyle}>
      <div>Jennifer Amaya</div>
      <div style={{ fontSize: '1em' }}>Cybersecurity</div>
    </div>
  );
}