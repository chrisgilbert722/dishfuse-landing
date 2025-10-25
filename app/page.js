// app/page.js
export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Welcome to DishFuse 🍽️
      </h1>
      <p>AI that predicts, plans, and prevents waste for restaurants.</p>
      <a
        href="#"
        style={{
          marginTop: "20px",
          background: "linear-gradient(to right, #facc15, #f59e0b)",
          padding: "10px 25px",
          borderRadius: "8px",
          color: "#000",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Start Free Trial
      </a>
    </main>
  );
}

