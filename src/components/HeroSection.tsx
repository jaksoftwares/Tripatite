'use client';


export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg6.jpeg')" }}>
      <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transforming Spaces, Elevating Lifestyles
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover premium interior design solutions with Tripatite Interiors.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
