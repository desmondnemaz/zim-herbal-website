import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-text-main font-roboto">



      {/* HERO */}
      <section className="text-center px-6 py-24">
        <div className="max-w-3xl mx-auto">

          <p className="text-sm uppercase tracking-widest text-primary font-poppins font-bold mb-4">
            Traditional Knowledge • Digital Future
          </p>

          <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight font-poppins">
            Zimbabwean Herbal Repository
          </h1>

          <p className="text-lg text-text-main mb-10">
            Discover, learn, and preserve traditional herbal remedies used across Zimbabwe for generations.
          </p>

          <a
            href="https://desmondnemaz.github.io/zim_herbs_repo/"
            className="inline-block bg-primary hover:bg-primary-dark transition-colors font-poppins text-white px-8 py-3 rounded-xl shadow-lg font-semibold"
          >
            Explore Herbal Database
          </a>
        </div>
      </section>

      {/* FEATURE GRID (APP STYLE CARDS) */}
      <section className="px-6 pb-20">
        <h2 className="text-center text-3xl font-bold mb-10 text-primary font-poppins">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-secondary rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-text-main">
            <div className="text-4xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-full">🌿</div>
            <h3 className="font-bold text-xl mb-2 font-poppins">Herbal Database</h3>
            <p className="text-text-main/90 text-sm">
              Browse a structured collection of Zimbabwean medicinal plants and traditional remedies.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-secondary rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-text-main">
            <div className="text-4xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-full">💊</div>
            <h3 className="font-bold text-xl mb-2 font-poppins">Medicinal Uses</h3>
            <p className="text-text-main/90 text-sm">
              Understand how each herb is traditionally used for treatment and wellness.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-secondary rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 text-text-main">
            <div className="text-4xl mb-4 bg-white/20 w-16 h-16 flex items-center justify-center rounded-full">⚠️</div>
            <h3 className="font-bold text-xl mb-2 font-poppins">Safety Guidance</h3>
            <p className="text-text-main/90 text-sm">
              Learn preparation methods, dosage awareness, and safe usage practices.
            </p>
          </div>

        </div>
      </section>

      {/* APP STYLE INFO SECTION */}
      <section className="px-6 py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6 font-poppins text-white">
            Why This Platform Exists
          </h2>

          <p className="text-white/90 text-lg">
            This project preserves indigenous Zimbabwean herbal knowledge and transforms it into a digital,
            searchable system for education, research, and safe public access.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-text-muted font-roboto">
        © {new Date().getFullYear()} Zim Herbal Repository • Built for education & research
      </footer>

    </main>
  );
}