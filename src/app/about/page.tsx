import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main font-roboto">


      {/* CONTENT */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary font-poppins mb-6">About the Project</h1>
        <p className="text-lg text-text-main mb-10 text-left">
          The Zim Herbal Repository is dedicated to preserving indigenous Zimbabwean herbal knowledge and transforming it into a digital, searchable system. Our mission is to ensure this vital information is accessible for education, research, and public awareness.
        </p>
        
        <div className="p-12 border-2 border-dashed border-primary/20 rounded-2xl bg-secondary/50">
          <p className="text-text-muted italic">More information about our mission, vision, and team will be added here.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-text-muted font-roboto mt-auto">
        © {new Date().getFullYear()} Zim Herbal Repository • Built for education & research
      </footer>
    </main>
  );
}
