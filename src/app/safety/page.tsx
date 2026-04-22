import Image from "next/image";

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main font-roboto">


      {/* CONTENT */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary font-poppins mb-6">Safety Guidance</h1>
        <p className="text-lg text-text-main mb-10">
          Important information regarding the preparation methods, dosage awareness, and safe usage practices for traditional herbs.
        </p>
        
        <div className="bg-red-50 text-red-800 p-6 rounded-2xl shadow-sm text-left mb-8 border border-red-200">
          <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Medical Disclaimer
          </h3>
          <p className="text-sm leading-relaxed">
            The information provided on this platform is for educational and research purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.
          </p>
        </div>

        <div className="p-12 border-2 border-dashed border-primary/20 rounded-2xl bg-secondary/50">
          <p className="text-text-muted italic">Detailed safety guidelines will be provided here.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="text-center py-8 text-sm text-text-muted font-roboto mt-auto">
        © {new Date().getFullYear()} Zim Herbal Repository • Built for education & research
      </footer>
    </main>
  );
}
