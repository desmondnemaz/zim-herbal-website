import Image from "next/image";

export default function HerbsPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main font-roboto">


      {/* CONTENT */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary font-poppins mb-6">Herbal Database</h1>
        <p className="text-lg text-text-main mb-10">
          Browse our comprehensive collection of Zimbabwean medicinal plants, categorized by their traditional uses.
        </p>
        
        {/* Placeholder for future herbs grid/list */}
        <div className="p-12 border-2 border-dashed border-primary/20 rounded-2xl bg-secondary/50">
          <p className="text-text-muted italic">The herbal database content will be populated here.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-text-muted font-roboto mt-auto">
        © {new Date().getFullYear()} Zim Herbal Repository • Built for education & research
      </footer>
    </main>
  );
}
