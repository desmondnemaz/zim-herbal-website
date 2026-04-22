export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      
      <h1 className="text-4xl font-bold mb-4">
        🌿 Zim Herbal Repository
      </h1>

      <p className="text-lg mb-6 max-w-xl">
        Discover Zimbabwe’s traditional herbal medicine, remedies, and natural healing knowledge.
      </p>

      <div className="flex gap-4">
        <a
          href="https://desmondnemaz.github.io/zim_herbs_repo/"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Explore Herbs
        </a>

        <a
          href="/about"
          className="border px-6 py-3 rounded-lg"
        >
          Learn More
        </a>
      </div>

    </main>
  );
}