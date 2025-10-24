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
    </main>
  );
}

