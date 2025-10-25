// app/page.js
export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Welcome to DishFuse 🍽️
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        AI that predicts, plans, and prevents waste for restaurants.
      </p>
      <a
        href="#"
        style={{
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
