export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-auto min-w-full min-h-full max-w-none object-cover brightness-50"
      >
        <source src="https://cdn.coverr.co/videos/coverr-chef-prepares-meal-1234/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
          Boost Restaurant Profits with AI that Predicts, Plans & Prevents Waste
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          DishFuse helps restaurants increase profit margins, reduce waste, and optimize operations using AI.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:opacity-90 transition duration-300"
        >
          Start Free 14-Day Trial
        </a>
      </div>
            {/* Feature Section */}
<section className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
      alt="AI Menu Pricing"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-white">AI Menu Pricing</h3>
    <p className="text-gray-200">
      Smart pricing insights that increase profits automatically.
    </p>
  </div>

  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
      alt="Inventory Forecasting"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-white">Inventory Forecasting</h3>
    <p className="text-gray-200">
      Predict demand and eliminate costly waste with AI-powered forecasts.
    </p>
  </div>

  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition">
    <img
      src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
      alt="Profit Analytics"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2 text-white">Profit Analytics</h3>
    <p className="text-gray-200">
      See which dishes and locations perform best in real time.
    </p>
  </div>
</section>
{/* Testimonials Section */}
<section className="relative z-10 mt-32 text-center px-8 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold mb-10 text-white animate-fadeInUp">
    Why Restaurants Love DishFuse
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Testimonial 1 */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300 animate-fadeInUp">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="Customer 1"
        className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-emerald-400"
      />
      <p className="italic text-gray-200 mb-4">
        “DishFuse completely changed how we price our menu. Profits are up 20%!”
      </p>
      <h4 className="text-lg font-semibold text-white">— Sarah, Bistro Bella</h4>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300 animate-fadeInUp delay-200">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Customer 2"
        className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-blue-400"
      />
      <p className="italic text-gray-200 mb-4">
        “We waste 40% less food now. The AI forecasting is spot on!”
      </p>
      <h4 className="text-lg font-semibold text-white">— James, Urban Eats</h4>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition duration-300 animate-fadeInUp delay-300">
      <img
        src="https://randomuser.me/api/portraits/men/76.jpg"
        alt="Customer 3"
        className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-indigo-400"
      />
      <p className="italic text-gray-200 mb-4">
        “The profit analytics dashboard shows us exactly where we win.”
      </p>
      <h4 className="text-lg font-semibold text-white">— David, GreenLeaf Café</h4>
    </div>
  </div>
</section>

    </main>
  );
}

