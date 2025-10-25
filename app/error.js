'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center'
    }}>
      <div>
        <h1>500 — Server Error</h1>
        <p>Something went wrong while loading the page.</p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: '20px',
            backgroundColor: '#FFC107',
            color: '#000',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}>
          Try Again
        </button>
      </div>
    </div>
  );
}
