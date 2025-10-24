export default function Home() {
  return (
    <main className="hero min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Boost Restaurant Profits with AI that Predicts, Plans & Prevents Waste
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          DishFuse helps restaurants increase profit margins, reduce waste, and optimize operations using advanced AI insights.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out font-semibold"
        >
          Start Free 14-Day Trial
        </a>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-5xl">
        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white">AI Menu Pricing</h3>
          <p className="text-gray-300">
            Smart pricing insights that increase profits automatically.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white">Inventory Forecasting</h3>
          <p className="text-gray-300">
            Predict demand and eliminate costly waste.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-2 text-white">Profit Analytics</h3>
          <p className="text-gray-300">
            See which dishes and locations perform best in real time.
          </p>
        </div>
      </section>
    </main>
  );
}
