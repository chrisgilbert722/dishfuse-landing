export default function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
      color: '#fff',
      fontSize: '1.5rem'
    }}>
      <div>
        <h1>404 — Page Not Found</h1>
        <p>Looks like something went wrong, but don’t worry — DishFuse will be back in a flash!</p>
      </div>
    </div>
  );
}
