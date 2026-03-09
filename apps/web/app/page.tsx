export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Fluid Corporate</h1>
        <p className="text-lg text-brand-600 mb-8">
          Production-ready Next.js + Sanity monorepo
        </p>
        <div className="space-y-4">
          <p>
            <a
              href="http://localhost:3001"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              → Sanity Studio
            </a>
          </p>
          <p className="text-sm text-brand-500">
            Configure your Sanity project in .env.local to get started
          </p>
        </div>
      </div>
    </main>
  );
}
