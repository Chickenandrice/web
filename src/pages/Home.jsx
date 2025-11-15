export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">

      {/* ---- NAVBAR ---- */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-xl font-bold">MySite</div>

          <nav className="flex items-center gap-6">
            <a href="#features" className="opacity-80 hover:opacity-100">
              Features
            </a>
            <a href="#about" className="opacity-80 hover:opacity-100">
              About
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-slate-500 hover:bg-slate-800 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ---- HERO ---- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold">
          Welcome to Your Homepage
        </h1>

        <p className="mt-4 text-slate-400 max-w-xl">
          A clean, modern React + Tailwind starter layout. Customize it
          however you want — perfect for apps, landing pages, or personal
          sites.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-black font-semibold transition">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-lg border border-slate-500 hover:bg-slate-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* ---- FEATURES ---- */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2">Fast</h3>
            <p className="text-slate-400">
              Tailwind + React gives you fast builds and snappy UI.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2">Customizable</h3>
            <p className="text-slate-400">
              Everything is utility-first, so styling is fast and painless.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold mb-2">Responsive</h3>
            <p className="text-slate-400">
              Fully responsive out of the box with Tailwind’s breakpoints.
            </p>
          </div>
        </div>
      </section>

      {/* ---- ABOUT ---- */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">About This Site</h2>
        <p className="text-slate-400 max-w-2xl">
          This homepage is intentionally simple so you can scale it into
          whatever you need — from a full SaaS landing page to a personal
          dashboard. Add animations, components, API calls, or pages easily.
        </p>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="mt-auto bg-slate-900 border-t border-slate-800 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} MySite — All rights reserved.
      </footer>
    </div>
  );
}
