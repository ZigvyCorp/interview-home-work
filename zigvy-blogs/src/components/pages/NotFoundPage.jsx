import React from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '31px',
  fontWeight: 'bold',
  color: '#55555555'
}

export default function NotFoundPage() {
  return (
    <div style={style}>PAGE NOT FOUND</div>
  )
}
